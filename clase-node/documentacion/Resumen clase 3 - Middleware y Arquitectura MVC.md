# Clase 3: Middleware y Arquitectura MVC
## 📚 Resumen para Estudiantes

---

## 🎯 ¿Qué aprenderemos hoy?

✅ **¿Qué son los middlewares?**  
✅ **Middleware `express.json()` - Body Parser**  
✅ **Middlewares personalizados**  
✅ **Arquitectura MVC** (Modelo-Vista-Controlador)  
✅ **Estructura de carpetas profesional**  
✅ **Separación de responsabilidades**  

---

## ⚙️ ¿Qué es un Middleware?

### Definición
Un **middleware** es una función que se ejecuta **ENTRE** la petición del cliente y la respuesta del servidor.

### Flujo de una petición HTTP:
```
Cliente → Middleware 1 → Middleware 2 → Ruta → Controlador → Respuesta
```

### ¿Para qué sirven?
- **Parsear datos** (JSON, formularios)
- **Autenticación y autorización**
- **Logging** (registrar peticiones)
- **Validación de datos**
- **Manejo de errores**
- **CORS** (Cross-Origin Resource Sharing)

---

## 📦 Middleware express.json() - Body Parser

### El problema sin middleware:
```javascript
server.post('/usuarios', (req, res) => {
    console.log(req.body); // undefined ❌
    // No podemos acceder a los datos JSON enviados
});
```

### La solución con express.json():
```javascript
const express = require('express');
const server = express();

// ⭐ Middleware para parsear JSON
server.use(express.json());

server.post('/usuarios', (req, res) => {
    console.log(req.body); // { nombre: "Juan", email: "juan@email.com" } ✅
    const { nombre, email } = req.body; // Ahora funciona
});
```

### ¿Qué hace express.json()?
1. **Lee** el body de la petición HTTP
2. **Convierte** el JSON string en un objeto JavaScript
3. **Asigna** ese objeto a `req.body`
4. **Pasa** el control al siguiente middleware/ruta

### Ejemplo práctico:
```javascript
// Sin middleware
// Body HTTP: '{"nombre":"Juan","email":"juan@email.com"}'
// req.body: undefined

// Con middleware
// Body HTTP: '{"nombre":"Juan","email":"juan@email.com"}'
// req.body: { nombre: "Juan", email: "juan@email.com" }
```

---

## 🛠️ Middlewares Personalizados

### Middleware de Logging
```javascript
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
    next(); // ⭐ IMPORTANTE: continúa al siguiente middleware
};

server.use(logger);
// Salida: GET /usuarios - 2025-08-28T10:30:00.000Z
```

### Middleware de Validación
```javascript
const validarUsuario = (req, res, next) => {
    const { nombre, email } = req.body;
    
    if (!nombre || !email) {
        return res.status(400).json({
            error: 'Se requieren nombre y email'
        });
    }
    
    next(); // Si todo está bien, continúa
};

// Usar solo en rutas específicas
server.post('/usuarios', validarUsuario, (req, res) => {
    // Solo llega aquí si la validación pasó
});
```

### Middleware de Timestamp
```javascript
const addTimestamp = (req, res, next) => {
    req.timestamp = new Date().toISOString();
    next();
};

server.use(addTimestamp);

server.get('/usuarios', (req, res) => {
    res.json({
        message: 'Lista de usuarios',
        timestamp: req.timestamp // Disponible en todas las rutas
    });
});
```

---

## 📁 Arquitectura MVC (Modelo-Vista-Controlador)

### ¿Qué es MVC?
Es un patrón de diseño que **separa** la lógica de la aplicación en tres capas:

- **Modelo**: Maneja los datos y la lógica de negocio
- **Vista**: Presenta la información al usuario (en APIs = respuestas JSON)
- **Controlador**: Maneja las peticiones HTTP y coordina Modelo y Vista

### Estructura de carpetas profesional:
```
proyecto-becas/
├── controllers/     # Lógica de las rutas
│   ├── alumnoController.js
│   ├── becaController.js
│   └── postulacionController.js
├── models/          # Manejo de datos
│   ├── alumnoModel.js
│   ├── becaModel.js
│   └── postulacionModel.js
├── routes/          # Definición de rutas
│   ├── alumnoRoutes.js
│   ├── becaRoutes.js
│   └── postulacionRoutes.js
├── middlewares/     # Middlewares personalizados
│   ├── validation.js
│   └── auth.js
├── data.js          # Datos de ejemplo
├── index.js         # Archivo principal
└── package.json
```

---

## 🏗️ Separación de Responsabilidades

### ❌ Todo en un archivo (malo):
```javascript
// index.js - TODO MEZCLADO
const express = require('express');
const server = express();

server.use(express.json());

let alumnos = []; // Datos mezclados con rutas
let becas = [];
let postulaciones = [];

server.get('/alumnos', (req, res) => {
    // Lógica de negocio mezclada con HTTP
    const alumnosActivos = alumnos.filter(a => a.activo);
    res.json(alumnosActivos);
});

server.post('/postulaciones', (req, res) => {
    // Validación mezclada con lógica
    if (!req.body.alumnoId || !req.body.becaId) {
        return res.status(400).json({ error: 'Faltan datos' });
    }
    // Más código mezclado...
});
```

