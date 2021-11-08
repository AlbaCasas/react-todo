import Checkbox from "../Checkbox";
import "./Task.css";

const Task = (props) => {
    return <div className="task">
        <Checkbox checked={props.checked}>
            {props.children} 
        </Checkbox>
        <span className="task__date">{props.date}</span>
    </div>
}

export default Task;