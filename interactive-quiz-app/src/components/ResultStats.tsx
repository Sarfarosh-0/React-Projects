export default function ResultStats() {
    return (
        <section
            aria-label="Quiz results summary"
            className="grid w-full grid-cols-3 items-center rounded-2xl border border-emerald-100 bg-emerald-50 px-4 py-4 "
        >
            {/* Your Score */}
            <div className="flex flex-col items-center gap-2">
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                    Your Score
                </p>
                <p className="text-2xl font-bold text-emerald-700 sm:text-3xl">
                    8<span className="text-base font-medium text-gray-400">/10</span>
                </p>
            </div>

            {/* Percentage */}
            <div className="flex flex-col items-center gap-2 border-x border-emerald-200">
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                    Percentage
                </p>
                <p className="text-2xl font-bold text-emerald-700 sm:text-3xl">
                    80%
                </p>
            </div>

            {/* Performance */}
            <div className="flex flex-col items-center gap-2">
                <p className="text-xs font-medium text-gray-500 sm:text-sm">
                    Performance
                </p>
                <p className="text-xl font-bold text-emerald-700 sm:text-2xl">
                    Great
                </p>
            </div>
        </section>
    );
}