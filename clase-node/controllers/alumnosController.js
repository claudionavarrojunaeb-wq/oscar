import { obtenerAlumnos, obtenerAlumno } from '../models/alumnoModel.js'
export const getAlumno = (id) => {
    // const { alumno, error } = obtenerAlumno(id);
    const alumno = obtenerAlumno(id);
    if (!alumno) {
        return {
            alumno: {},
            mensaje: 'Alumno no encontrado'
        };
    }
    return alumno;
}
export const getAllAlumnos = () => obtenerAlumnos();