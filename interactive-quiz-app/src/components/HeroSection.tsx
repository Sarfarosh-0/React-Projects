import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-10 px-6 py-4 sm:px-10 lg:flex-row lg:justify-between ">

            {/* Hero Content */}
            <div className="flex w-full flex-col items-start gap-6 lg:max-w-xl">

                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                    <Sparkles size={16} />
                    Challenge Yourself
                </span>

                <div className="space-y-2">
                    <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                        Test Your
                        <span className="block text-emerald-600">
                            Knowledge!
                        </span>
                    </h1>

                    <p className="max-w-md text-base leading-relaxed text-gray-500 sm:text-lg">
                        Answer a series of questions, challenge your knowledge, and
                        discover how well you score.
                    </p>
                </div>

                <button
                    type="button"
                    className="group inline-flex items-center gap-3 rounded-xl bg-emerald-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-emerald-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-700 hover:shadow-lg active:scale-95"
                >
                    <span>Start Quiz</span>
                    <ArrowRight
                        size={20}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                </button>

                <p className="text-sm text-gray-400">
                    Learn something new with every question.
                </p>
            </div>

            {/* Hero Image */}
            <div className="relative flex w-full max-w-md items-center justify-center">
                <div className="absolute inset-4 rounded-full bg-emerald-100/70 blur-3xl" />

                <img
                    src="/assets/quiz-image.avif"
                    alt="Illustration representing an interactive quiz"
                    className="relative z-10 w-full object-contain drop-shadow-xl"
                />
            </div>
        </section>
    );
}
