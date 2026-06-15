const validarAlumno = (req, res, next) => {
    const { rut, nombre, apellidos, email } = req.body;

    if (!rut || !nombre || !apellidos || !email) {
        return res.status(400).json({
            error: 'Se requieren datos básicos del alumno',
            campos_requeridos: ['rut', 'nombre', 'apellidos', 'email']
        });
    }

    // Validar formato RUT (básico)
    const rutRegex = /^\d{7,8}-[\dk]$/i;
    if (!rutRegex.test(rut)) {
        return res.status(400).json({
            error: 'Formato de RUT inválido (ejemplo: 12345678-9)'
        });
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: 'Formato de email inválido'
        });
    }

    next();
};

const validarPostulacion = (req, res, next) => {
    const { alumnoId, becaId } = req.body;

    if (!alumnoId || !becaId) {
        return res.status(400).json({
            error: 'Se requieren alumnoId y becaId',
            campos_requeridos: ['alumnoId', 'becaId']
        });
    }

    if (!Number.isInteger(alumnoId) || !Number.isInteger(becaId)) {
        return res.status(400).json({
            error: 'alumnoId y becaId deben ser números enteros'
        });
    }

    next();
};

const validarBeca = (req, res, next) => {
    const { nombre, monto, duracion, cupos } = req.body;

    if (!nombre || !monto || !duracion || !cupos) {
        return res.status(400).json({
            error: 'Se requieren datos básicos de la beca',
            campos_requeridos: ['nombre', 'monto', 'duracion', 'cupos']
        });
    }

    if (monto <= 0 || duracion <= 0 || cupos <= 0) {
        return res.status(400).json({
            error: 'Monto, duración y cupos deben ser valores positivos'
        });
    }

    next();
};

const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next();
};

module.exports = {
    validarAlumno,
    validarPostulacion,
    validarBeca,
    logger
};