import GoalCard from "./GoalCard";

export default function GoalContainer() {
    return (
        <div className="w-full flex justify-evenly items-center mt-4">
            <GoalCard />
            <GoalCard />
            <GoalCard />
        </div>
    )
}