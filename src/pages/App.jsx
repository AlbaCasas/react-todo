import Task from "../components/Task";
import Button from "../components/Button/";

const App = (props) => {
  return <div>
    <Task checked={false} date="Monday"> Do the math for next monday.</Task>
    <Task checked={true} date="Tuesday"> Do the math for next monday.</Task>
    <Button iconName="plus" variant="special"/>
  </div>
}

export default App;
