import { LayoutDashboard, GraduationCap, Briefcase, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar() {
    const location = useLocation();

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, path: '/' },
        { name: 'Academics', icon: GraduationCap, path: '/academics' },
        { name: 'Jobs', icon: Briefcase, path: '/jobs' },
        { name: 'Calendar', icon: Calendar, path: '/calendar' },
    ];

    return (
        <aside className="w-64 bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 hidden md:flex flex-col h-full shadow-lg shadow-gray-200/50 dark:shadow-none z-30">
            <div className="p-8">
                <div className="flex items-center space-x-3 group cursor-pointer">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                        <GraduationCap className="text-white" size={24} />
                    </div>
                    <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
                        SweetTask
                    </h1>
                </div>
            </div>
            <nav className="flex-1 px-4 space-y-1.5">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.path;

                    return (
                        <Link
                            key={item.path}
                            to={item.path}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 group ${isActive
                                ? 'bg-gradient-to-r from-primary to-indigo-600 text-white shadow-md shadow-primary/20 translate-x-1'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-primary dark:hover:text-white'
                                }`}
                        >
                            <Icon size={20} className={`${isActive ? 'text-white' : 'group-hover:scale-110 transition-transform'}`} />
                            <span className="font-semibold">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>
            <div className="p-4 mt-auto">
                <div className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Pro Plan</p>
                    <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-3">Get unlimited tasks and priority support.</p>
                    <button className="w-full py-2 bg-white dark:bg-gray-950 text-xs font-bold rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                        Upgrade Now
                    </button>
                </div>
            </div>
        </aside>
    );
}
