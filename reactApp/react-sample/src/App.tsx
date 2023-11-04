import React, { useState } from "react";
import WeatherSection from "./components/WeatherSection";
import TaskSection from "./components/TaskSection";
import { Task } from "./types/todoTypes";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AppStyles.css";

function App() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const addTask = (task: string) => {
        setTasks([{ task, completed: false }, ...tasks]);
    };

    const deleteTask = (index: number) => {
        const newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);
    };

    const toggleComplete = (index: number) => {
        const newTasks = [...tasks];
        newTasks[index].completed = !newTasks[index].completed;
        setTasks(newTasks);
    };

    return (
        <div className="container mt-4">
            <div className="d-flex justify-content-center">
                <WeatherSection />
            </div>
            <div className="col-md-6 mx-auto">
                {" "}
                <TaskSection
                    tasks={tasks}
                    addTask={addTask}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                />
            </div>
        </div>
    );
}

export default App;
