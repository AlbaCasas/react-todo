import Icon from "../Icon/";
import { getClassName } from "./utils";
import "./Button.css";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`button ${getClassName(props.variant)} ${props.className}`}
    >
      <Icon iconName={props.iconName} className="button__icon" />
    </button>
  );
};

export default Button;
