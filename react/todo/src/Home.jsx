import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./redux/TodoSlice";

const Home = () => {
  const [todoText, setTodoText] = useState("");
  const store = useSelector((x) => x.todo);
  let dispatch = useDispatch()
  useEffect(() => {
    console.log(store);
  }, [store]);

  const handleInputChange = (e) => {
    setTodoText(e.target.value);
  };

  const handleAddTodo = () => {
    if (todoText.trim() !== "") {
      dispatch(addTodo(todoText.trim()))
    }
  };
  const handleDeleteTodo = (e) => {
    dispatch(deleteTodo(e))
  }

  return (
    <>
      <div className="">
        <input
          type="text"
          placeholder="Add a new task..."
          value={todoText}
          onChange={handleInputChange}
          className="todo-input"
        />
        <button onClick={handleAddTodo} className=" border bg-red-400 text-white h-12 w-20 rounded-md">
          Add
        </button>
      </div>

      <div>
        <h1>Todo List</h1>
        <ul>
          {store.map((todo, index) => (
            <li key={index}>{todo} - <button onClick={() => handleDeleteTodo(index)}>delete</button></li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .add-todo-container {
          display: flex;
          align-items: center;
          margin: 20px 0;
          padding: 10px;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        }

        .todo-input {
          flex-grow: 1;
          padding: 10px;
          border: 2px solid #ddd;
          border-radius: 5px;
          font-size: 16px;
          outline: none;
          transition: border-color 0.3s;
        }

        .todo-input:focus {
          border-color: #007bff;
        }

        .add-todo-button {
          padding: 10px 20px;
          margin-left: 10px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s, transform 0.1s;
        }

        .add-todo-button:hover {
          background-color: #0056b3;
        }

        .add-todo-button:active {
          transform: scale(0.95);
        }

        h1 {
          margin-top: 20px;
        }

        ul {
          list-style-type: none;
          padding-left: 0;
        }

        li {
          background-color: #f1f1f1;
          margin: 5px 0;
          padding: 10px;
          border-radius: 5px;
        }
      `}</style>
    </>
  );
};

export default Home;
