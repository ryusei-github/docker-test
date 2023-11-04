import React from "react";
import { TaskItemProps } from "../types/todoTypes";

const TaskItem: React.FC<TaskItemProps> = ({
    task,
    index,
    deleteTask,
    toggleComplete,
}) => {
    return (
        <li>
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(index)}
            />
            <span
                style={{
                    textDecoration: task.completed ? "line-through" : "none",
                }}
            >
                {task.task}
            </span>
            <button
                className="btn btn-danger"
                onClick={() => deleteTask(index)}
            >
                削除
            </button>
        </li>
    );
};

export default TaskItem;
