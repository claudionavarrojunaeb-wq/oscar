import { ClipboardList } from 'lucide-react';

const Header = ({ titulo = "Mi Lista de Tareas" }) => {
    return (
        <header className="bg-white shadow-sm">
            <div className="container mx-auto px-4 py-6">
                <div className="flex items-center justify-center space-x-3">
                    <ClipboardList className="h-8 w-8 text-blue-600" />
                    <h1 className="text-3xl font-bold text-gray-800">
                        {titulo}
                    </h1>
                </div>
            </div>
        </header>
    );
};

export default Header;