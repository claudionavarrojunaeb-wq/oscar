# Clase 2: Rutas HTTP, Codigos de Estado y Parámetros 

## 🎯 ¿Qué aprendimos hoy?

✅ **Códigos de estado HTTP**  
✅ **Múltiples rutas HTTP** (GET, POST, PUT, DELETE)  
✅ **Parámetros de ruta** (`/usuarios/:id`)  
✅ **Parámetros de consulta** (`?page=1&limit=10`)  


---

## 📊 Códigos de Estado HTTP

| Código | Significado | Cuándo usar |
|--------|-------------|-------------|
| **200** | OK | Petición exitosa (GET, PUT) |
| **201** | Created | Recurso creado exitosamente (POST) |
| **400** | Bad Request | Error en los datos enviados |
| **404** | Not Found | Recurso no encontrado |
| **500** | Internal Server Error | Error del servidor |



### Ejemplo:
```javascript
res.status(200).json({ message: 'Éxito' });
res.status(201).json({ message: 'Usuario creado' });
res.status(401).json({ error: 'No está autorizado para obtener este recuro' });
res.status(404).json({ error: 'Paágina no encontrada' });
res.status(503).json({ error: 'El servicio no está disponible ' });
```

---

## 🌐 Métodos HTTP

### GET - Obtener datos
```javascript
server.get('/usuarios', (req, res) => {
    res.status(200).json({
        message: 'Lista de usuarios',
        data: [/* usuarios */]
    });
});
```

### POST - Crear datos
```javascript
server.post('/usuarios', (req, res) => {
    const { nombre, email } = req.body;
    
    res.status(201).json({
        message: 'Usuario creado',
        data: { id: 1, nombre, email }
    });
});
```

### PUT - Actualizar datos
```javascript
server.put('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    const { nombre } = req.body;
    
    res.status(200).json({
        message: `Usuario ${id} actualizado`,
        data: { id, nombre }
    });
});
```

### DELETE - Eliminar datos
```javascript
server.delete('/usuarios/:id', (req, res) => {
    const id = req.params.id;
    
    res.status(200).json({
        message: `Usuario ${id} eliminado`
    });
});
```

---

## 🔗 Parámetros de Ruta

### ¿Qué son?
Valores dinámicos en la URL que se definen con `:nombreParametro`

### Sintaxis:
```javascript
// Definir la ruta
server.get('/usuarios/:id', (req, res) => {
    const userId = req.params.id;  // Obtener el parámetro
    
    res.json({ 
        message: `Usuario con ID: ${userId}` 
    });
});
```

### Ejemplos de uso:
- URL: `http://localhost:3000/usuarios/123`
- `req.params.id` = `"123"`

### Múltiples parámetros:
```javascript
server.get('/usuarios/:id/posts/:postId', (req, res) => {
    const { id, postId } = req.params;  // Destructuring
    
    res.json({ 
        usuario: id, 
        post: postId 
    });
});
```

---

## 🎯 Destructuring (Desestructuración)

### ¿Qué es?
Es una forma elegante de **extraer valores** de objetos y arrays y asignarlos a variables.

### Forma tradicional vs Destructuring:

#### ❌ Forma tradicional (repetitiva):
```javascript
// Con req.params
const id = req.params.id;
const postId = req.params.postId;
const categoria = req.params.categoria;

// Con req.query
const page = req.query.page;
const limit = req.query.limit;
const search = req.query.search;

// Con req.body
const nombre = req.body.nombre;
const email = req.body.email;
const edad = req.body.edad;
```

#### ✅ Con destructuring (más limpio):
```javascript
// Con req.params
const { id, postId, categoria } = req.params;

// Con req.query
const { page, limit, search } = req.query;

// Con req.body
const { nombre, email, edad } = req.body;
```

### Destructuring con valores por defecto:
```javascript
// Si no viene el parámetro, usa el valor por defecto
const { 
    page = 1,           // Si page no existe, usa 1
    limit = 10,         // Si limit no existe, usa 10
    search = '',        // Si search no existe, usa string vacío
    sort = 'name'       // Si sort no existe, usa 'name'
} = req.query;

console.log(page);  // 1 (si no se envió page en la URL)
```

### Ejemplo práctico completo:
```javascript
server.get('/productos/:categoria', (req, res) => {
    // Destructuring de parámetros de ruta
    const { categoria } = req.params;
    
    // Destructuring de query params con valores por defecto
    const { 
        page = 1, 
        limit = 20, 
        ordenar = 'precio',
        direccion = 'asc'
    } = req.query;
    
    res.json({
        categoria: categoria,           // "electronica"
        pagina: parseInt(page),         // 1
        limite: parseInt(limit),        // 20
        ordenamiento: ordenar,          // "precio"
        direccion: direccion            // "asc"
    });
});

// URL: /productos/electronica?page=2&limit=10&ordenar=nombre&direccion=desc
```

