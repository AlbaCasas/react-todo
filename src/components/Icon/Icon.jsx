import { ReactComponent as LeftSVG } from "../../assets/Left.svg";
import { ReactComponent as PlusSVG } from "../../assets/Plus.svg";
import { ReactComponent as CloseSVG } from "../../assets/Close.svg";
import { ReactComponent as CheckCircleSVG } from "../../assets/CheckCircle.svg";

import "./Icon.css";

const Icon = (props) => {
  const className = `icon ${props.className}`;
  if (props.iconName === "plus") {
    return <PlusSVG className={className} />;
  } else if (props.iconName === "left") {
    return <LeftSVG className={className} />;
  } else if (props.iconName === "close") {
    return <CloseSVG className={className} />;
  } else if (props.iconName === "check") {
    return <CheckCircleSVG className={className} />;
  } else {
    return null;
  }
};

export default Icon;
