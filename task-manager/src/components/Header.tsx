import { CircleCheckBig } from "lucide-react";

export default function Header() {
    return (
        <header className="flex w-full items-center gap-4 rounded-t-2xl border-b border-green-100 bg-linear-to-r from-green-50 to-emerald-50 px-6 py-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-600 shadow-sm">
                <CircleCheckBig size={34} className="text-white" strokeWidth={2.5} />
            </div>

            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold tracking-tight text-green-950 sm:text-3xl">
                    Task Manager
                </h1>

                <p className="text-sm font-medium text-gray-600 sm:text-base">
                    Stay organized. Get things done!
                </p>
            </div>
        </header>
    );
}