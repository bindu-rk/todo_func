import React, { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

function AddTodo() {
  const [title, setTitle] = useState("");

  const [todos, setTodos] = useContext(TodoContext);

  const handleSubmit = e => {
    e.preventDefault();
    const newTodo = { title: title, completed: false };
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setTodos([...todos, data]);
      });
    //setTodos([...todos, newTodo]);
    setTitle("");
  };

  return (
    <form
      onSubmit={e => handleSubmit(e)}
      style={{ display: "flex", height: "30px" }}
    >
      <input
        type="text"
        style={{ flex: "10" }}
        placeholder="Add Todo..."
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <button type="submit" style={{ flex: "1" }}>
        Submit
      </button>
    </form>
  );
}

export default AddTodo;
