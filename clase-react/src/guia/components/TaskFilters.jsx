import { CATEGORIAS } from '../data/tareasData';
import { Search, ClipboardList, Clock, CheckCircle, Plus, X } from 'lucide-react';

const TaskFilters = ({
    filtroActual,
    categoriaActual,
    busqueda,
    onFiltroChange,
    onCategoriaChange,
    onBusquedaChange,
    onToggleFormulario,
    mostrandoFormulario
}) => {

    const filtros = [
        { id: 'todas', nombre: 'Todas', icono: ClipboardList },
        { id: 'pendientes', nombre: 'Pendientes', icono: Clock },
        { id: 'completadas', nombre: 'Completadas', icono: CheckCircle }
    ];

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="w-full mb-4">
                <div className="relative">
                    <input
                        type="text"
                        value={busqueda}
                        onChange={(e) => onBusquedaChange(e.target.value)}
                        placeholder="Buscar tareas..."
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                    <Search className="absolute left-3 top-3.5 w-4 h-4 text-gray-400" />
                </div>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Búsqueda */}


                {/* Filtros de Estado */}
                <div className="flex space-x-2">
                    {filtros.map(filtro => {
                        const IconComponent = filtro.icono;
                        return (
                            <button
                                key={filtro.id}
                                onClick={() => onFiltroChange(filtro.id)}
                                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-colors ${filtroActual === filtro.id
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <IconComponent className="w-4 h-4 mr-2" />
                                {filtro.nombre}
                            </button>
                        );
                    })}
                </div>

                {/* Filtro de Categoría */}
                <div className="flex items-center space-x-4">
                    <select
                        value={categoriaActual}
                        onChange={(e) => onCategoriaChange(e.target.value)}
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        {CATEGORIAS.map(categoria => (
                            <option key={categoria.id} value={categoria.id}>
                                {categoria.nombre}
                            </option>
                        ))}
                    </select>

                    {/* Botón Agregar Tarea */}
                    <button
                        onClick={onToggleFormulario}
                        className={`inline-flex items-center px-6 py-2 rounded-lg font-medium transition-colors ${mostrandoFormulario
                            ? 'bg-gray-200 text-gray-700'
                            : 'bg-green-500 text-white hover:bg-green-600'
                            }`}
                    >
                        {mostrandoFormulario ? (
                            <>
                                <X className="w-4 h-4 mr-2" />
                                Cancelar
                            </>
                        ) : (
                            <>
                                <Plus className="w-4 h-4 mr-2" />
                                Agregar Tarea
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskFilters;
