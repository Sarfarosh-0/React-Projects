
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function QuizNavigation() {
    return (
        <nav
            aria-label="Quiz navigation"
            className="flex w-full items-center justify-between gap-4 border-t border-gray-100 pt-5"
        >
            {/* Previous Button */}
            <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-600 transition-all duration-200 hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 active:scale-95"
            >
                <ArrowLeft size={18} />
                <span>Previous</span>
            </button>

            {/* Next Button */}
            <button
                type="button"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-emerald-700 active:scale-95"
            >
                <span>Next</span>
                <ArrowRight size={18} />
            </button>
        </nav>
    );
}
