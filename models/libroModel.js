const librosIniciales = require('../constants/librosIniciales');

class LibroModel {
    constructor() {
        this.libros = [...librosIniciales]; 
    }

    obtenerTodos() {
        return this.libros;
    }

    obtenerPorId(id) {
        return this.libros.find(libro => libro.id === id);
    }

    agregar(libro) {
        this.libros.push(libro);
    }

    actualizar(id, nuevoLibro) {
        const index = this.libros.findIndex(libro => libro.id === id);
        if (index !== -1) {
            this.libros[index] = { ...this.libros[index], ...nuevoLibro };
            return true;
        }
        return false;
    }

    borrar(id) {
        const index = this.libros.findIndex(libro => libro.id === id);
        if (index !== -1) {
            this.libros.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = new LibroModel();
