import { ReactComponent as LeftSVG } from "../../assets/Left.svg";
import { ReactComponent as PlusSVG } from "../../assets/Plus.svg";

import "./Icon.css";

const Icon = (props) => {
    if ( props.iconName === "plus" ) {
        return <PlusSVG className={props.className}/>;
    } else if ( props.iconName === "left" ) {
        return <LeftSVG className={props.className}/>;
    } else {
        return null;
    }
}

export default Icon;
