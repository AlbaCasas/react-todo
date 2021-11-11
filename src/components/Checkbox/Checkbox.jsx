import "./Checkbox.css";

const Checkbox = (props) => {
  return (
    <div className="checkbox">
      <div
        className={`checkbox__box ${
          props.checked ? "checkbox__box--checked" : ""
        }`}
      />
      <span
        className={`checkbox__text ${
          props.checked ? "checkbox__text--checked" : ""
        }`}
      >
        {props.children}
      </span>
    </div>
  );
};

export default Checkbox;
