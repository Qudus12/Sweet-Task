import { GraduationCap, BookOpen, Clock, Trophy } from 'lucide-react';

export default function Academics() {
    const courses = [
        { id: 1, name: 'Control Engineering', grade: 'A', instructor: 'Dr. Jubril', progress: 85 },
        { id: 2, name: 'Quantum Mechanics', grade: 'A', instructor: 'Dr. Ilori', progress: 60 },
        { id: 3, name: 'Power Systems', grade: 'A', instructor: 'Dr. Ariyo', progress: 72 },
    ];

    const assignments = [
        { id: 1, title: 'Final Project Submission', course: 'Probability', dueDate: '2026-02-20' },
        { id: 2, title: 'Commnication Project', course: 'Comms', dueDate: '2026-02-15' },
    ];

    return (
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Academic Overview</h1>
                    <p className="text-gray-500 dark:text-gray-400">Track your courses and scholarly progress.</p>
                </div>
                <div className="flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full font-semibold">
                    <Trophy size={18} />
                    <span>GPA: 4.20</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Course List */}
                <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-xl font-semibold flex items-center space-x-2">
                        <BookOpen size={20} className="text-primary" />
                        <span>Active Courses</span>
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {courses.map((course) => (
                            <div key={course.id} className="bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <h3 className="font-bold text-lg text-gray-900 dark:text-white">{course.name}</h3>
                                        <p className="text-sm text-gray-500">{course.instructor}</p>
                                    </div>
                                    <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded text-sm font-bold">
                                        {course.grade}
                                    </span>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span>Progress</span>
                                        <span>{course.progress}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                                        <div
                                            className="bg-primary h-2 rounded-full transition-all duration-1000"
                                            style={{ width: `${course.progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Upcoming Deadlines */}
                <div className="space-y-6">
                    <h2 className="text-xl font-semibold flex items-center space-x-2">
                        <Clock size={20} className="text-primary" />
                        <span>Deadlines</span>
                    </h2>
                    <div className="space-y-4">
                        {assignments.map((task) => (
                            <div key={task.id} className="p-4 rounded-lg border border-l-4 border-l-primary bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800">
                                <h4 className="font-semibold text-gray-900 dark:text-white">{task.title}</h4>
                                <p className="text-sm text-gray-500">{task.course}</p>
                                <p className="text-xs mt-2 font-medium text-orange-600 dark:text-orange-400">
                                    Due: {new Date(task.dueDate).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
