import FilterCard from "./FilterCard";
import Header from "./Header";
import InputTask from "./InputTask";
import TaskContainer from "./TaskContainer";
import type { Task } from "../App";

interface MainBodyProps {
    setActiveTab: React.Dispatch<React.SetStateAction<"all-Task" | "active-Task" | "completed-Task">>;
    activeTab: "all-Task" | "active-Task" | "completed-Task";
    title: string;
    setTitle: (value: string) => void;
    tasks: Task[];
    addTask: () => void;
    deleteTask: (idToDelete: string) => void;
    toggleTask: (id: string) => void;
}


export default function MainBody({ setActiveTab, activeTab, title, setTitle, tasks, addTask, deleteTask, toggleTask }: MainBodyProps) {
    return (
        <section className="mx-auto min-h-150 w-full overflow-hidden rounded-2xl border border-green-100 bg-white shadow-xl">
            <Header />
            <InputTask
                title={title}
                setTitle={setTitle}
                addTask={addTask}
            />
            <FilterCard
                setActiveTab={setActiveTab}
                activeTab={activeTab}
            />
            <TaskContainer
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
            />
        </section>
    );
}