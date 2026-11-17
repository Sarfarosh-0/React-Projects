import Restart from "../components/Restart";
import ResultHero from "../components/ResultHero";
import ResultStats from "../components/ResultStats";

export default function Result() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-gray-50 px-4 py-10">
            <div className="flex w-full max-w-2xl flex-col items-center gap-8 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10">

                <ResultHero />

                <ResultStats />

                <div className="w-full">
                    <Restart />
                </div>

            </div>
        </main>
    );
}
