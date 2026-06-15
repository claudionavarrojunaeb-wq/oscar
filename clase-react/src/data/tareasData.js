// src/data/tareasData.js
export const tareasIniciales = [
    {
        id: 1,
        titulo: "Configurar proyecto React",
        descripcion: "Instalar dependencias y configurar Tailwind CSS",
        completada: false,
        prioridad: "alta",
        fechaCreacion: "2025-01-10",
        categoria: "desarrollo"
    },
    {
        id: 2,
        titulo: "Diseñar interfaz de usuario",
        descripcion: "Crear mockups para la aplicación de tareas",
        completada: false,
        prioridad: "alta",
        fechaCreacion: "2025-01-12",
        categoria: "diseño"
    },
    {
        id: 3,
        titulo: "Implementar componentes",
        descripcion: "Desarrollar componentes TaskItem y TodoList",
        completada: false,
        prioridad: "media",
        fechaCreacion: "2025-01-15",
        categoria: "desarrollo"
    },
    {
        id: 4,
        titulo: "Hacer ejercicio",
        descripcion: "Rutina de ejercicios de 45 minutos",
        completada: false,
        prioridad: "baja",
        fechaCreacion: "2025-01-16",
        categoria: "salud"
    }
];

export const CATEGORIAS = [
    { id: "todas", nombre: "Todas las categorías" },
    { id: "desarrollo", nombre: "Desarrollo" },
    { id: "diseño", nombre: "Diseño" },
    { id: "salud", nombre: "Salud" },
    { id: "personal", nombre: "Personal" }
];

export const PRIORIDADES = [
    { id: "baja", nombre: "Baja", color: "green" },
    { id: "media", nombre: "Media", color: "yellow" },
    { id: "alta", nombre: "Alta", color: "red" }
];