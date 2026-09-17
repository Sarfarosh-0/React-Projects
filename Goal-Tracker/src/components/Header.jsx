import { CalendarDays } from "lucide-react";

export default function Header() {

    const currentDate = new Date().toDateString();

    return (
        <header className="w-full bg-white sticky top-0 z-10 border-b border-slate-400 shadow-b-2xl px-2 py-5 flex justify-between items-center select-none">
            <div className="flex justify-between items-center px-2">
                <img src="https://cdn-icons-png.flaticon.com/128/8358/8358908.png" alt="Logo" className="w-12 h-12 object-contain aspect-square" />
                <h1 className="text-3xl font-bold">
                    <span className="m-0 p-0 text-black">Goal</span>
                    <span className="m-0 p-0 text-blue-500">Tracker</span>
                </h1>
            </div>

            <div className="text-slate-500 flex gap-3 w-fit px-3">
                <CalendarDays />
                <h1>{currentDate}</h1>
            </div>

        </header>
    )
}