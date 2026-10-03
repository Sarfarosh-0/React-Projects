import WaterCard from "./WaterCard";
import ExerciseCard from "./ExcerciseCard";
import StudyCard from "./StudyCard";

export default function GoalContainer({
    exercise,
    setExercise,
    study,
    setStudy,
    water,
    setWater,
}) {
    return (
        <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-6 px-4 py-8">
            <WaterCard water={water} setWater={setWater} />
            <ExerciseCard exercise={exercise} setExercise={setExercise} />
            <StudyCard study={study} setStudy={setStudy} />
        </div>
    );
}