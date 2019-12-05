import React from "react";

function TodoItem({ todo: { id, title, completed }, toggleComplete, delTodo }) {
  //const { id, title, completed } = props.todo;

  const getStyle = () => {
    return {
      textDecoration: completed ? "line-through" : "none",
      background: "#f4f4f4",
      border: "1px dotted #ddd"
    };
  };

  return (
    <div style={getStyle()}>
      <p>
        <input
          type="checkbox"
          checked={completed}
          onChange={() => toggleComplete(id)}
        />
        {title}
        <button style={btnStyle} onClick={() => delTodo(id)}>
          X
        </button>
      </p>
    </div>
  );
}

const btnStyle = {
  background: "#ddd",
  color: "red",
  borderRadius: "50%",
  border: "none",
  float: "right",
  marginRight: "5px",
  padding: "5px 8px"
};
export default TodoItem;
