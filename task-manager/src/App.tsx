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

  function addTask() {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: title.trim(),
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTitle("");
  }

  const deleteTask = (idToDelete: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== idToDelete);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const toggleTask = (idToToggle: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === idToToggle ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const allTask = tasks.length;
  const activeTask = tasks.filter((task) => !task.completed).length;
  const completedTask = tasks.filter((task) => task.completed).length;

  const filteredTasks = tasks.filter((task) => {
    if (activeTab === "active-Task") return !task.completed;
    if (activeTab === "completed-Task") return task.completed;
    return true;
  })

  return (
    <main className="flex justify-center items-center p-10 min-h-screen bg-gray-50">
      <MainBody
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        title={title}
        setTitle={setTitle}
        tasks={filteredTasks}
        addTask={addTask}
        deleteTask={deleteTask}
        toggleTask={toggleTask}

        allTask={allTask}
        activeTask={activeTask}
        completedTask={completedTask}
      />
    </main>
  );
}