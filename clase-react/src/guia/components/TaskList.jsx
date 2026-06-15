import TaskItem from './TaskItem';
import { FileText } from 'lucide-react';

const TaskList = ({ tareas, onToggle, onDelete }) => {
    if (tareas.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="text-center py-16">
                    <div className="flex justify-center mb-4">
                        <FileText className="w-20 h-20 text-gray-300" />
                    </div>
                    <h3 className="text-2xl font-medium text-gray-600 mb-2">
                        ¡Tu lista está vacía!
                    </h3>
                    <p className="text-gray-500 mb-6">
                        Agrega tu primera tarea para comenzar a organizarte
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
