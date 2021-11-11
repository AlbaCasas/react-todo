import Task from "../components/Task";
import Input from "../components/Input/";
import "./App.css";

const App = (props) => {
  return <div className="app">
    <Task checked={false} date="Monday"> Do the math for next monday.</Task>
    <Input placeholder="Add a task"/>
  </div>
}

export default App;
