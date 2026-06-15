# Clase 2: Componentes, Estados (Hooks) y Propiedades en React

## 📋 Objetivo de la Clase
En esta clase aprenderemos a crear el componente de lista de tareas paso a paso, entendiendo:
- Qué son los componentes en React
- Cómo usar hooks (useState)
- Cómo pasar propiedades entre componentes
- Estructura de datos y manejo de estados

---

## 🧩 1. ¿Qué son los Componentes?

Los componentes son **bloques de construcción reutilizables** en React. Son como funciones que retornan JSX (elementos de la interfaz).

### Características principales:
- **Reutilizables**: Se pueden usar múltiples veces
- **Modulares**: Cada uno tiene una responsabilidad específica
- **Independientes**: Pueden funcionar por sí solos

### Ejemplo básico:
```jsx
const MiComponente = () => {
  return <h1>¡Hola desde mi componente!</h1>;
};
```

---

## 🎣 2. Hooks - useState

Los **hooks** son funciones especiales que nos permiten "engancharnos" a las características de React desde componentes funcionales.

### useState - Para manejar estado local

```jsx
import { useState } from 'react';

const [estado, setEstado] = useState(valorInicial);
```

**Donde:**
- `estado`: el valor actual
- `setEstado`: función para actualizar el valor
- `valorInicial`: el valor que tendrá al inicio

---

## 📊 3. Estructura de Datos - Nuestras Tareas

Antes de crear componentes, definamos cómo se ve una tarea:

```javascript
const tarea = {
  id: 1,                                    // Identificador único
  titulo: "Configurar proyecto React",      // Título principal
  descripcion: "Instalar dependencias...", // Descripción opcional
  completada: false,                        // Estado: true/false
  prioridad: "alta",                       // "alta", "media", "baja"
  categoria: "desarrollo",                 // Categoría de la tarea
  fechaCreacion: "2025-01-10"             // Fecha de creación
};
```

---

## 🚀 4. Paso a Paso: Creando el Componente TaskList

### Paso 1: Componente Básico

Comenzamos con la estructura más simple:

```jsx
// src/components/TaskList.jsx
const TaskList = () => {
  return (
    <div>
      <h2>Lista de Tareas</h2>
    </div>
  );
};

export default TaskList;
```

### Paso 2: Añadiendo Propiedades (Props)

Las **props** son datos que se pasan de un componente padre a un componente hijo:

```jsx
const TaskList = ({ tareas }) => {
  return (
    <div>
      <h2>Lista de Tareas ({tareas.length})</h2>
    </div>
  );
};
```

**¿Qué está pasando?**
- `{ tareas }` es **destructuring** de props
- `tareas` es un array que viene del componente padre
- `tareas.length` nos da el número de tareas

### Paso 3: Renderizando la Lista

```jsx
const TaskList = ({ tareas }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Mis Tareas ({tareas.length})
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        {tareas.map(tarea => (
          <div key={tarea.id} className="p-4">
            <h3>{tarea.titulo}</h3>
            <p>{tarea.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
```

**Conceptos importantes:**
- `tareas.map()`: Itera sobre cada tarea y retorna JSX
- `key={tarea.id}`: React necesita una clave única para cada elemento
- Cada tarea se renderiza como un div

### Paso 4: Manejando el Estado Vacío

```jsx
const TaskList = ({ tareas }) => {
  // Si no hay tareas, mostramos un mensaje especial
  if (tareas.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="text-center py-16">
          <h3 className="text-2xl font-medium text-gray-600 mb-2">
            ¡Tu lista está vacía!
          </h3>
          <p className="text-gray-500">
            Agrega tu primera tarea para comenzar
          </p>
        </div>
      </div>
    );
  }

  // Si hay tareas, las mostramos
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      {/* resto del código */}
    </div>
  );
};
```

---

## 🎯 5. Creando TaskItem - Componente Individual

Para mantener el código organizado, creamos un componente separado para cada tarea:

