
import { Lightbulb, Sparkles } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center justify-between bg-white px-5 py-4 sm:px-6">
            <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shadow-sm">
                    <Lightbulb size={23} strokeWidth={2} />
                </div>

                <div className="flex flex-col">
                    <h1 className="text-lg font-bold tracking-tight text-gray-900">
                        Quiz App
                    </h1>

                    <p className="text-xs font-medium text-gray-500">
                        Test your knowledge
                    </p>
                </div>
            </div>

            <div className="hidden items-center gap-1.5 rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1.5 sm:flex">
                <Sparkles size={14} className="text-emerald-600" />

                <span className="text-xs font-semibold text-emerald-700">
                    Learn & Grow
                </span>
            </div>
        </header>
    );
}
