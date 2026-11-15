import { Trash2 } from "lucide-react";

interface TaskProps {
    id: string;
    title: string;
    completed?: boolean;
    toggleTask?: (id: string) => void;
    deleteTask?: (id: string) => void;
}

export default function TaskCard({ id, title, completed, toggleTask, deleteTask }: TaskProps) {
    return (
        <div className="group flex items-center justify-between gap-3 rounded-xl border border-gray-200 bg-white px-4 py-4 shadow-sm transition-all hover:border-green-200 hover:shadow-md sm:px-5">
            {/* Task Details */}
            <div className="flex min-w-0 items-center gap-3">
                <input
                    type="checkbox"
                    id={`task-${id}`}
                    name={`task-${id}`}
                    checked={!!completed}
                    onChange={() => toggleTask && toggleTask(id)}
                    className="h-5 w-5 shrink-0 cursor-pointer appearance-none rounded-md border-2 border-gray-300 checked:border-green-600 checked:bg-green-600 checked:bg-[url('data:image/svg+xml,%3Csvg viewBox=%270 0 16 16%27 fill=%27none%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cpath d=%27M3 8L6.5 11.5L13 4.5%27 stroke=%27white%27 stroke-width=%272%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27/%3E%3C/svg%3E')]"
                />

                <label
                    htmlFor={`task-${id}`}
                    className={`cursor-pointer truncate text-sm font-medium sm:text-base ${completed ? "text-gray-400 line-through" : "text-gray-800"
                        }`}
                >
                    {title}
                </label>
            </div>

            {/* Status and Actions */}
            <div className="flex shrink-0 items-center gap-3">
                <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${completed ? "bg-green-50 text-green-700" : "bg-blue-50 text-blue-700"
                        }`}
                >
                    {completed ? "Completed" : "Active"}
                </span>

                <button
                    type="button"
                    onClick={() => deleteTask && deleteTask(id)}
                    aria-label={`Delete ${title}`}
                    className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-red-50 hover:text-red-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
                >
                    <Trash2 size={18} />
                </button>
            </div>
        </div>
    );
}