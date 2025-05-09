const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const libroRoutes = require('./routes/libroRoutes');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;


// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use('/libros', libroRoutes);

// SERVER
app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
