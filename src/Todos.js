import React, { useContext } from "react";
import TodoItem from "./TodoItem";
// import AddTodo from "./AddTodo";
import { TodoContext } from "./TodoContext";

function Todos() {
  const [todos, setTodos] = useContext(TodoContext);

  const toggleComplete = id => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: true }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setTodos(
          [...todos].map(todo => {
            if (todo.id === id) {
              todo.completed = data.completed;
            }
            return todo;
          })
        );
      })
      .catch(err => console.log(err));
  };

  const delTodo = id => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE"
    })
      .then(res => setTodos([...todos].filter(todo => todo.id !== id)))
      .catch(err => console.log(err));

    // setTodos([...todos].filter(todo => todo.id !== id));
  };

  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          delTodo={delTodo}
        />
      ))}
    </div>
  );
}

export default Todos;
