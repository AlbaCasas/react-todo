import Task from "../components/Task";
import Input from "../components/Input/";
import "./App.css";

const tasks = [
  {
    date: "Monday",
    checked: false,
    text: "Do the math for next monday.",
  },
  {
    date: null,
    checked: true,
    text: "Send the finished assignment",
  },
  {
    date: "Yesterday",
    checked: true,
    text: "Read english book chapter 5",
  },
];

const App = (props) => {
  return (
    <div className="app">
      <Input placeholder="Add a task" />
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
