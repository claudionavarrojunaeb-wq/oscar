# Todo App - Aplicación de Lista de Tareas

Una aplicación moderna de gestión de tareas construida con React, Vite y Tailwind CSS.

## 🚀 Características

### ✅ Funcionalidades Implementadas
- **CRUD Completo**: Crear, leer, actualizar y eliminar tareas
- **Estados de Tareas**: Marcar tareas como completadas o pendientes
- **Prioridades**: Clasificar tareas por prioridad (Alta, Media, Baja)
- **Categorías**: Organizar tareas por categorías (Desarrollo, Diseño, Salud, Estudio, Personal)
- **Filtros Avanzados**: Filtrar por estado, categoría y búsqueda de texto
- **Dashboard**: Estadísticas en tiempo real con progreso visual
- **Interfaz Responsiva**: Diseño adaptable para móviles y escritorio
- **Validación de Formularios**: Validación en tiempo real con mensajes de error

### 🎨 Componentes Desarrollados
- `Header`: Encabezado de la aplicación
- `Dashboard`: Estadísticas y barra de progreso
- `TaskFilters`: Filtros de búsqueda y categorías
- `TaskForm`: Formulario para agregar nuevas tareas
- `TaskList`: Lista de todas las tareas
- `TaskItem`: Componente individual para cada tarea

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx           # Encabezado de la aplicación
│   ├── Dashboard.jsx        # Estadísticas y progreso
│   ├── TaskFilters.jsx      # Filtros y búsqueda
│   ├── TaskForm.jsx         # Formulario para nuevas tareas
│   ├── TaskList.jsx         # Lista de tareas
│   └── TaskItem.jsx         # Elemento individual de tarea
├── data/
│   └── tareasData.js        # Datos iniciales y constantes
├── utils/
│   └── tareasUtils.js       # Funciones utilitarias
├── App.jsx                  # Componente principal
└── main.jsx                 # Punto de entrada
```

## 🛠️ Tecnologías Utilizadas

- **React 18**: Biblioteca principal para la interfaz de usuario
- **Vite**: Herramienta de construcción rápida
- **Tailwind CSS v4.1**: Framework CSS utility-first
- **JavaScript ES6+**: Sintaxis moderna de JavaScript

## 🎯 Funcionalidades Detalladas

### Dashboard y Estadísticas
- Contador de tareas totales, completadas y pendientes
- Barra de progreso visual con porcentaje de completitud
- Tarjetas informativas con iconos y colores

### Gestión de Tareas
- **Crear**: Formulario completo con título, descripción, prioridad y categoría
- **Leer**: Visualización clara con códigos de color para prioridades
- **Actualizar**: Marcar/desmarcar como completada
- **Eliminar**: Botón de eliminación con confirmación visual

### Sistema de Filtros
- **Por Estado**: Todas, Pendientes, Completadas
- **Por Categoría**: Desarrollo, Diseño, Salud, Estudio, Personal
- **Por Búsqueda**: Búsqueda en tiempo real en títulos y descripciones

### Validaciones
- Título obligatorio (máximo 100 caracteres)
- Descripción opcional (máximo 500 caracteres)
- Validación en tiempo real con limpieza automática de errores

## 🎨 Diseño y UX

### Paleta de Colores
- **Prioridad Alta**: Rojo (`bg-red-100`, `text-red-800`)
- **Prioridad Media**: Amarillo (`bg-yellow-100`, `text-yellow-800`)
- **Prioridad Baja**: Verde (`bg-green-100`, `text-green-800`)
- **Completadas**: Verde con opacidad y tachado
- **Pendientes**: Azul con borde destacado

### Características de UX
- **Feedback Visual**: Estados hover, transiciones suaves
- **Iconos Intuitivos**: Emojis para mejor comprensión visual
- **Layout Responsivo**: Grid adaptable para diferentes dispositivos
- **Estados Vacíos**: Mensajes informativos cuando no hay tareas

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone [url-del-repo]

# Instalar dependencias
npm install

# Instalar Tailwind CSS v4.1
npm install tailwindcss@next @tailwindcss/vite@next

# Ejecutar en desarrollo
npm run dev
```

### Scripts Disponibles
- `npm run dev`: Servidor de desarrollo
- `npm run build`: Construcción para producción
- `npm run preview`: Vista previa de la construcción

## 🔄 Estados de la Aplicación

### Estados Principales (useState)
- `tareas`: Array de todas las tareas
- `filtroActual`: Filtro de estado actual ('todas', 'pendientes', 'completadas')
- `categoriaActual`: Categoría seleccionada
- `busqueda`: Término de búsqueda actual
- `mostrarFormulario`: Control de visibilidad del formulario

### Flujo de Datos
1. **Estado Central**: App.jsx mantiene todo el estado
2. **Props Down**: Los datos fluyen hacia abajo via props
3. **Callbacks Up**: Las acciones suben via funciones callback
4. **Filtrado Reactivo**: Los filtros se aplican en tiempo real

## 📚 Conceptos de React Implementados

### Hooks Utilizados
- `useState`: Manejo de estado local
- Componentes funcionales exclusivamente

### Patrones de React
- **Composición de Componentes**: Componentes pequeños y enfocados
- **Props Drilling**: Comunicación entre componentes
- **Controlled Components**: Formularios controlados
- **Conditional Rendering**: Renderizado condicional
- **Lists and Keys**: Renderizado de listas con keys únicas

### JavaScript ES6+ Features
- **Arrow Functions**: Funciones de flecha en todos los componentes
- **Destructuring**: Desestructuración de props y estado
- **Spread Operator**: Para inmutabilidad en actualizaciones de estado
- **Template Literals**: Para strings dinámicos
- **Array Methods**: filter, map, reduce para manipulación de datos

## 🎓 Valor Educativo

Esta aplicación es perfecta para aprender:

### Conceptos Básicos
- Estructura de proyecto React
- Componentes funcionales
- Manejo de estado con useState
- Props y comunicación entre componentes

### Conceptos Intermedios
- Formularios controlados con validación
- Filtrado y búsqueda en tiempo real
- Renderizado condicional
- Gestión de arrays de objetos

### Mejores Prácticas
- Separación de responsabilidades
- Componentes reutilizables
- Inmutabilidad en actualizaciones de estado
- Estructura de carpetas organizada

## 🔮 Posibles Mejoras Futuras

### Funcionalidades
- [ ] Edición inline de tareas
- [ ] Fechas de vencimiento
- [ ] Arrastrar y soltar para reordenar
- [ ] Subtareas
- [ ] Etiquetas personalizadas
- [ ] Exportar/Importar tareas

### Técnicas
- [ ] Persistencia en localStorage
- [ ] API REST para backend
- [ ] Context API para estado global
- [ ] Custom hooks
- [ ] Tests unitarios
- [ ] Progressive Web App (PWA)

### UI/UX
- [ ] Modo oscuro
- [ ] Animaciones más avanzadas
- [ ] Notificaciones
- [ ] Atajos de teclado
- [ ] Temas personalizables

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.
