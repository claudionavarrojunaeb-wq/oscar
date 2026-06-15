// data.js - Datos de ejemplo para sistema de becas y postulaciones

// ================== ALUMNOS ==================
export const alumnos = [
    {
        id: 1,
        rut: "12345678-9",
        nombre: "Juan Carlos",
        apellidos: "Pérez González",
        email: "juan.perez@estudiante.cl",
        telefono: "+56912345678",
        fechaNacimiento: "2000-03-15",
        direccion: {
            calle: "Av. Salvador 1234",
            comuna: "Providencia",
            ciudad: "Santiago",
            region: "Metropolitana"
        },
        situacionAcademica: {
            institucion: "Universidad de Chile",
            carrera: "Ingeniería Civil en Computación",
            año: 3,
            promedio: 6.2,
            creditosAprobados: 180
        },
        situacionSocioeconomica: {
            ingresoFamiliar: 450000,
            numeroIntegrantes: 4,
            vivienPropia: false,
            trabajaEstudiante: true
        },
        activo: false,
        fechaCreacion: "2023-03-01T10:00:00.000Z"
    },
    {
        id: 2,
        rut: "98765432-1",
        nombre: "María José",
        apellidos: "Silva Rodríguez",
        email: "maria.silva@estudiante.cl",
        telefono: "+56987654321",
        fechaNacimiento: "1999-08-22",
        direccion: {
            calle: "Los Aromos 567",
            comuna: "Las Condes",
            ciudad: "Santiago",
            region: "Metropolitana"
        },
        situacionAcademica: {
            institucion: "Pontificia Universidad Católica",
            carrera: "Medicina",
            año: 5,
            promedio: 6.8,
            creditosAprobados: 300
        },
        situacionSocioeconomica: {
            ingresoFamiliar: 320000,
            numeroIntegrantes: 3,
            vivienPropia: true,
            trabajaEstudiante: false
        },
        activo: true,
        fechaCreacion: "2023-02-15T14:30:00.000Z"
    },
    {
        id: 3,
        rut: "11223344-5",
        nombre: "Carlos Eduardo",
        apellidos: "Morales López",
        email: "carlos.morales@estudiante.cl",
        telefono: "+56911223344",
        fechaNacimiento: "2001-12-03",
        direccion: {
            calle: "San Martín 890",
            comuna: "Ñuñoa",
            ciudad: "Santiago",
            region: "Metropolitana"
        },
        situacionAcademica: {
            institucion: "Universidad de Santiago",
            carrera: "Ingeniería Comercial",
            año: 2,
            promedio: 5.9,
            creditosAprobados: 120
        },
        situacionSocioeconomica: {
            ingresoFamiliar: 280000,
            numeroIntegrantes: 5,
            vivienPropia: false,
            trabajaEstudiante: true
        },
        activo: true,
        fechaCreacion: "2023-03-10T09:15:00.000Z"
    },
    {
        id: 4,
        rut: "55667788-9",
        nombre: "Ana Beatriz",
        apellidos: "Fernández Castro",
        email: "ana.fernandez@estudiante.cl",
        telefono: "+56955667788",
        fechaNacimiento: "2000-06-18",
        direccion: {
            calle: "Vicuña Mackenna 1500",
            comuna: "San Joaquín",
            ciudad: "Santiago",
            region: "Metropolitana"
        },
        situacionAcademica: {
            institucion: "Universidad Técnica Federico Santa María",
            carrera: "Ingeniería Civil Industrial",
            año: 4,
            promedio: 6.5,
            creditosAprobados: 240
        },
        situacionSocioeconomica: {
            ingresoFamiliar: 380000,
            numeroIntegrantes: 4,
            vivienPropia: true,
            trabajaEstudiante: false
        },
        activo: true,
        fechaCreacion: "2023-01-20T16:45:00.000Z"
    }
];