```jsx
// src/components/TaskItem.jsx
const TaskItem = ({ tarea }) => {
  const { titulo, descripcion, completada, prioridad } = tarea;

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <h3 className={`text-lg font-semibold ${
        completada ? 'line-through text-gray-500' : 'text-gray-800'
      }`}>
        {titulo}
      </h3>
      
      {descripcion && (
        <p className="mt-1 text-gray-600">{descripcion}</p>
      )}
      
      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${
        prioridad === 'alta' ? 'bg-red-100 text-red-800' :
        prioridad === 'media' ? 'bg-yellow-100 text-yellow-800' :
        'bg-green-100 text-green-800'
      }`}>
        {prioridad.charAt(0).toUpperCase() + prioridad.slice(1)}
      </span>
    </div>
  );
};

export default TaskItem;
```

**Conceptos clave:**
- **Destructuring**: `const { titulo, descripcion } = tarea`
- **Renderizado condicional**: `descripcion && <p>...</p>`
- **Clases dinámicas**: Cambian según el estado de la tarea

---

## 🔄 6. Añadiendo Interactividad con Props

### Paso 1: Funciones desde el Padre

```jsx
// En App.jsx - El componente principal
const App = () => {
  const [tareas, setTareas] = useState(tareasIniciales);

  // Función para cambiar el estado de completada
  const toggleTarea = (id) => {
    setTareas(prev =>
      prev.map(tarea =>
        tarea.id === id
          ? { ...tarea, completada: !tarea.completada }
          : tarea
      )
    );
  };

  // Función para eliminar tarea
  const eliminarTarea = (id) => {
    setTareas(prev => prev.filter(tarea => tarea.id !== id));
  };

  return (
    <TaskList 
      tareas={tareas}
      onToggle={toggleTarea}
      onDelete={eliminarTarea}
    />
  );
};
```

### Paso 2: Usando las Funciones en TaskItem

```jsx
const TaskItem = ({ tarea, onToggle, onDelete }) => {
  const { id, titulo, completada } = tarea;

  const handleToggle = () => {
    onToggle(id); // Llamamos la función del padre
  };

  const handleDelete = () => {
    onDelete(id); // Llamamos la función del padre
  };

  return (
    <div className="p-6">
      <input
        type="checkbox"
        checked={completada}
        onChange={handleToggle}
        className="w-5 h-5"
      />
      
      <h3>{titulo}</h3>
      
      <button
        onClick={handleDelete}
        className="bg-red-100 text-red-700 px-4 py-2 rounded"
      >
        Eliminar
      </button>
    </div>
  );
};
```

---

## 🧠 7. Conceptos Importantes para Recordar

### Props (Propiedades)
- **Flujo descendente**: De padre a hijo
- **Inmutables**: No se pueden modificar en el hijo
- **Comunicación**: Se pasan funciones para comunicarse hacia arriba

### Estados (useState)
- **Local al componente**: Cada componente maneja su propio estado
- **Inmutable**: Nunca modificar directamente, usar la función set
- **Re-renderizado**: Cuando cambia el estado, el componente se vuelve a renderizar

### Flujo de Datos
```
App.jsx (estado principal)
    ↓ props
TaskList.jsx (recibe tareas y funciones)
    ↓ props
TaskItem.jsx (recibe tarea individual y funciones)
    ↑ callbacks
TaskList.jsx (pasa eventos hacia arriba)
    ↑ callbacks
App.jsx (actualiza el estado)
```

---

## 🎮 8. Ejercicios Prácticos

### Ejercicio 1: Modificar TaskItem
Añade un botón para editar el título de la tarea directamente.

### Ejercicio 2: Contador de Tareas
Crea un componente que muestre:
- Total de tareas
- Tareas completadas
- Tareas pendientes

### Ejercicio 3: Filtros
Añade botones para filtrar:
- Todas las tareas
- Solo completadas
- Solo pendientes

---

## 🎯 9. Código Final Completo

### TaskList.jsx
```jsx
import TaskItem from './TaskItem';

