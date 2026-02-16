import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus } from 'lucide-react';

export default function Calendar() {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const date = new Date();
    const currentMonth = date.toLocaleString('default', { month: 'long' });
    const currentYear = date.getFullYear();

    // Mock events
    const events = {
        '15': [{ title: 'Math Quiz', type: 'academic' }],
        '20': [{ title: 'CS Final', type: 'academic' }, { title: 'Verel Interview', type: 'job' }],
    };

    const renderDays = () => {
        const calendarDays = [];
        // Just a simple mock for now - showing 31 days starting from a Wednesday (mock)
        for (let i = 1; i <= 31; i++) {
            const hasEvents = events[i.toString()];
            calendarDays.push(
                <div key={i} className="min-h-[100px] bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-2 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group">
                    <div className="flex justify-between items-center mb-1">
                        <span className={`text-sm font-semibold ${i === date.getDate() ? 'bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center rounded-full' : 'text-gray-500'}`}>
                            {i}
                        </span>
                        <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-opacity">
                            <Plus size={14} />
                        </button>
                    </div>
                    <div className="space-y-1">
                        {hasEvents?.map((event, idx) => (
                            <div
                                key={idx}
                                className={`text-[10px] p-1 px-1.5 rounded-md truncate font-medium ${event.type === 'academic'
                                    ? 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                                    : 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400'
                                    }`}
                            >
                                {event.title}
                            </div>
                        ))}
                    </div>
                </div>
            );
        }
        return calendarDays;
    };

    return (
        <div className="max-w-7xl mx-auto space-y-8 py-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">Timeline Analytics</h1>
                    <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium">Strategic scheduling and deadline management.</p>
                </div>
                <div className="flex items-center bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-2xl p-2 shadow-sm">
                    <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-xl transition-all hover:scale-110 active:scale-95 text-gray-500">
                        <ChevronLeft size={22} />
                    </button>
                    <div className="flex items-center space-x-3 px-6 font-black min-w-[200px] justify-center text-gray-900 dark:text-white">
                        <CalendarIcon size={22} className="text-primary" />
                        <span className="text-lg uppercase tracking-widest">{currentMonth} {currentYear}</span>
                    </div>
                    <button className="p-3 hover:bg-gray-100 dark:hover:bg-gray-900 rounded-xl transition-all hover:scale-110 active:scale-95 text-gray-500">
                        <ChevronRight size={22} />
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-950 rounded-3xl border border-gray-200 dark:border-gray-800 shadow-2xl shadow-gray-200/50 dark:shadow-none overflow-hidden">
                <div className="grid grid-cols-7 bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-800">
                    {days.map(day => (
                        <div key={day} className="py-5 text-center text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 divide-x divide-y divide-gray-100 dark:divide-gray-900 border-l border-t border-transparent">
                    {renderDays()}
                </div>
            </div>

            <div className="flex items-center space-x-6 text-xs font-bold uppercase tracking-widest text-gray-400 px-4">
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>Academic</span>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                    <span>Professional</span>
                </div>
            </div>
        </div>
    );
}
