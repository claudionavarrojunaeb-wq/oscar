import express from 'express';
import { getAllAlumnos, getAlumno } from '../controllers/alumnosController.js';
export const alumnos = express.Router();
alumnos.get('/', (req, res) => {
    res.status(200).json({
        alumnos: getAllAlumnos()
    })
})
alumnos.get('/:id', (req, res) => {
    const { id } = req.params;
    let status = 200;
    if (!id) {
        return res.status(400).json({
            mensaje: 'El id es obligatorio'
        })
    }
    console.log("Alumno: ", getAlumno(id));
    // if (!getAlumno(id).alumno.id) {
    if (!getAlumno(id).alumno) {
        status = 404;
    }
    res.status(status).json(getAlumno(id))
})
// module.exports = alumnos;