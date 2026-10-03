import { Activity, Minus, Plus, RefreshCw } from "lucide-react";

export default function ExerciseCard({ exercise, setExercise }) {
    const GOAL = 45;
    const isCompleted = exercise >= GOAL;
    const progressPercent = Math.min(Math.round((exercise / GOAL) * 100), 100);

    const handleDecrement = () => {
        setExercise((prev) => Math.max(0, prev - 5));
    };

    const handleIncrement = () => {
        setExercise((prev) => Math.min(prev + 5, GOAL)); 
    };

    const handleReset = () => {
        setExercise(0);
    };

    return (
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-emerald-50 p-2.5">
                        <Activity className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-slate-800">
                            Exercise
                        </h2>
                        <p className="text-xs text-slate-500">
                            A healthier you, a happier you.
                        </p>
                    </div>
                </div>
                <span
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${isCompleted
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-emerald-50 text-emerald-600"
                        }`}
                >
                    {isCompleted ? "Completed" : "In progress"}
                </span>
            </div>

            {/* Progress Section */}
            <div className="my-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-slate-800">
                            {exercise}
                        </span>
                        <span className="text-sm font-medium text-slate-400">
                            / {GOAL}
                        </span>
                        <span className="text-sm font-medium text-slate-400">
                            Minutes today
                        </span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600">
                        {progressPercent}%
                    </span>
                </div>

                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleDecrement}
                        disabled={exercise <= 0}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <Minus className="h-4 w-4" />
                    </button>

                    <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-100 font-semibold text-slate-700">
                        {exercise} min
                    </div>

                    <button
                        onClick={handleIncrement}
                        disabled={exercise >= GOAL}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>

                <button
                    onClick={handleReset}
                    disabled={exercise === 0}
                    className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 transition hover:bg-slate-50 active:scale-95 disabled:opacity-50 disabled:pointer-events-none"
                >
                    <RefreshCw className="h-4 w-4 text-slate-500" />
                    Reset
                </button>
            </div>
        </div>
    );
}