### ✅ Separado en capas (bueno):

#### **models/alumnoModel.js** - Manejo de datos
```javascript
const { alumnos } = require('../data');

const obtenerTodos = () => alumnos.filter(a => a.activo);

const obtenerPorId = (id) => alumnos.find(a => a.id === parseInt(id));

const obtenerPorRut = (rut) => alumnos.find(a => a.rut === rut);

const crear = (datosAlumno) => {
    const nuevoAlumno = {
        id: Math.max(...alumnos.map(a => a.id)) + 1,
        ...datosAlumno,
        activo: true,
        fechaCreacion: new Date().toISOString()
    };
    alumnos.push(nuevoAlumno);
    return nuevoAlumno;
};

const actualizar = (id, datosActualizados) => {
    const index = alumnos.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
        alumnos[index] = { ...alumnos[index], ...datosActualizados };
        return alumnos[index];
    }
    return null;
};

const eliminar = (id) => {
    const index = alumnos.findIndex(a => a.id === parseInt(id));
    if (index !== -1) {
        alumnos[index].activo = false;
        return true;
    }
    return false;
};

module.exports = {
    obtenerTodos,
    obtenerPorId,
    obtenerPorRut,
    crear,
    actualizar,
    eliminar
};
```

#### **controllers/alumnoController.js** - Lógica de negocio
```javascript
const alumnoModel = require('../models/alumnoModel');

const obtenerAlumnos = (req, res) => {
    try {
        const { activo, carrera, promedio_min } = req.query;
        let alumnos = alumnoModel.obtenerTodos();
        
        // Filtrar por estado activo
        if (activo !== undefined) {
            alumnos = alumnos.filter(a => a.activo === (activo === 'true'));
        }
        
        // Filtrar por carrera
        if (carrera) {
            alumnos = alumnos.filter(a => 
                a.situacionAcademica.carrera.toLowerCase().includes(carrera.toLowerCase())
            );
        }
        
        // Filtrar por promedio mínimo
        if (promedio_min) {
            alumnos = alumnos.filter(a => 
                a.situacionAcademica.promedio >= parseFloat(promedio_min)
            );
        }
        
        res.status(200).json({
            message: 'Alumnos obtenidos exitosamente',
            data: alumnos,
            total: alumnos.length
        });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const obtenerAlumnoPorId = (req, res) => {
    try {
        const { id } = req.params;
        const alumno = alumnoModel.obtenerPorId(id);
        
        if (!alumno) {
            return res.status(404).json({ error: 'Alumno no encontrado' });
        }
        
        res.status(200).json({
            message: 'Alumno encontrado',
            data: alumno
        });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

const crearAlumno = (req, res) => {
    try {
        const { rut, nombre, apellidos, email, telefono, fechaNacimiento } = req.body;
        
        // Verificar si el RUT ya existe
        const alumnoExistente = alumnoModel.obtenerPorRut(rut);
        if (alumnoExistente) {
            return res.status(400).json({ error: 'Ya existe un alumno con ese RUT' });
        }
        
        const nuevoAlumno = alumnoModel.crear(req.body);
        
        res.status(201).json({
            message: 'Alumno creado exitosamente',
            data: nuevoAlumno
        });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

module.exports = {
    obtenerAlumnos,
    obtenerAlumnoPorId,
    crearAlumno
};
```

#### **middlewares/validation.js** - Validaciones
```javascript
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
```

#### **routes/alumnoRoutes.js** - Definición de rutas
```javascript
const express = require('express');
const router = express.Router();
const alumnoController = require('../controllers/alumnoController');
const { validarAlumno } = require('../middlewares/validation');

// GET /api/alumnos - Obtener todos los alumnos (con filtros opcionales)
router.get('/', alumnoController.obtenerAlumnos);

// GET /api/alumnos/:id - Obtener alumno por ID
router.get('/:id', alumnoController.obtenerAlumnoPorId);

// POST /api/alumnos - Crear nuevo alumno
router.post('/', validarAlumno, alumnoController.crearAlumno);

module.exports = router;
```

#### **routes/becaRoutes.js** - Rutas de becas
```javascript
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
```

#### **routes/postulacionRoutes.js** - Rutas de postulaciones
```javascript
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
```

