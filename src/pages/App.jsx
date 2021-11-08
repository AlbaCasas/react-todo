import Task from "../components/Task";

function App(props) {
  return <div>
    <Task checked={false} date="Monday"> Do the math for next monday.</Task>
    <Task checked={true} date="Tuesday"> Do the math for next monday.</Task>
  </div>
}

export default App;
