import { ReactComponent as LeftSVG } from "../../assets/Left.svg";
import { ReactComponent as PlusSVG } from "../../assets/Plus.svg";

import "./Icon.css";

const Icon = (props) => {
    if ( props.iconName === "plus" ) {
        return <PlusSVG/>;
    } else if ( props.iconName === "left" ) {
        return <LeftSVG/>;
    } else {
        return null;
    }
}

export default Icon;
