import { Briefcase, MapPin, DollarSign, Clock, CheckCircle2, XCircle, Timer } from 'lucide-react';

export default function Jobs() {
    const applications = [
        { id: 1, role: 'Software Engineer Intern', company: 'Google', location: 'Mountain View, CA', salary: '$45/hr', status: 'Interviewing', date: '2026-02-10' },
        { id: 2, role: 'Frontend Developer', company: 'Vercel', location: 'Remote', salary: '$120k/yr', status: 'Applied', date: '2026-02-12' },
        { id: 3, role: 'Product Designer', company: 'Airbnb', location: 'San Francisco, CA', salary: '$140k/yr', status: 'Rejected', date: '2026-01-20' },
    ];

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Interviewing': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400';
            case 'Applied': return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
            case 'Offered': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'Rejected': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
            default: return 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400';
        }
    };

    const getStatusIcon = (status) => {
        switch (status) {
            case 'Interviewing': return <Timer size={14} />;
            case 'Applied': return <Clock size={14} />;
            case 'Offered': return <CheckCircle2 size={14} />;
            case 'Rejected': return <XCircle size={14} />;
            default: return null;
        }
    };

    return (
        <div className="max-w-7xl mx-auto space-y-10 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div>
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Professional Pipeline</h1>
                <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium italic">"Success is where preparation and opportunity meet."</p>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-xl shadow-gray-200/50 dark:shadow-none overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
                                <th className="px-8 py-6 font-black text-xs uppercase tracking-widest text-gray-400">Position & Entity</th>
                                <th className="px-8 py-6 font-black text-xs uppercase tracking-widest text-gray-400">Location</th>
                                <th className="px-8 py-6 font-black text-xs uppercase tracking-widest text-gray-400">Compensation</th>
                                <th className="px-8 py-6 font-black text-xs uppercase tracking-widest text-gray-400">Status</th>
                                <th className="px-8 py-6 font-black text-xs uppercase tracking-widest text-gray-400">Timeline</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-gray-900">
                            {applications.map((app) => (
                                <tr key={app.id} className="group hover:bg-gray-50/80 dark:hover:bg-gray-900/30 transition-all duration-300">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-4">
                                            <div className="p-3 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm group-hover:scale-110 group-hover:border-primary/30 transition-all duration-300">
                                                <Briefcase size={22} className="text-primary" />
                                            </div>
                                            <div>
                                                <div className="font-bold text-gray-900 dark:text-white text-lg">{app.role}</div>
                                                <div className="text-sm font-semibold text-gray-500 mt-0.5">{app.company}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center space-x-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            <MapPin size={16} className="text-gray-400" />
                                            <span>{app.location}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="inline-flex items-center space-x-2 text-sm font-bold text-primary bg-primary/5 px-3 py-1.5 rounded-lg border border-primary/10">
                                            <DollarSign size={16} />
                                            <span>{app.salary}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-tighter ${getStatusStyle(app.status)} shadow-sm`}>
                                            <div className="opacity-80">{getStatusIcon(app.status)}</div>
                                            <span>{app.status}</span>
                                        </span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="text-sm font-bold text-gray-500 flex items-center space-x-2">
                                            <Timer size={16} className="text-gray-400" />
                                            <span>{new Date(app.date).toLocaleDateString()}</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
