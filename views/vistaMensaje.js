const fs = require('fs');
const path = require('path');

function generarVistaMensaje(mensaje) {
    const templatePath = path.join(__dirname, 'vistaMensaje.html');
    let html = fs.readFileSync(templatePath, 'utf8');

    html = html.replace('<!-- MENSAJE -->', mensaje);
    return html;
}

module.exports = generarVistaMensaje;
