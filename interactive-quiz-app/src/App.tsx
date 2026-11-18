import Welcome from "./pages/Welcome";
import Result from "./pages/Result";
import Quiz from "./pages/Quiz";
import { questions } from "./data/questions";

export default function App() {
  const totalQuestions = questions.length;
  console.log(totalQuestions)

  return (
    <main className="min-h-screen bg-gray-50 justify-center flex items-center p-4">
      <Welcome />
      <Quiz
        allQuestions={questions}
      />
      <Result />
    </main>
  );
}
