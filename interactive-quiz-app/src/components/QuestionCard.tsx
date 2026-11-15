
import AnswerOption from "./AnswerOption";

export default function QuestionCard() {
    return (
        <section className="flex w-full flex-col gap-6 rounded-b-2xl bg-white px-6 py-2 ">

            {/* Question Header */}
            <div className="flex flex-col gap-3">
                <span className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                    Question 01
                </span>

                <h2 className="text-xl font-bold leading-relaxed tracking-tight text-gray-900 sm:text-2xl">
                    Which of the following is a JavaScript framework?
                </h2>

                <p className="text-sm text-gray-500">
                    Select the correct answer from the options below.
                </p>
            </div>

            {/* Answer Options */}
            <div className="flex flex-col gap-3">
                <AnswerOption />
                <AnswerOption />
                <AnswerOption />
                <AnswerOption />
            </div>

        </section>
    );
}
