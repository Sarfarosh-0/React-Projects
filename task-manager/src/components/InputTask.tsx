import { Plus, Pencil } from "lucide-react";

interface InputTaskProps {
    title: string;
    setTitle: (value: string) => void;
    addTask: () => void;
}

export default function InputTask({ title, setTitle, addTask }: InputTaskProps) {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTask();
    };

    return (
        <form onSubmit={handleSubmit}
            className="flex w-full flex-col gap-3 100 bg-white p-4 sm:flex-row sm:items-center sm:p-5">

            <div className="flex min-w-0 flex-1 items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 transition-all focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100">
                <Pencil size={20} className="shrink-0 text-gray-400" />

                <input
                    type="text"
                    value={title}
                    placeholder="Add a new task..."
                    className="h-12 w-full bg-transparent text-base text-gray-800 outline-none placeholder:text-gray-400"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>

            <button
                type="submit"
                className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-xl bg-green-600 px-6 font-semibold text-white shadow-sm transition-all hover:bg-green-700 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
                <Plus size={21} strokeWidth={2.5} />
                <span>Add Task</span>
            </button>

        </form>
    );
}
