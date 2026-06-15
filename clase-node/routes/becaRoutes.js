const express = require('express');
const router = express.Router();
const becaController = require('../controllers/becaController');
const { validarBeca } = require('../middlewares/validation');

// GET /api/becas - Obtener todas las becas activas
router.get('/', becaController.obtenerBecas);

// GET /api/becas/:id - Obtener beca por ID
router.get('/:id', becaController.obtenerBecaPorId);

// POST /api/becas - Crear nueva beca
router.post('/', validarBeca, becaController.crearBeca);

module.exports = router;