## Conceptos Básicos

### ¿Qué es Node.js?
- **Runtime de JavaScript** que permite ejecutar JS fuera del navegador
- Basado en el motor V8 de Chrome
- Ideal para aplicaciones del lado del servidor
- Manejo de I/O no bloqueante (asíncrono)

### ¿Qué es Express?
- **Framework web** para Node.js
- Simplifica la creación de servidores web
- Proporciona características robustas para aplicaciones web y móviles

---

## Configuración Inicial

### 1. Inicializar proyecto

```bash
npm init -y

```


**¿Qué significa `-y`?**
- El flag `-y` (o `--yes`) acepta automáticamente todas las configuraciones por defecto
- Sin `-y`: npm te preguntará por cada campo (nombre, versión, descripción, etc.)
- Con `-y`: crea el package.json directamente con valores predeterminados
- Es útil para inicializar proyectos rápidamente en desarrollo



### 2. Instalar Express

```bash
npm install express
```

### 3. Estructura del package.json

```json
{
  "name": "clase-node",              // Nombre del proyecto (minúsculas, usar -)
  "version": "1.0.0",               // Versión semántica (major.minor.patch)
  "main": "app.js",                 // Archivo principal de entrada
  "scripts": {
    "dev": "node app.js",           // Script para ejecutar en desarrollo
    "start": "node app.js",         // Script para producción
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": ["node", "express"],  // Palabras clave para npm
  "author": "Tu Nombre",            // Información del autor
  "license": "ISC",                 // Tipo de licencia
  "description": "Servidor Express básico",  // Descripción del proyecto
  "dependencies": {
    "express": "^4.18.2"           // Dependencias del proyecto
  }
}
```

---

## Hola Mundo con Express

### Ejemplo 1: Servidor Básico

```javascript
// app.js
const express = require('express');  // Importar Express
const app = express();              // Crear instancia de Express
const PORT = 3000;                  // Definir puerto

// Ruta básica
app.get('/', (req, res) => {
  res.send('¡Hola Mundo desde Node.js y Express!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
```

### Explicación del código:

- **`require('express')`**: Importa el módulo Express
- **`express()`**: Crea una aplicación Express
- **`app.get()`**: Define una ruta HTTP GET
- **`req`**: Objeto de petición (request)
- **`res`**: Objeto de respuesta (response)
- **`app.listen()`**: Inicia el servidor en el puerto especificado

### Para ejecutar:

```bash
npm run dev
```
