const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libroController');

router.get('/', libroController.obtenerTodos);
router.get('/:id', libroController.obtenerPorId);
router.post('/', libroController.agregar);
router.put('/:id', libroController.actualizar);
router.delete('/:id', libroController.borrar);

module.exports = router;