const TaskList = ({ tareas, onToggle, onDelete }) => {
  if (tareas.length === 0) {
    return (
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="text-center py-16">
          <h3 className="text-2xl font-medium text-gray-600 mb-2">
            ¡Tu lista está vacía!
          </h3>
          <p className="text-gray-500">
            Agrega tu primera tarea para comenzar
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">
          Mis Tareas ({tareas.length})
        </h2>
      </div>

      <div className="divide-y divide-gray-200">
        {tareas.map(tarea => (
          <TaskItem
            key={tarea.id}
            tarea={tarea}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
```

### TaskItem.jsx
```jsx
const TaskItem = ({ tarea, onToggle, onDelete }) => {
  const { id, titulo, descripcion, completada, prioridad } = tarea;

  const handleToggle = () => onToggle(id);
  const handleDelete = () => onDelete(id);

  return (
    <div className="p-6 hover:bg-gray-50 transition-colors">
      <div className="flex items-start justify-between">
        <div className="flex items-start space-x-4 flex-1">
          <input
            type="checkbox"
            checked={completada}
            onChange={handleToggle}
            className="w-5 h-5 mt-1"
          />
          
          <div className="flex-1">
            <h3 className={`text-lg font-semibold ${
              completada ? 'line-through text-gray-500' : 'text-gray-800'
            }`}>
              {titulo}
            </h3>
            
            {descripcion && (
              <p className={`mt-1 ${
                completada ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {descripcion}
              </p>
            )}
            
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium mt-2 ${
              prioridad === 'alta' ? 'bg-red-100 text-red-800' :
              prioridad === 'media' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'
            }`}>
              {prioridad.charAt(0).toUpperCase() + prioridad.slice(1)}
            </span>
          </div>
        </div>
        
        <button
          onClick={handleDelete}
          className="ml-4 bg-red-100 text-red-700 px-4 py-2 rounded-lg hover:bg-red-200 transition-colors"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
```

### Body de entrada 

```jsx
<div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header titulo="Mi Lista de Tareas" />

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-8">


          {/* Dashboard */}
          <Dashboard tareas={tareas} />

          {/* Filtros y Búsqueda */}
          <TaskFilters
            filtroActual={filtroActual}
            categoriaActual={categoriaActual}
            busqueda={busqueda}
            onFiltroChange={setFiltroActual}
            onCategoriaChange={setCategoriaActual}
            onBusquedaChange={setBusqueda}
            onToggleFormulario={() => setMostrarFormulario(!mostrarFormulario)}
            mostrandoFormulario={mostrarFormulario}
          />

          {/* Formulario (condicional) */}
          {mostrarFormulario && (
            <TaskForm
              onAgregarTarea={agregarTarea}
              onCancelar={() => setMostrarFormulario(false)}
            />
          )}

          {/* Lista de Tareas */}
          <TaskList
            tareas={tareasFiltradas}
            onToggle={toggleTarea}
            onDelete={eliminarTarea}
            onEdit={editarTarea}
          />

          {/* Mensaje cuando no hay tareas filtradas */}
          {tareas.length > 0 && tareasFiltradas.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-medium text-gray-600 mb-2">
                No se encontraron tareas
              </h3>
              <p className="text-gray-500">
                Intenta cambiar los filtros o términos de búsqueda
              </p>
            </div>
          )}
        </div>
      </main>
    </div>

```

---

## 📚 Resumen de la Clase

### Lo que aprendimos:
1. **Componentes**: Bloques reutilizables de código
2. **Props**: Cómo pasar datos entre componentes
3. **useState**: Hook para manejar estado local
4. **Renderizado condicional**: Mostrar diferentes elementos según condiciones
5. **Eventos**: Cómo manejar clicks y cambios
6. **Flujo de datos**: Cómo los datos viajan en React


