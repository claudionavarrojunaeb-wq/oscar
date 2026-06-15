import { formatearFecha } from '../utils/tareasUtils';
import { AlertCircle, Clock, CheckCircle2, Trash2 } from 'lucide-react';

const TaskItem = ({ tarea, onToggle, onDelete }) => {
    const { id, titulo, descripcion, completada, prioridad, categoria, fechaCreacion } = tarea;

    const handleToggle = () => {
        onToggle(id);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className={`p-6 hover:bg-gray-50 transition-colors border-l-4 ${completada ? 'border-green-500 bg-green-50' : 'border-blue-500'
            }`}>
            <input
                type="checkbox"
                checked={completada}
                onChange={handleToggle}
                class="w-5 h-5"
            />
            <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                    {/* Checkbox */}
                    <div className="flex-shrink-0 mt-1">
                        <input
                            type="checkbox"
                            checked={completada}
                            onChange={handleToggle}
                            class="w-5 h-5"
                        />
                    </div>

                    {/* Contenido */}
                    <div className="flex-1">
                        <h3 className={`text-lg font-semibold ${completada ? 'line-through text-gray-500' : 'text-gray-800'
                            }`}>
                            {titulo}
                        </h3>

                        {descripcion && (
                            <p className={`mt-1 ${completada ? 'text-gray-400' : 'text-gray-600'
                                }`}>
                                {descripcion}
                            </p>
                        )}

                        <div className="flex items-center space-x-4 mt-3">
                            {/* Prioridad */}
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${prioridad === 'alta' ? 'bg-red-100 text-red-800' :
                                prioridad === 'media' ? 'bg-yellow-100 text-yellow-800' :
                                    'bg-green-100 text-green-800'
                                }`}>
                                {prioridad === 'alta' && <AlertCircle className="w-3 h-3 mr-1" />}
                                {prioridad === 'media' && <Clock className="w-3 h-3 mr-1" />}
                                {prioridad === 'baja' && <CheckCircle2 className="w-3 h-3 mr-1" />}
                                {prioridad.charAt(0).toUpperCase() + prioridad.slice(1)}
                            </span>

                            {/* Categoría */}
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                {categoria}
                            </span>

                            {/* Fecha */}
                            <span className="text-xs text-gray-500">
                                {formatearFecha(fechaCreacion)}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Acciones */}
                <div className="flex-shrink-0 ml-4">
                    <button
                        onClick={handleDelete}
                        className="inline-flex items-center px-4 py-2 bg-red-100 text-red-700 rounded-lg text-sm font-medium hover:bg-red-200 transition-colors"
                    >
                        <Trash2 className="w-4 h-4 mr-2" />
                        Eliminar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskItem;
