import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GoalContainer from "./components/GoalConatiner"; // Note: fix filename typo if you rename the component file
import Footer from "./components/Footer";

export default function App() {
  const [exercise, setExercise] = useState(0);
  const [study, setStudy] = useState(0);
  const [water, setWater] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900">
      <Header />

      <main className="flex-1">
        <HeroSection />
        <GoalContainer
          exercise={exercise}
          setExercise={setExercise}
          study={study}
          setStudy={setStudy}
          water={water}
          setWater={setWater}
        />
      </main>

      <Footer />
    </div>
  );
}