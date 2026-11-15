import { CircleCheckBig, CircleDot, LayoutGrid } from "lucide-react";

interface FilterCardProps {
    setActiveTab: React.Dispatch<React.SetStateAction<"all-Task" | "active-Task" | "completed-Task">>;
    activeTab: "all-Task" | "active-Task" | "completed-Task";
}

export default function FilterCard({ setActiveTab, activeTab }: FilterCardProps) {
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
                    onClick={() => setActiveTab("all-Task")}
                    aria-pressed="true"
                    className=
                    {`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-95 ${activeTab === "all-Task"
                        ? "bg-green-600 text-white shadow-sm hover:bg-green-700"
                        : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                        }`}
                >
                    <LayoutGrid size={19} />
                    All
                </button>

                {/* Active */}
                <button
                    type="button"
                    onClick={() => setActiveTab("active-Task")}
                    aria-pressed="false"
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-95 ${activeTab === "active-Task"
                        ? "bg-green-600 text-white shadow-sm hover:bg-green-700"
                        : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                        }`}
                >
                    <CircleDot size={19} />
                    Active
                </button>

                {/* Completed */}
                <button
                    type="button"
                    onClick={() => setActiveTab("completed-Task")}
                    aria-pressed="false"
                    className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all active:scale-95 ${activeTab === "completed-Task"
                        ? "bg-green-600 text-white shadow-sm hover:bg-green-700"
                        : "border border-gray-200 bg-gray-50 text-gray-600 hover:border-green-200 hover:bg-green-50 hover:text-green-700"
                        }`}
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
