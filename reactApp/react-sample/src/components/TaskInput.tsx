import React, { useState } from "react";
import { TaskInputProps } from "../types/todoTypes";

const TaskInput: React.FC<TaskInputProps> = ({ addTask }) => {
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (inputValue.trim()) {
            addTask(inputValue);
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="タスクを入力しましょう..."
            />
            <button type="submit" className="btn btn-primary">
                追加
            </button>{" "}
        </form>
    );
};

export default TaskInput;
