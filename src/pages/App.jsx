import Task from "../components/Task";
import Icon from "../components/Icon";

const App = (props) => {
  return <div>
    <Task checked={false} date="Monday"> Do the math for next monday.</Task>
    <Task checked={true} date="Tuesday"> Do the math for next monday.</Task>
    <div>
        <Icon iconName="left"/>
    </div>
  </div>
    
}

export default App;
