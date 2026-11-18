import Header from "../components/Header";
import ProgressBar from "../components/ProgressBar";
import QuestionCard from "../components/QuestionCard";

// interface Question {
//     id: number;
//     question: string;
//     options: string[];
//     correctAnswer: string;
//     explanation: string;
// }

export default function Quiz(allQuestions ) {
    console.log(allQuestions);
    return (
        <main className="flex min-h-screen w-full items-center justify-center bg-gray-50 p-4">
            <div className="flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                <Header />

                {/* Progress Section */}
                <section className="flex flex-col gap-3 bg-white px-5 py-5 sm:px-6">

                    <div className="flex items-center justify-between gap-3">
                        <div className="flex flex-col gap-0.5">
                            <span className="text-sm font-semibold text-gray-800">
                                Your Progress
                            </span>

                            <span className="text-xs text-gray-500">
                                Keep going! You're doing great.
                            </span>
                        </div>

                        <div className="shrink-0 rounded-lg bg-emerald-50 px-3 py-2">
                            <span className="text-sm font-bold text-emerald-700">
                                1 / 10
                            </span>

                            <span className="ml-1 text-xs font-medium text-emerald-600">
                                Questions
                            </span>
                        </div>
                    </div>

                    <ProgressBar progress={10} />
                </section>


                <QuestionCard />

            </div>
        </main>
    );
}
