import { Clipboard } from "lucide-react"
import { TaskList } from "./componentes/TaskList"
import { tareasIniciales, CATEGORIAS, PRIORIDADES } from "./data/tareasData"

export const App = () => {
    const tareas = tareasIniciales

    return (

        <div className=" min-h-screen  bg-gradient-to-br from-red-50 to-ambar-100">

            <div className="bg-white shadow">
                <header className="container mx-auto px-4 py-6 mb-6">
                    <div className="flex justify-center items-center space-x-3">
                        <Clipboard className="h-6 w-6 text-slate-600" />
                        <h1 className="text-3xl font-bold  text-slate-600">
                            Mi lista de Tareas
                        </h1>
                    </div>
                </header>
            </div>

            <div className="container mx-auto px-4">
                {/* KPi */}
                {/* Barra de progreso */}
                {/* filtros de busqueda */}
                {/* Lista de tareas */}
                <TaskList tareas={tareas} />
            </div>
        </div>
    )
}




