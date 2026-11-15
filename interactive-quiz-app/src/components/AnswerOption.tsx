
export default function AnswerOption() {
    return (
        <label
            htmlFor="answer-react"
            className="group flex w-full cursor-pointer items-center gap-4 rounded-xl border border-gray-200 bg-white px-4 py-4 transition-all duration-200 hover:border-emerald-400 hover:bg-emerald-50 has-:checked:border-emerald-500 has-:checked:bg-emerald-50 has-:checked:ring-1 has-:checked:ring-emerald-500"
        >
            <input
                type="radio"
                name="answer"
                id="answer-react"
                value="React"
                className="h-5 w-5 accent-emerald-600"
            />

            <span className="text-sm font-medium text-gray-700 transition-colors group-hover:text-gray-900">
                React
            </span>
        </label>
    );
}
