import Header from "./components/Header";
import ProgressBar from "./components/ProgressBar";
import QuestionCard from "./components/QuestionCard";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 justify-center flex items-center p-4">

      <div className="flex w-full max-w-3xl flex-col border-2 rounded-2xl">

        <Header />

        <section className="flex flex-col py-3 bg-white">
          <div className="flex items-center justify-between px-5">
            <span className="text-sm font-semibold text-gray-700">
              Your Progress
            </span>

            <span className="text-sm font-medium text-emerald-600">
              1 of 10 Questions
            </span>
          </div>

          <ProgressBar progress={90} />
        </section>

        <QuestionCard />

      </div>
    </main>
  );
}
