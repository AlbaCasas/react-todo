import Button from "../Button";
import "./Input.css";

const Input = (props) => {
  return (
    <div className="input">
      <Button
        onClick={props.onClick}
        iconName="plus"
        variant="primary"
        className="input__button"
      />
      <input className="input__field" placeholder={props.placeholder} />
    </div>
  );
};

export default Input;
