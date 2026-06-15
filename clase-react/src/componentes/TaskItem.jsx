// src/components/TaskItem.jsx
export const TaskItem = ({ tarea }) => {
    const { titulo, descripcion, completada, prioridad } = tarea;

    return (
        <div className="p-6 hover:bg-gray-50 transition-colors">
            <h3 className={`text-lg font-semibold ${completada ? 'line-through text-gray-500' : 'text-gray-800'
                }`}>
                {titulo}
            </h3>

            {descripcion && (<p className="mt-1 text-gray-600">{descripcion}</p>)}

            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs ${prioridad === 'alta' ? 'bg-red-100 text-red-800' :
                prioridad === 'media' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                }`}>
                {/* se utiliza esta funcion para capitalizar la primera letra de la prioridad */}
                {prioridad.charAt(0).toUpperCase() + prioridad.slice(1)}
            </span>
        </div>
    );
};