// ================== BECAS ==================
export const becas = [
    {
        id: 1,
        nombre: "Beca de Excelencia Académica",
        descripcion: "Beca destinada a estudiantes con destacado rendimiento académico (promedio superior a 6.0)",
        tipoAyuda: "monetaria",
        monto: 500000,
        duracion: 12, // meses
        requisitos: {
            promedioMinimo: 6.0,
            añoMaximo: 5,
            ingresoFamiliarMaximo: 600000,
            creditosMinimos: 150
        },
        documentosRequeridos: [
            "Certificado de notas",
            "Declaración de ingresos familiares",
            "Cédula de identidad",
            "Certificado de matrícula"
        ],
        fechaApertura: "2024-03-01T00:00:00.000Z",
        fechaCierre: "2024-04-30T23:59:59.000Z",
        cupos: 50,
        cuposOcupados: 23,
        activa: true,
        categoria: "academica",
        entidadFinanciadora: "Ministerio de Educación",
        fechaCreacion: "2024-02-01T10:00:00.000Z"
    },
    {
        id: 2,
        nombre: "Beca de Apoyo Socioeconómico",
        descripcion: "Ayuda económica para estudiantes en situación de vulnerabilidad social",
        tipoAyuda: "monetaria",
        monto: 300000,
        duracion: 6, // meses
        requisitos: {
            promedioMinimo: 4.0,
            añoMaximo: 6,
            ingresoFamiliarMaximo: 400000,
            creditosMinimos: 60
        },
        documentosRequeridos: [
            "Ficha de protección social",
            "Declaración de ingresos familiares",
            "Certificado de matrícula",
            "Carta de motivación"
        ],
        fechaApertura: "2024-02-15T00:00:00.000Z",
        fechaCierre: "2024-05-15T23:59:59.000Z",
        cupos: 100,
        cuposOcupados: 67,
        activa: true,
        categoria: "social",
        entidadFinanciadora: "JUNAEB",
        fechaCreacion: "2024-01-15T14:30:00.000Z"
    },
    {
        id: 3,
        nombre: "Beca de Alimentación Estudiantil",
        descripcion: "Tarjeta de alimentación para uso en casinos universitarios y establecimientos afiliados",
        tipoAyuda: "alimentacion",
        monto: 150000,
        duracion: 10, // meses
        requisitos: {
            promedioMinimo: 4.5,
            añoMaximo: 7,
            ingresoFamiliarMaximo: 500000,
            creditosMinimos: 30
        },
        documentosRequeridos: [
            "Certificado de matrícula",
            "Declaración de ingresos familiares",
            "Fotografía tamaño carnet"
        ],
        fechaApertura: "2024-03-15T00:00:00.000Z",
        fechaCierre: "2024-06-30T23:59:59.000Z",
        cupos: 200,
        cuposOcupados: 145,
        activa: true,
        categoria: "alimentacion",
        entidadFinanciadora: "JUNAEB",
        fechaCreacion: "2024-02-20T11:15:00.000Z"
    },
    {
        id: 4,
        nombre: "Beca Presidente de la República",
        descripcion: "Beca de excelencia para los mejores estudiantes del país",
        tipoAyuda: "monetaria",
        monto: 1200000,
        duracion: 12, // meses
        requisitos: {
            promedioMinimo: 6.5,
            añoMaximo: 4,
            ingresoFamiliarMaximo: 800000,
            creditosMinimos: 200
        },
        documentosRequeridos: [
            "Certificado de notas con ranking nacional",
            "Carta de recomendación académica",
            "Ensayo de logros y metas",
            "Declaración de ingresos familiares"
        ],
        fechaApertura: "2024-01-01T00:00:00.000Z",
        fechaCierre: "2024-03-31T23:59:59.000Z",
        cupos: 20,
        cuposOcupados: 8,
        activa: false, // Ya cerrada
        categoria: "presidencial",
        entidadFinanciadora: "Presidencia de la República",
        fechaCreacion: "2023-12-01T08:00:00.000Z"
    }
];

