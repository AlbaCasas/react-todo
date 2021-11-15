import Button from "../Button";
import Icon from "../Icon";
import "./Toast.css";

const Toast = (props) => {
  return (
    <div className="toast">
      <Icon className="toast__icon" iconName="check" />
      <span className="toast__text">{props.children}</span>
      <Button iconName="close" className="toast__button" />
    </div>
  );
};

export default Toast;
