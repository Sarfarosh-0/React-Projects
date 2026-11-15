import { Lightbulb } from "lucide-react";

export default function Header() {
    return (
        <header className="flex items-center gap-3 bg-white px-6 py-4 rounded-t-2xl">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Lightbulb size={22} strokeWidth={2} />
            </div>

            <div>
                <h1 className="text-lg font-bold tracking-tight text-gray-900">
                    Quiz App
                </h1>
                <p className="text-xs text-gray-500">
                    Test your knowledge
                </p>
            </div>
        </header>
    );
}