// ================== POSTULACIONES ==================
export const postulaciones = [
    {
        id: 1,
        alumnoId: 1,
        becaId: 1,
        fechaPostulacion: "2024-03-15T14:30:00.000Z",
        estado: "aprobada",
        documentosEntregados: [
            "Certificado de notas",
            "Declaración de ingresos familiares",
            "Cédula de identidad",
            "Certificado de matrícula"
        ],
        comentarios: "Cumple todos los requisitos. Excelente rendimiento académico.",
        puntaje: 95,
        fechaEvaluacion: "2024-04-02T10:15:00.000Z",
        evaluadoPor: "María González - Coordinadora Académica",
        montoAsignado: 500000,
        fechaAsignacion: "2024-04-05T09:00:00.000Z",
        vigente: true
    },
    {
        id: 2,
        alumnoId: 2,
        becaId: 2,
        fechaPostulacion: "2024-02-20T16:45:00.000Z",
        estado: "aprobada",
        documentosEntregados: [
            "Ficha de protección social",
            "Declaración de ingresos familiares",
            "Certificado de matrícula",
            "Carta de motivación"
        ],
        comentarios: "Situación socioeconómica vulnerable. Buen rendimiento académico.",
        puntaje: 87,
        fechaEvaluacion: "2024-03-05T11:30:00.000Z",
        evaluadoPor: "Carlos Ruiz - Asistente Social",
        montoAsignado: 300000,
        fechaAsignacion: "2024-03-08T14:20:00.000Z",
        vigente: true
    },
    {
        id: 3,
        alumnoId: 3,
        becaId: 3,
        fechaPostulacion: "2024-03-20T09:15:00.000Z",
        estado: "en_revision",
        documentosEntregados: [
            "Certificado de matrícula",
            "Declaración de ingresos familiares"
        ],
        comentarios: "Faltan documentos por entregar (fotografía).",
        puntaje: null,
        fechaEvaluacion: null,
        evaluadoPor: null,
        montoAsignado: null,
        fechaAsignacion: null,
        vigente: false
    },
    {
        id: 4,
        alumnoId: 4,
        becaId: 1,
        fechaPostulacion: "2024-03-25T13:20:00.000Z",
        estado: "rechazada",
        documentosEntregados: [
            "Certificado de notas",
            "Declaración de ingresos familiares",
            "Cédula de identidad"
        ],
        comentarios: "Ingresos familiares superan el límite establecido. Falta certificado de matrícula.",
        puntaje: 45,
        fechaEvaluacion: "2024-04-10T15:45:00.000Z",
        evaluadoPor: "Ana Torres - Coordinadora Social",
        montoAsignado: null,
        fechaAsignacion: null,
        vigente: false
    },
    {
        id: 5,
        alumnoId: 1,
        becaId: 3,
        fechaPostulacion: "2024-03-18T11:00:00.000Z",
        estado: "aprobada",
        documentosEntregados: [
            "Certificado de matrícula",
            "Declaración de ingresos familiares",
            "Fotografía tamaño carnet"
        ],
        comentarios: "Cumple requisitos para beca de alimentación.",
        puntaje: 78,
        fechaEvaluacion: "2024-03-28T16:30:00.000Z",
        evaluadoPor: "Luis Morales - Coordinador de Alimentación",
        montoAsignado: 150000,
        fechaAsignacion: "2024-04-01T10:00:00.000Z",
        vigente: true
    },
    {
        id: 6,
        alumnoId: 2,
        becaId: 4,
        fechaPostulacion: "2024-02-10T08:30:00.000Z",
        estado: "aprobada",
        documentosEntregados: [
            "Certificado de notas con ranking nacional",
            "Carta de recomendación académica",
            "Ensayo de logros y metas",
            "Declaración de ingresos familiares"
        ],
        comentarios: "Estudiante destacada con excelente rendimiento y proyección.",
        puntaje: 98,
        fechaEvaluacion: "2024-03-01T12:00:00.000Z",
        evaluadoPor: "Roberto Silva - Director Académico",
        montoAsignado: 1200000,
        fechaAsignacion: "2024-03-15T09:30:00.000Z",
        vigente: true
    }
];

// ================== ESTADOS Y ENUMS ==================
export const estadosPostulacion = [
    "pendiente",
    "en_revision",
    "aprobada",
    "rechazada",
    "en_espera"
];

export const tiposAyuda = [
    "monetaria",
    "alimentacion",
    "transporte",
    "materiales",
    "residencia"
];

export const categoriasBeca = [
    "academica",
    "social",
    "deportiva",
    "cultural",
    "presidencial",
    "alimentacion"
];

// ================== FUNCIONES AUXILIARES ==================
export const obtenerEstadisticas = () => {
    return {
        totalAlumnos: alumnos.length,
        alumnosActivos: alumnos.filter(a => a.activo).length,
        totalBecas: becas.length,
        becasActivas: becas.filter(b => b.activa).length,
        totalPostulaciones: postulaciones.length,
        postulacionesAprobadas: postulaciones.filter(p => p.estado === "aprobada").length,
        postulacionesRechazadas: postulaciones.filter(p => p.estado === "rechazada").length,
        postulacionesEnRevision: postulaciones.filter(p => p.estado === "en_revision").length,
        montoTotalAsignado: postulaciones
            .filter(p => p.montoAsignado)
            .reduce((total, p) => total + p.montoAsignado, 0)
    };
};

// ================== EXPORTACIONES ==================
// module.exports = {
//     alumnos,
//     becas,
//     postulaciones,
//     estadosPostulacion,
//     tiposAyuda,
//     categoriasBeca,
//     obtenerEstadisticas
// };
