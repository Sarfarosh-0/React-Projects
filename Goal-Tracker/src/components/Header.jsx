import { CalendarDays } from "lucide-react";

export default function Header() {
    const currentDate = new Date().toDateString();

    return (
        <header className="w-full bg-white sticky top-0 z-10 border-b border-slate-300 shadow-sm px-4 py-4 flex justify-between items-center select-none">
            <div className="flex items-center gap-2">
                <img
                    src="https://cdn-icons-png.flaticon.com/128/8358/8358908.png"
                    alt="Goal Tracker Logo"
                    className="w-10 h-10 object-contain"
                />
                <h1 className="text-2xl font-bold tracking-tight">
                    <span className="text-slate-900">Goal</span>
                    <span className="text-blue-600">Tracker</span>
                </h1>
            </div>

            <div className="text-slate-500 flex items-center gap-2 text-sm font-medium">
                <CalendarDays className="w-5 h-5" />
                <span>{currentDate}</span>
            </div>
        </header>
    );
}