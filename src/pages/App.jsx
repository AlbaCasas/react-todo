import React, { useState } from "react";
import Task from "../components/Task";
import Input from "../components/Input/";
import "./App.css";

const App = (props) => {
  const [tasks, setTasks] = useState([]);
  const handleTaskSubmit = () =>
    setTasks([
      {
        date: null,
        checked: false,
        text: "Hello World",
      },
    ]);
  return (
    <div className="app">
      <Input placeholder="Add a task" onClick={handleTaskSubmit} />
      {tasks.map((task) => {
        return (
          <Task date={task.date} checked={task.checked}>
            {task.text}
          </Task>
        );
      })}
    </div>
  );
};

export default App;