#### **index.js** - Archivo principal (limpio)
```javascript
const express = require('express');
const alumnoRoutes = require('./routes/alumnoRoutes');
const becaRoutes = require('./routes/becaRoutes');
const postulacionRoutes = require('./routes/postulacionRoutes');
const { logger } = require('./middlewares/validation');
const { obtenerEstadisticas } = require('./data');

const server = express();

// Middlewares globales
server.use(express.json());
server.use(logger);

// Rutas principales
server.use('/api/alumnos', alumnoRoutes);
server.use('/api/becas', becaRoutes);
server.use('/api/postulaciones', postulacionRoutes);

// Ruta de salud y estadísticas
server.get('/', (req, res) => {
    res.json({ 
        message: 'API de Becas funcionando correctamente',
        endpoints: {
            alumnos: '/api/alumnos',
            becas: '/api/becas',
            postulaciones: '/api/postulaciones',
            estadisticas: '/api/estadisticas'
        }
    });
});

// Ruta de estadísticas
server.get('/api/estadisticas', (req, res) => {
    res.json({
        message: 'Estadísticas del sistema',
        data: obtenerEstadisticas()
    });
});

server.listen(3000, () => {
    console.log('🚀 Servidor de Becas corriendo en http://localhost:3000');
    console.log('📊 Estadísticas: http://localhost:3000/api/estadisticas');
});
```

---

## 🎯 Ventajas de la Arquitectura MVC

### ✅ **Mantenibilidad**
- Cada archivo tiene una responsabilidad específica
- Fácil de encontrar y modificar código

### ✅ **Escalabilidad**
- Puedes agregar nuevos modelos, controladores y rutas sin afectar otros
- Fácil de expandir la aplicación

### ✅ **Reutilización**
- Los modelos pueden usarse desde diferentes controladores
- Los middlewares se pueden aplicar a múltiples rutas

### ✅ **Testing**
- Puedes probar cada capa por separado
- Fácil de hacer unit tests

### ✅ **Trabajo en equipo**
- Diferentes desarrolladores pueden trabajar en diferentes capas
- Menos conflictos en Git

---

## 📝 Orden de Implementación Sugerido

1. **Crear estructura de carpetas**
2. **Mover datos a models/**
3. **Crear controladores** con la lógica
4. **Separar middlewares** de validación
5. **Definir rutas** usando express.Router()
6. **Conectar todo** en index.js

---

## 🧪 Cómo Probar

Después de implementar la arquitectura MVC:

```bash
# Todas estas rutas estarán disponibles:

# === ALUMNOS ===
GET    http://localhost:3000/api/alumnos
GET    http://localhost:3000/api/alumnos?carrera=ingenieria&promedio_min=6.0
GET    http://localhost:3000/api/alumnos/1
POST   http://localhost:3000/api/alumnos

# === BECAS ===
GET    http://localhost:3000/api/becas
GET    http://localhost:3000/api/becas/1
POST   http://localhost:3000/api/becas

# === POSTULACIONES ===
GET    http://localhost:3000/api/postulaciones
GET    http://localhost:3000/api/postulaciones/alumno/1
POST   http://localhost:3000/api/postulaciones
PUT    http://localhost:3000/api/postulaciones/1/estado

# === ESTADÍSTICAS ===
GET    http://localhost:3000/api/estadisticas
```

**Ejemplos de Body para POST:**

**Crear Alumno:**
```json
{
    "rut": "19876543-2",
    "nombre": "Pedro",
    "apellidos": "García Morales",
    "email": "pedro.garcia@estudiante.cl",
    "telefono": "+56987654321",
    "fechaNacimiento": "2001-05-10",
    "direccion": {
        "calle": "Los Pinos 123",
        "comuna": "Maipú",
        "ciudad": "Santiago",
        "region": "Metropolitana"
    },
    "situacionAcademica": {
        "institucion": "Universidad de Santiago",
        "carrera": "Ingeniería en Sistemas",
        "año": 2,
        "promedio": 6.1,
        "creditosAprobados": 120
    }
}
```

**Crear Postulación:**
```json
{
    "alumnoId": 1,
    "becaId": 2,
    "documentosEntregados": [
        "Certificado de matrícula",
        "Declaración de ingresos familiares"
    ]
}
```

---

## 💡 Conceptos Clave para Recordar

### Middleware:
- Se ejecuta **antes** de llegar a las rutas
- Debe llamar a `next()` para continuar
- `express.json()` convierte JSON en objeto JavaScript

### MVC:
- **Modelo**: Datos y lógica de negocio (alumnos, becas, postulaciones)
- **Vista**: Respuestas JSON (en APIs)
- **Controlador**: Maneja peticiones HTTP (filtros, validaciones, respuestas)

### Separación:
- **Un archivo = Una responsabilidad**
- **Modelos = Solo acceso a datos** (CRUD de alumnos, becas, postulaciones)
- **Controladores = Solo lógica HTTP** (manejo de req/res, filtros, paginación)
- **Rutas = Solo definición de endpoints** (GET /api/alumnos, POST /api/becas)
- **Middlewares = Funciones transversales** (validaciones, logging, autenticación)

---

## 🔄 Próxima Clase

- **Base de datos real** (MySQL/PostgreSQL)
- **ORM** (Object-Relational Mapping)
- **Variables de entorno**
- **Manejo de errores avanzado**

¡A implementar la arquitectura MVC! 🚀
