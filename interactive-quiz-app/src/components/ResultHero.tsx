
import { Trophy } from "lucide-react";

export default function ResultHero() {
    return (
        <section className="flex flex-col items-center justify-center gap-3 px-4 py-8 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100">
                <Trophy
                    size={40}
                    className="text-emerald-600"
                    strokeWidth={1.8}
                />
            </div>

            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                    Quiz Completed!
                </h1>

                <p className="text-sm text-gray-500 sm:text-base">
                    Here's your performance summary.
                </p>
            </div>

            <span className="mt-1 rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-semibold text-emerald-700">
                WELL DONE
            </span>
        </section>
    );
}
