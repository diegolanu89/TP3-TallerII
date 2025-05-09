const libroModel = require('../models/libroModel');
const responder = require('../utils/render');
const generarVistaLibros = require('../views/vistaLibros');
const generarVistaLibroDetalle = require('../views/vistaLibroDetalle');
const generarVistaMensaje = require('../views/vistaMensaje');
const MENSAJES = require('../constants/mensajes');

class LibroController {
    obtenerTodos(req, res) {
        const libros = libroModel.obtenerTodos();
        responder(req, res, libros, generarVistaLibros);
    }

    obtenerPorId(req, res) {
        const id = parseInt(req.params.id);
        const libro = libroModel.obtenerPorId(id);

        if (!libro) {
            res.status(404);
            return responder(req, res, { mensaje: MENSAJES.LIBRO_NO_ENCONTRADO }, () => generarVistaMensaje(MENSAJES.LIBRO_NO_ENCONTRADO));
        }
        

        responder(req, res, libro, generarVistaLibroDetalle);
    }

    agregar(req, res) {
        const { id, titulo, autor, año } = req.body;
        const nuevoLibro = { id: parseInt(id), titulo, autor, año: parseInt(año) };

        libroModel.agregar(nuevoLibro);
        res.status(201);
        responder(req, res, { mensaje: MENSAJES.LIBRO_AGREGADO }, () => generarVistaMensaje(MENSAJES.LIBRO_AGREGADO));
    }

    actualizar(req, res) {
        const id = parseInt(req.params.id);
        const { titulo, autor, año } = req.body;
        const actualizado = libroModel.actualizar(id, { titulo, autor, año: parseInt(año) });

        if (!actualizado) {
            return responder(req, res, { mensaje: MENSAJES.LIBRO_NO_ENCONTRADO }, () => generarVistaMensaje(MENSAJES.LIBRO_NO_ENCONTRADO));
        }

        responder(req, res, { mensaje: MENSAJES.LIBRO_ACTUALIZADO }, () => generarVistaMensaje(MENSAJES.LIBRO_ACTUALIZADO));
    }

    borrar(req, res) {
        const id = parseInt(req.params.id);
        const borrado = libroModel.borrar(id);

        if (!borrado) {
            return responder(req, res, { mensaje: MENSAJES.LIBRO_NO_ENCONTRADO }, () => generarVistaMensaje(MENSAJES.LIBRO_NO_ENCONTRADO));
        }

        responder(req, res, { mensaje: MENSAJES.LIBRO_BORRADO }, () => generarVistaMensaje(MENSAJES.LIBRO_BORRADO));
    }
}

module.exports = new LibroController();
