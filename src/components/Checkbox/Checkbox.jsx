import "./Checkbox.css";

const Checkbox = (props) => {
    return <div className="checkbox">
        <div className="checkbox__box checkbox__box--unchecked"/>
        <span>
            {props.children}
        </span>
    </div>
}

export default Checkbox;