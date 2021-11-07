import "./Checkbox.css";

const Checkbox = (props) => {
    return <div className="checkbox">
        <div className={`checkbox__box ${props.checked === true ? "checkbox__box--checked" : ""}`}/>
        <span className={`checkbox__text ${props.checked === true ? "checkbox__text--checked" : ""}`}>
            {props.children}
        </span>
    </div>
}

export default Checkbox;
