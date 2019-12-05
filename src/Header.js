import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div style={headerStyle}>
      <h1>Todo List</h1>
      <Link to="/">Home</Link> | <Link to="/about">About</Link>
    </div>
  );
}

const headerStyle = {
  textAlign: "center",
  background: "#ccc",
  color: "coral",
  padding: "5px"
};

export default Header;
