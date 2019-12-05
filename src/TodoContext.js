import React, { useState, useEffect, createContext } from "react";

export const TodoContext = createContext();

export const TodoProvider = props => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => res.json())
      .then(data => setTodos(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <TodoContext.Provider value={[todos, setTodos]}>
      {props.children}
    </TodoContext.Provider>
  );
};
