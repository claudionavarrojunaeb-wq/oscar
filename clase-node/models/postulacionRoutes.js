const express = require('express');
const router = express.Router();
const postulacionController = require('../controllers/postulacionController');
const { validarPostulacion } = require('../middlewares/validation');

// GET /api/postulaciones - Obtener todas las postulaciones
router.get('/', postulacionController.obtenerPostulaciones);

// GET /api/postulaciones/alumno/:id - Postulaciones de un alumno
router.get('/alumno/:id', postulacionController.obtenerPostulacionesPorAlumno);

// POST /api/postulaciones - Crear nueva postulación
router.post('/', validarPostulacion, postulacionController.crearPostulacion);

// PUT /api/postulaciones/:id/estado - Actualizar estado de postulación
router.put('/:id/estado', postulacionController.actualizarEstado);

module.exports = router;