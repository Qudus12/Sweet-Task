import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    const getTitle = (path) => {
        switch (path) {
            case '/': return 'Dashboard';
            case '/academics': return 'Academics';
            case '/jobs': return 'Job Applications';
            case '/calendar': return 'Calendar';
            default: return 'SweetTask';
        }
    };

    return (
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 h-16 flex items-center px-6 sticky top-0 z-20">
            <div className="flex-1 flex justify-between items-center">
                <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{getTitle(location.pathname)}</h2>
                <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-sm font-medium">
                        JD
                    </div>
                </div>
            </div>
        </header>
    );
}
