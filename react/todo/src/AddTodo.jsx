import React, { useState } from "react";

const AddTodo = ({ onAddTodo }) => {
    const [todoText, setTodoText] = useState("");

    const handleInputChange = (e) => {
        setTodoText(e.target.value);
    };

    const handleAddTodo = () => {
        if (todoText.trim() !== "") {
            onAddTodo(todoText.trim());
            setTodoText("");
        }
    };

    return (
        <div className="add-todo-container">
            <input
                type="text"
                placeholder="Add a new task..."
                value={todoText}
                onChange={handleInputChange}
                className="todo-input"
            />
            <button onClick={handleAddTodo} className="add-todo-button">
                Add
            </button>
        </div>
    );
};

export default AddTodo;
