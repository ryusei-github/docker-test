import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { Task } from "../types/todoTypes";

interface TaskSectionProps {
    tasks: Task[];
    addTask: (task: string) => void;
    deleteTask: (index: number) => void;
    toggleComplete: (index: number) => void;
}

const TaskSection: React.FC<TaskSectionProps> = ({
    tasks,
    addTask,
    deleteTask,
    toggleComplete,
}) => {
    return (
        <div className="task-section">
            <h2 className="text-center mb-4">ToDo List</h2>
            <TaskInput addTask={addTask} />
            <TaskList
                tasks={tasks}
                deleteTask={deleteTask}
                toggleComplete={toggleComplete}
            />
        </div>
    );
};

export default TaskSection;
