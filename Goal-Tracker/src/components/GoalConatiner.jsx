import WaterCard from "./WaterCard"
import ExcerciseCard from "./ExcerciseCard"
import StudyCard from "./StudyCard"

export default function GoalContainer() {
    return (
        <div className="w-full flex justify-evenly items-center mt-4 gap-4 flex-wrap">
            <WaterCard />
            <ExcerciseCard />
            <StudyCard />
        </div>
    );
}