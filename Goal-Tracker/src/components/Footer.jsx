import { Sprout } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full max-w-5xl mx-auto mt-4 px-3 py-2 rounded-2xl bg-linear-to-r from-green-600 via-green-600 to-emerald-600 text-white shadow-xl shadow-indigo-500/10 transition-all">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                {/* Left Section */}
                <div className="flex items-center gap-4 md:gap-6">
                    <Sprout
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                    />

                    <div className="space-y-1">
                        <h2 className="font-extrabold text-xl md:text-2xl tracking-tight text-white">
                            Small steps create big results!
                        </h2>
                        <p className="text-sm md:text-base text-green-100 font-medium leading-relaxed">
                            Track your daily goals and build better habits
                        </p>
                    </div>
                </div>

                {/* Right Badge/Action */}
                <img
                    src="https://cdn.vectorstock.com/i/500p/10/22/mountain-landscape-with-green-meadows-vector-47721022.jpg"
                    alt="Mountain landscape"
                    className="w-30 h-20 object-cover rounded-lg"
                />
            </div>
        </footer>
    );
}