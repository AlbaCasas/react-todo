import Icon from "../Icon/";
import { getClassName } from "./utils";
import "./Button.css";

const Button = (props) => {
    return <button className={`button ${getClassName(props.variant)}`} >
        <Icon iconName={props.iconName}/>
    </button>
}

export default Button;
