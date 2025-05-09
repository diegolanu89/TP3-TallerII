const fs = require('fs');
const path = require('path');

function generarVistaLibroDetalle(libro) {
    const templatePath = path.join(__dirname, 'vistaLibroDetalle.html');
    let html = fs.readFileSync(templatePath, 'utf8');

    html = html.replace('<!-- LIBRO_ID -->', libro.id);
    html = html.replace('<!-- LIBRO_TITULO -->', libro.titulo);
    html = html.replace('<!-- LIBRO_AUTOR -->', libro.autor);
    html = html.replace('<!-- LIBRO_ANIO -->', libro.año);

    return html;
}

module.exports = generarVistaLibroDetalle;
