# 📚 TP3 Taller II - API de Libros

Este proyecto consiste en la creación de un servidor HTTP basado en **Express** que escuche en el puerto **8080** y gestione el recurso **libros** mediante las rutas **GET**, **POST**, **PUT** y **DELETE**.

## 🚀 Tecnologías Utilizadas

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Materialize-CSS-EE6E73?style=for-the-badge&logo=materializecss&logoColor=white" alt="Materialize CSS" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest" />
  <img src="https://img.shields.io/badge/Supertest-9B59B6?style=for-the-badge&logo=testing-library&logoColor=white" alt="Supertest" />
  <img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=nodemon&logoColor=white" alt="Nodemon" />
  <img src="https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white" alt="Postman" />
</p>

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
```

## 💽 Instalación

```json
npm install
```

## 🧪  Scripts Disponibles (Node scripts)

### 📦 Ejecutar tests automáticamente

```json
npm run test:auto
```

### 🚀 Levantar servidor con nodemon


```json
npm run dev
```


## Task Code (VSCode):
### ▶️ ¿Cómo se usan?
- Abrí la paleta de comandos con Ctrl + Shift + P (o F1).

- Escribí: Run Task o Ejecutar tarea, elegí la que quieras usar.