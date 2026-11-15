import TaskCard from "./TaskCard";
import type { Task } from "../App";

interface TaskContainerProps {
    tasks: Task[];
    deleteTask: (idToDelete: string) => void;
    toggleTask: (id: string) => void;
    activeTab: "all-Task" | "active-Task" | "completed-Task";
}

export default function TaskContainer({ tasks, deleteTask, toggleTask }: TaskContainerProps) {
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
                        <TaskCard
                            id={task.id}
                            title={task.title}
                            completed={task.completed}
                            deleteTask={() => deleteTask(task.id)}
                            toggleTask={toggleTask}
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
