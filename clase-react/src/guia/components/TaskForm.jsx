import { useState } from 'react';
import { CATEGORIAS, PRIORIDADES } from '../data/tareasData';
import { Plus, X } from 'lucide-react';

const TaskForm = ({ onAgregarTarea, onCancelar }) => {
    const [formData, setFormData] = useState({
        titulo: '',
        descripcion: '',
        prioridad: 'media',
        categoria: 'personal'
    });

    const [errores, setErrores] = useState({});

    const handleChange = (campo, valor) => {
        setFormData(prev => ({
            ...prev,
            [campo]: valor
        }));

        // Limpiar error del campo
        if (errores[campo]) {
            setErrores(prev => ({
                ...prev,
                [campo]: ''
            }));
        }
    };

    const validarFormulario = () => {
        const nuevosErrores = {};

        if (!formData.titulo.trim()) {
            nuevosErrores.titulo = 'El título es requerido';
        } else if (formData.titulo.length > 100) {
            nuevosErrores.titulo = 'El título no puede exceder 100 caracteres';
        }

        if (formData.descripcion.length > 500) {
            nuevosErrores.descripcion = 'La descripción no puede exceder 500 caracteres';
        }

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarFormulario()) {
            return;
        }

        onAgregarTarea({
            titulo: formData.titulo.trim(),
            descripcion: formData.descripcion.trim(),
            prioridad: formData.prioridad,
            categoria: formData.categoria
        });

        // Resetear formulario
        setFormData({
            titulo: '',
            descripcion: '',
            prioridad: 'media',
            categoria: 'personal'
        });
    };

    return (
        <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-800">
                    Agregar Nueva Tarea
                </h2>
                <button
                    onClick={onCancelar}
                    className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                    ×
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Título */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Título *
                    </label>
                    <input
                        type="text"
                        value={formData.titulo}
                        onChange={(e) => handleChange('titulo', e.target.value)}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errores.titulo ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="¿Qué necesitas hacer?"
                    />
                    {errores.titulo && (
                        <p className="text-red-500 text-sm mt-1">{errores.titulo}</p>
                    )}
                </div>

                {/* Descripción */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Descripción
                    </label>
                    <textarea
                        value={formData.descripcion}
                        onChange={(e) => handleChange('descripcion', e.target.value)}
                        rows={3}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errores.descripcion ? 'border-red-500' : 'border-gray-300'
                            }`}
                        placeholder="Detalles adicionales (opcional)"
                    />
                    {errores.descripcion && (
                        <p className="text-red-500 text-sm mt-1">{errores.descripcion}</p>
                    )}
                </div>

                {/* Prioridad y Categoría */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Prioridad
                        </label>
                        <select
                            value={formData.prioridad}
                            onChange={(e) => handleChange('prioridad', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            {PRIORIDADES.map(prioridad => (
                                <option key={prioridad.id} value={prioridad.id}>
                                    {prioridad.nombre}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Categoría
                        </label>
                        <select
                            value={formData.categoria}
                            onChange={(e) => handleChange('categoria', e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        >
                            {CATEGORIAS.filter(cat => cat.id !== 'todas').map(categoria => (
                                <option key={categoria.id} value={categoria.id}>
                                    {categoria.nombre}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Botones */}
                <div className="flex space-x-4 pt-4">
                    <button
                        type="submit"
                        className="flex-1 inline-flex items-center justify-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Agregar Tarea
                    </button>
                    <button
                        type="button"
                        onClick={onCancelar}
                        className="flex-1 inline-flex items-center justify-center bg-gray-200 text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
                    >
                        <X className="w-4 h-4 mr-2" />
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
