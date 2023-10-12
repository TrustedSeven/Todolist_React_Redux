import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { About } from "./components/About";
import { Contact } from "./components/Contact"
import { AddTodo } from "./components/AddTodo";
import { TodoLists } from "./components/TodoLists";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <div className="container p-4 mt-2">
      <h2>Todo Application</h2>
      <Navbar />
      <Router>
        <Switch>
          <Route exact path="/Todolist_React_Redux" element={<About />} />
          <Route path="/Todolist_React_Redux/todo" element={
            <div>
              <AddTodo />
              <TodoLists />
            </div>
          } />
          <Route path="/Todolist_React_Redux/contact" element={<Contact />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
