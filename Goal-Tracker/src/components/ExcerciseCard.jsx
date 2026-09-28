import { Activity, Minus, Plus, RefreshCw } from "lucide-react";

export default function ExerciseCard() {
    return (
        <div className="w-full max-w-sm rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-emerald-50 p-2.5">
                        <Activity className="h-6 w-6 text-emerald-500" />
                    </div>
                    <div>
                        <h2 className="text-base font-semibold text-slate-800">Exercise</h2>
                        <p className="text-xs text-slate-500">A healthier you, a happier you.</p>
                    </div>
                </div>
                <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-600">
                    In progress
                </span>
            </div>

            {/* Progress Section */}
            <div className="my-5 flex flex-col gap-2">
                <div className="flex items-baseline justify-between">
                    <div className="flex items-baseline gap-1">
                        <span className="text-2xl font-bold text-slate-800">20</span>
                        <span className="text-sm font-medium text-slate-400">/ 45</span>
                        <span className="text-sm font-medium text-slate-400">Minutes today</span>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600">44%</span>
                </div>

                {/* Styled Progress Bar */}
                <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-100">
                    <div className="h-full w-[44.4%] rounded-full bg-emerald-500" />
                </div>
            </div>

            {/* Controls */}
            <div className="flex flex-col gap-2.5">
                <div className="flex items-center gap-2">
                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95">
                        <Minus className="h-4 w-4" />
                    </button>

                    <div className="flex h-10 flex-1 items-center justify-center rounded-lg bg-slate-100 font-semibold text-slate-700">
                        20
                    </div>

                    <button className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition hover:bg-slate-200 active:scale-95">
                        <Plus className="h-4 w-4" />
                    </button>
                </div>

                <button className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white text-sm font-medium text-slate-600 transition hover:bg-slate-50 active:scale-95">
                    <RefreshCw className="h-4 w-4 text-slate-500" />
                    Reset
                </button>
            </div>
        </div>
    );
}