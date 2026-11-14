
import { CircleCheckBig, CircleDot, LayoutGrid } from "lucide-react";

export default function FilterCard() {
    return (
        <div className="flex flex-col gap-4 bg-white px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between">

            {/* Filter Buttons */}
            <div
                className="flex flex-wrap items-center gap-2"
                role="group"
                aria-label="Filter tasks"
            >
                {/* All */}
                <button
                    type="button"
                    aria-pressed="true"
                    className="flex items-center gap-2 rounded-xl bg-green-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-700 active:scale-95"
                >
                    <LayoutGrid size={19} />
                    All
                </button>

                {/* Active */}
                <button
                    type="button"
                    aria-pressed="false"
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-green-200 hover:bg-green-50 hover:text-green-700 active:scale-95"
                >
                    <CircleDot size={19} />
                    Active
                </button>

                {/* Completed */}
                <button
                    type="button"
                    aria-pressed="false"
                    className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm font-semibold text-gray-600 transition-all hover:border-green-200 hover:bg-green-50 hover:text-green-700 active:scale-95"
                >
                    <CircleCheckBig size={19} />
                    Completed
                </button>
            </div>

            {/* Task Summary */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-green-100 bg-green-50 px-4 py-3 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                    <span>Total</span>
                    <span className="font-bold text-gray-900">3</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    <span>Active</span>
                    <span className="font-bold text-gray-900">1</span>
                </div>

                <div className="flex items-center gap-2 text-gray-600">
                    <span className="h-2 w-2 rounded-full bg-green-500" />
                    <span>Completed</span>
                    <span className="font-bold text-gray-900">2</span>
                </div>
            </div>
        </div>
    );
}
