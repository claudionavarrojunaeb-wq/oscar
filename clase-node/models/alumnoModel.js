import { alumnos } from '../data.js'
export const obtenerAlumnos = () => alumnos;
export const obtenerAlumno = (id) => {
  const auxAlumno = alumnos.find(alumno => {
    console.log(alumno.id);
    return alumno.id === parseInt(id)
  })
  return auxAlumno;
}
