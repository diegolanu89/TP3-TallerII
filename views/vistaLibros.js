const fs = require('fs');
const path = require('path');

function generarVistaLibros(libros) {
    const vistaLibros = libros.map(libro => `
        <tr>
            <td>${libro.id}</td>
            <td>${libro.titulo}</td>
            <td>${libro.autor}</td>
            <td>${libro.año}</td>
        </tr>
    `).join('');

    const templatePath = path.join(__dirname, 'vistaLibros.html');
    let html = fs.readFileSync(templatePath, 'utf8');

    html = html.replace('<!-- LISTA_LIBROS -->', vistaLibros);

    return html;
}

module.exports = generarVistaLibros;
