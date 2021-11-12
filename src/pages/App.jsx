import React, { useState } from "react";
import Task from "../components/Task";
import Input from "../components/Input/";
import "./App.css";

const App = (props) => {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="app">
      <Input
        placeholder="Add a task"
        onClick={() =>
          setTasks([
            {
              date: null,
              checked: false,
              text: "Hello World",
            },
          ])
        }
      />
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
