import { Timer, Minus, Plus, RefreshCw } from "lucide-react";

export default function StudyCard({ study, setStudy }) {

    const progressPercent = Math.min(Math.round((study / 6) * 100), 100);

    const handleDecrement = () => {
        setStudy((prev) => Math.max(0, prev - 1));
    };

    const handleIncrement = () => {
        setStudy((prev) => Math.min(prev + 1, 6));
    };

    const handleReset = () => {
        setStudy(0);
    };

    return (
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-purple-50 p-2.5">
                        <Timer className="h-6 w-6 fill-purple-500/20 text-purple-500" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-slate-800">
                            Study Pomodoros
                        </h2>
                        <p className="text-xs text-slate-500">Focus, learn, grow</p>
                    </div>
                </div>
                <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-600">
                    {study >= 6 ? "Completed" : "In progress"}
                </span>
            </div>

            {/* Progress Section */}
            <div className="my-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-slate-800">{study}</span>
                        <span className="text-sm font-medium text-slate-400">/ 6</span>
                        <span className="text-sm font-medium text-slate-400">
                            Pomodoros today
                        </span>
                    </div>
                    <span className="text-xs font-semibold text-purple-600">
                        {progressPercent}%
                    </span>
                </div>

                {/* Dynamic Progress Bar */}
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                        className="h-full rounded-full bg-purple-500 transition-all duration-300"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                    <button
                        onClick={handleDecrement}
                        disabled={study <= 0}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95 disabled:opacity-50"
                    >
                        <Minus className="h-4 w-4" />
                    </button>

                    <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-100 font-semibold text-slate-700">
                        {study}
                    </div>

                    <button
                        onClick={handleIncrement}
                        disabled={study >= 6}
                        className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95"
                    >
                        <Plus className="h-4 w-4" />
                    </button>
                </div>

                <button
                    onClick={handleReset}
                    disabled={study === 0}
                    className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 transition hover:bg-slate-50 active:scale-95"
                >
                    <RefreshCw className="h-4 w-4 text-slate-500" />
                    Reset
                </button>
            </div>
        </div>
    );
}