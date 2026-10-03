import { Sun } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="w-full max-w-5xl mx-auto mt-4 p-2 md:p-3 rounded-2xl bg-linear-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-xl shadow-indigo-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {/* Left Section */}
                <div className="flex items-center gap-4 md:gap-6">

                    <img
                        src="https://cdn-icons-png.flaticon.com/128/14905/14905000.png"
                        alt="Trophy celebration icon"
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />


                    <div className="space-y-1">
                        <h1 className="font-extrabold text-xl md:text-2xl tracking-tight text-white">
                            Small steps create big results!
                        </h1>
                        <p className="text-sm md:text-base text-blue-100 font-medium leading-relaxed">
                            Track your daily goals and build better habits
                        </p>
                    </div>
                </div>
                <div className="w-full sm:w-auto flex justify-start sm:justify-end shrink-0">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full text-white font-semibold text-sm shadow-sm hover:bg-white/25 transition-colors cursor-default">
                        <Sun className="w-4 h-4 text-amber-300 fill-amber-300" />
                        <span>Keep Going</span>
                    </div>
                </div>
            </div>
        </section>
    );
}