### Destructuring anidado:
```javascript
server.post('/usuarios', (req, res) => {
    // Si el JSON tiene objetos anidados
    const { 
        nombre, 
        email, 
        direccion: { ciudad, pais },    // Destructuring anidado
        contacto: { telefono }          // Destructuring anidado
    } = req.body;
    
    // Ahora tienes acceso directo a:
    // nombre, email, ciudad, pais, telefono
});

// JSON enviado:
// {
//   "nombre": "Juan",
//   "email": "juan@email.com",
//   "direccion": {
//     "ciudad": "Santiago",
//     "pais": "Chile"
//   },
//   "contacto": {
//     "telefono": "123456789"
//   }
// }
```

---

## ❓ Parámetros de Consulta (Query Params)

### ¿Qué son?
Parámetros opcionales que van después del `?` en la URL

### Sintaxis:
```javascript
server.get('/usuarios', (req, res) => {
    // Obtener parámetros con valores por defecto
    const { 
        page = 1, 
        limit = 10, 
        search = '' 
    } = req.query;
    
    res.json({
        pagina: page,
        limite: limit,
        busqueda: search
    });
});
```

### Ejemplos de URL:
- `http://localhost:3000/usuarios` → page=1, limit=10, search=""
- `http://localhost:3000/usuarios?page=2` → page=2, limit=10, search=""
- `http://localhost:3000/usuarios?page=2&limit=5&search=juan` → page=2, limit=5, search="juan"

---


---

## 💡 Consejos y Buenas Prácticas

### 1. **Siempre usar códigos de estado explícitos**
```javascript
// ❌ Malo
res.json({ message: 'OK' });

// ✅ Bueno
res.status(200).json({ message: 'OK' });
```

### 2. **Validar datos en POST y PUT**
```javascript
server.post('/usuarios', (req, res) => {
    const { nombre, email } = req.body;
    
    // ✅ Validar datos requeridos
    if (!nombre || !email) {
        return res.status(400).json({
            error: 'Se requieren nombre y email'
        });
    }
    
    // Continuar con la lógica...
});
```

### 3. **Usar destructuring para parámetros**
```javascript
// ❌ Menos legible
const id = req.params.id;
const postId = req.params.postId;

// ✅ Más limpio
const { id, postId } = req.params;
```

### 4. **Valores por defecto en query params**
```javascript
// ✅ Siempre con valores por defecto
const { page = 1, limit = 10 } = req.query;
```

---

## 🛠️ Código Final Completo

```javascript
const express = require('express');
const server = express();

// Middleware
server.use(express.json());

// Ruta principal
server.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'API de Usuarios funcionando' 
    });
});

// Obtener todos los usuarios
server.get('/usuarios', (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    
    res.status(200).json({
        message: 'Lista de usuarios',
        page: parseInt(page),
        limit: parseInt(limit),
        data: [
            { id: 1, nombre: 'Juan', email: 'juan@email.com' },
            { id: 2, nombre: 'María', email: 'maria@email.com' }
        ]
    });
});

// Obtener usuario por ID
server.get('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    
    res.status(200).json({
        message: `Usuario ${id}`,
        data: { id, nombre: 'Usuario Ejemplo' }
    });
});

// Crear usuario
server.post('/usuarios', (req, res) => {
    const { nombre, email } = req.body;
    
    if (!nombre || !email) {
        return res.status(400).json({
            error: 'Se requieren nombre y email'
        });
    }
    
    res.status(201).json({
        message: 'Usuario creado',
        data: { id: Date.now(), nombre, email }
    });
});

// Actualizar usuario
server.put('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    const { nombre, email } = req.body;
    
    res.status(200).json({
        message: `Usuario ${id} actualizado`,
        data: { id, nombre, email }
    });
});

// Eliminar usuario
server.delete('/usuarios/:id', (req, res) => {
    const { id } = req.params;
    
    res.status(200).json({
        message: `Usuario ${id} eliminado`
    });
});

// Iniciar servidor
server.listen(3000, () => {
    console.log('🚀 Servidor en http://localhost:3000');
});
```

---

## 🧪 Cómo Probar en Postman

### GET - Obtener usuarios
```
GET http://localhost:3000/usuarios
GET http://localhost:3000/usuarios?page=2&limit=5
GET http://localhost:3000/usuarios/123
```

### POST - Crear usuario
```
POST http://localhost:3000/usuarios
Body (JSON):
{
    "nombre": "Ana Torres",
    "email": "ana@email.com"
}
```

### PUT - Actualizar usuario
```
PUT http://localhost:3000/usuarios/123
Body (JSON):
{
    "nombre": "Ana Torres Actualizada",
    "email": "ana.nueva@email.com"
}
```

### DELETE - Eliminar usuario
```
DELETE http://localhost:3000/usuarios/123
```

---

## 📝 Comandos Importantes

```bash
# Iniciar el servidor
npm run dev

# El servidor estará en:
http://localhost:3000
```

---

