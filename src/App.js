import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./Todos";
import Header from "./Header";
import AddTodo from "./AddTodo";
import About from "./About";
import { TodoProvider } from "./TodoContext";

import "./App.css";

function App() {
  return (
    <Router>
      <TodoProvider>
        <div className="App">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo />
                <Todos />
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} />
        </div>
      </TodoProvider>
    </Router>
  );
}

export default App;
