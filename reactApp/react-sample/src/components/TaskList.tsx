import React from "react";
import TaskItem from "./TaskItem";
import { TaskListProps } from "../types/todoTypes";

const TaskList: React.FC<TaskListProps> = ({
    tasks,
    deleteTask,
    toggleComplete,
}) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <TaskItem
                    key={index}
                    task={task}
                    index={index}
                    deleteTask={deleteTask}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ul>
    );
};

export default TaskList;
