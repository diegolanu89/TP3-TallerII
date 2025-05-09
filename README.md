# TP3 - Taller II

Este proyecto consiste en la creación de un servidor HTTP basado en **Express** que escuche en el puerto **8080** y gestione el recurso **libros** mediante las rutas **GET**, **POST**, **PUT** y **DELETE**.

## 📚 Descripción de funcionalidades

La aplicación de servidor gestionará el recurso `libros` a través de las siguientes rutas:

- `/libros` (GET): Obtiene todos los libros almacenados en un array en el servidor.
- `/libros/:id` (GET): Obtiene un libro por su `id`.
- `/libros` (POST): Incorpora un nuevo libro.
- `/libros/:id` (PUT): Actualiza un libro por su `id`.
- `/libros/:id` (DELETE): Borra un libro por su `id`.

Un libro será representado con una estructura JSON (almacenada dentro de un array de libros) con los siguientes campos:

```json
{
  "id": 1,
  "titulo": "Título del libro",
  "autor": "Autor del libro",
  "año": 2024
}
