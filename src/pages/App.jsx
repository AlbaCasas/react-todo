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
          id: Math.random() * 10,
        },
      ]);
    }
  };

  const handleTaskClick = (taskId) => {
    const newTaskList = tasks.map((task) => {
      if (task.id === taskId) {
        const checkedTask = {
          ...task,
          checked: !task.checked,
        };
        return checkedTask;
      }
      return task;
    });

    setTasks(newTaskList);
  };

  return (
    <div className="app">
      <div className="app__body">
        <Input
          className="app__input"
          name={INPUT_NAME}
          placeholder="Add a task"
          onSubmit={handleTaskSubmit}
        />
        <p className="app__tasks-counter">Tasks - {tasks.length}</p>
        {tasks.map((task) => {
          return (
            <Task
              id={task.id}
              className="app__task"
              date={task.date}
              checked={task.checked}
              onClick={handleTaskClick}
            >
              {task.text}
            </Task>
          );
        })}
      </div>
    </div>
  );
};

export default App;
