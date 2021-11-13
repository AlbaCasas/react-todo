import React, { useState } from "react";
import Task from "../components/Task";
import Input from "../components/Input/";
import "./App.css";

const INPUT_NAME = "task";

const App = (props) => {
  const [tasks, setTasks] = useState([]);

  const handleTaskSubmit = (event) => {
    event.preventDefault();
    const inputValue = event.target[INPUT_NAME].value;
    if (inputValue !== "") {
      setTasks([
        ...tasks,
        {
          date: null,
          checked: false,
          text: inputValue,
        },
      ]);
    }
  };

  return (
    <div className="app">
      <Input
        className="app__input"
        name={INPUT_NAME}
        placeholder="Add a task"
        onSubmit={handleTaskSubmit}
      />
      {tasks.map((task) => {
        return (
          <Task className="app__task" date={task.date} checked={task.checked}>
            {task.text}
          </Task>
        );
      })}
    </div>
  );
};

export default App;
