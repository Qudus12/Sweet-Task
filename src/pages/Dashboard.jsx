import { GraduationCap, Briefcase, Calendar, TrendingUp, Clock, PlusCircle, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
    const stats = [
        { label: 'GPA', value: '4.20', icon: GraduationCap, color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-900/20' },
        { label: 'Assignments', value: '4 Due', icon: Calendar, color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-900/20' },
        { label: 'Applications', value: '3 Active', icon: Briefcase, color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-900/20' },
    ];

    const activities = [
        { id: 1, text: 'Applied to Vercel (Frontend Dev)', time: '2 hours ago', type: 'job' },
        { id: 2, text: 'Submitted CS101 Project', time: '5 hours ago', type: 'academic' },
        { id: 3, text: 'Interview scheduled with Google', time: 'Yesterday', type: 'job' },
    ];

    return (
        <div className="max-w-7xl mx-auto space-y-10 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Insights Hub
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium italic">
                        "The beautiful thing about learning is that no one can take it away from you."
                    </p>
                </div>
                <div className="flex items-center space-x-3">
                    <button className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:shadow-xl hover:shadow-primary/30 transition-all hover:-translate-y-1 active:scale-95">
                        <PlusCircle size={20} />
                        <span>Add New Entry</span>
                    </button>
                </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all duration-300 group">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-4 rounded-2xl ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                                <stat.icon size={28} />
                            </div>
                            <span className="text-xs font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-lg">
                                +12%
                            </span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">{stat.label}</p>
                            <p className="text-3xl font-black text-gray-900 dark:text-white mt-1">{stat.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2 space-y-8">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-black flex items-center space-x-3 text-gray-900 dark:text-white">
                            <TrendingUp size={24} className="text-primary" />
                            <span>Recent Momentum</span>
                        </h2>
                    </div>
                    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
                        {activities.map((activity, idx) => (
                            <div key={activity.id} className={`p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors ${idx !== activities.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''}`}>
                                <div className="flex items-center space-x-4">
                                    <div className={`w-3 h-3 rounded-full shadow-lg ${activity.type === 'job' ? 'bg-purple-500 shadow-purple-500/20' : 'bg-blue-500 shadow-blue-500/20'}`}></div>
                                    <p className="text-base font-semibold text-gray-800 dark:text-gray-200">{activity.text}</p>
                                </div>
                                <span className="text-sm text-gray-400 font-medium flex items-center space-x-2">
                                    <Clock size={16} />
                                    <span>{activity.time}</span>
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="space-y-8">
                    <h2 className="text-2xl font-black text-gray-900 dark:text-white">Jump Back In</h2>
                    <div className="grid grid-cols-1 gap-4">
                        <Link to="/academics" className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg group">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Course Portal</h4>
                                <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">Deep dive into your curriculum and track graded performance.</p>
                        </Link>
                        <Link to="/jobs" className="p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl hover:border-primary/50 transition-all hover:shadow-lg group">
                            <div className="flex items-center justify-between mb-2">
                                <h4 className="font-bold text-lg group-hover:text-primary transition-colors">Career Hub</h4>
                                <ChevronRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-sm text-gray-500 font-medium leading-relaxed">Manage your professional applications and interview cycle.</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}
