
import { Home, RotateCcw } from "lucide-react";

export default function Restart() {
    return (
        <div className="flex w-full flex-col sm:flex-row items-center justify-center gap-4">
            <button
                type="button"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-6 py-3 font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:scale-95"
            >
                <RotateCcw size={18} />
                <span>Try Again</span>
            </button>

            <button
                type="button"
                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white shadow-sm transition-all duration-200 hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 active:scale-95"
            >
                <Home size={18} />
                <span>Go to Home</span>
            </button>
        </div>
    );
}
