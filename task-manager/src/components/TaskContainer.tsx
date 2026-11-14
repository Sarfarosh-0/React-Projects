
import Task from "./Task";

const tasks = [
    { id: 1, title: "Learn React Hooks", completed: true },
    { id: 2, title: "Practice useState", completed: false },
    { id: 3, title: "Understand useEffect", completed: false },
    { id: 4, title: "Build a Todo App", completed: true },
    { id: 5, title: "Practice React Props", completed: false },
];

export default function TaskContainer() {
    return (
        <section className="w-full px-4 py-5 sm:px-6">
            {/* Section Heading */}
            <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-800">
                    Your Tasks
                </h2>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    {tasks.length} Tasks
                </span>
            </div>

            {/* Task List */}
            <div className="flex flex-col gap-3">
                {tasks.length > 0 ? (
                    tasks.map((task) => (
                        <Task
                            key={task.id}
                            title={task.title}
                            completed={task.completed}
                        />
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-green-200 bg-green-50/50 px-4 py-12 text-center">
                        <p className="text-base font-semibold text-gray-700">
                            No tasks found!
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                            Add a new task to get started.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
