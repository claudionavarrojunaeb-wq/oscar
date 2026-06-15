import { BarChart3, CheckCircle, Clock } from 'lucide-react';

const Dashboard = ({ tareas }) => {
    const total = tareas.length;
    const completadas = tareas.filter(t => t.completada).length;
    const pendientes = total - completadas;
    const porcentajeCompletado = total > 0 ? Math.round((completadas / total) * 100) : 0;

    const estadisticas = [
        {
            titulo: 'Total',
            valor: total,
            icono: BarChart3,
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-600',
            iconColor: 'text-blue-500'
        },
        {
            titulo: 'Completadas',
            valor: completadas,
            icono: CheckCircle,
            bgColor: 'bg-green-100',
            textColor: 'text-green-600',
            iconColor: 'text-green-500'
        },
        {
            titulo: 'Pendientes',
            valor: pendientes,
            icono: Clock,
            bgColor: 'bg-orange-100',
            textColor: 'text-orange-600',
            iconColor: 'text-orange-500'
        }
    ];

    return (
        <>
            {/* Tarjetas de Estadísticas */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {estadisticas.map(({ titulo, valor, icono: IconComponent, bgColor, textColor, iconColor }) => (
                    <div key={titulo} className="bg-white p-6 rounded-xl shadow-md">
                        <div className="flex items-center">
                            <div className={`p-3 ${bgColor} rounded-full`}>
                                <IconComponent className={`h-6 w-6 ${iconColor}`} />
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-gray-800">{titulo}</h3>
                                <p className={`text-3xl font-bold ${textColor}`}>{valor}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>            {/* Barra de Progreso */}
            <div className="bg-white p-6 rounded-xl shadow-md mb-8">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">Progreso General</h3>
                    <span className="text-sm font-medium text-gray-600">{porcentajeCompletado}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                        className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full transition-all duration-300"
                        style={{ width: `${porcentajeCompletado}%` }}
                    ></div>
                </div>
                {total > 0 && (
                    <p className="text-sm text-gray-600 mt-2">
                        {completadas} de {total} tareas completadas
                    </p>
                )}
            </div>
        </>
    );
};

export default Dashboard;
