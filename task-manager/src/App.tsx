import { useState } from "react";
import MainBody from "./components/MainBody";

export interface Task {
  id: string;
  title: string;
  completed?: boolean;
}

export default function App() {

  const [activeTab, setActiveTab] = useState<"all-Task" | "active-Task" | "completed-Task">("all-Task");
  const [title, setTitle] = useState("");

  const [tasks, setTasks] = useState<Task[]>(() => {
    const stored = localStorage.getItem("tasks");
    return stored ? JSON.parse(stored) : [];
  });

  // const sourceTasks = activeTab === "all-Task"

  function addTask() {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: title.trim(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("notes", JSON.stringify(updatedTasks));

    setTitle("");
  }

  const deleteTask = (idToDelete: string) => {
    const updateTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(updateTasks);
    localStorage.setItem("deletedNotes", JSON.stringify(updateTasks));
  }

  return (
    <main className="flex justify-center items-center p-10">
      <MainBody
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        title={title}
        setTitle={setTitle}
        tasks={tasks}
        addTask={addTask}
        deleteTask={deleteTask}
      />
    </main>

  )
}