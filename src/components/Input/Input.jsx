import Button from "../Button";
import "./Input.css";

const Input = (props) => {
  return (
    <form onSubmit={props.onSubmit} className="input">
      <Button
        type="submit"
        iconName="plus"
        variant="primary"
        className="input__button"
      />
      <input
        name={props.name}
        className="input__field"
        placeholder={props.placeholder}
      />
    </form>
  );
};

export default Input;
