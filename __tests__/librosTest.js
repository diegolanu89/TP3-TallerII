const request = require('supertest');
const express = require('express');
const libroRoutes = require('../routes/libroRoutes');
const bodyParser = require('body-parser');
const librosIniciales = require('../constants/librosIniciales');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/libros', libroRoutes);

describe('API de Libros - Diego Peyrano 🇦🇷', () => {
    it('Debería tirar alta tabla en GET /libros si le pedimos HTML', async () => {
        const response = await request(app)
            .get('/libros')
            .set('Accept', 'text/html');

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/html/);
        expect(response.text).toContain('<table');
        expect(response.text).toContain(librosIniciales[0].titulo);
    });

    it('Debería mandar JSON piola en GET /libros si pedimos application/json', async () => {
        const response = await request(app)
            .get('/libros')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(Array.isArray(response.body)).toBe(true);
        expect(response.body[0]).toHaveProperty('id');
        expect(response.body[0]).toHaveProperty('titulo');
        expect(response.body[0]).toHaveProperty('autor');
        expect(response.body[0]).toHaveProperty('año');
    });

    it('Debería mostrar detalle del libro en HTML al pedir /libros/1', async () => {
        const response = await request(app)
            .get('/libros/1')
            .set('Accept', 'text/html');

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/html/);
        expect(response.text).toContain('<ul');
        expect(response.text).toContain(librosIniciales[0].titulo);
    });

    it('Debería devolver JSON del libro 1 al pedirlo en JSON', async () => {
        const response = await request(app)
            .get('/libros/1')
            .set('Accept', 'application/json');

        expect(response.status).toBe(200);
        expect(response.headers['content-type']).toMatch(/json/);
        expect(response.body).toHaveProperty('id', librosIniciales[0].id);
        expect(response.body).toHaveProperty('titulo', librosIniciales[0].titulo);
    });

    it('Debería avisar que no existe el libro 999 en JSON', async () => {
        const response = await request(app)
            .get('/libros/999')
            .set('Accept', 'application/json');

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('mensaje');
    });

    it('Debería agregar un libro nuevo con autor Diego Peyrano y tenerlo en GET', async () => {
        const nuevoLibro = {
            id: 3,
            titulo: 'Libro Argento',
            autor: 'Diego Peyrano',
            año: 2024
        };

        const postResponse = await request(app)
            .post('/libros')
            .send(nuevoLibro)
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');

        expect(postResponse.status).toBe(201);
        expect(postResponse.body).toHaveProperty('mensaje');

        const getResponse = await request(app)
            .get('/libros')
            .set('Accept', 'application/json');

        expect(getResponse.body.some(libro => libro.id === nuevoLibro.id && libro.autor === nuevoLibro.autor)).toBe(true);
    });

    it('Debería actualizar el autor del libro 1 a Diego Peyrano y que quede pipi-cucú', async () => {
        const updateResponse = await request(app)
            .put('/libros/1')
            .send({ autor: 'Diego Peyrano' })
            .set('Accept', 'application/json')
            .set('Content-Type', 'application/json');

        expect(updateResponse.status).toBe(200);
        expect(updateResponse.body).toHaveProperty('mensaje');

        const libroActualizado = await request(app)
            .get('/libros/1')
            .set('Accept', 'application/json');

        expect(libroActualizado.body.autor).toBe('Diego Peyrano');
    });

    it('Debería borrar al libro 1 y después no encontrarlo ni a palos', async () => {
        const deleteResponse = await request(app)
            .delete('/libros/1')
            .set('Accept', 'application/json');

        expect(deleteResponse.status).toBe(200);
        expect(deleteResponse.body).toHaveProperty('mensaje');

        const getResponse = await request(app)
            .get('/libros/1')
            .set('Accept', 'application/json');

        expect(getResponse.status).toBe(404);
    });
});
