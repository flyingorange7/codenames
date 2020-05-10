import React from "react";
import cssClasses from "./Square.module.css";

const square = (props) => {
  let classesForProp = [cssClasses.Square];
  if (props.playerType === 1 || props.isRevealed) {
    switch (props.type) {
      case 0:
        classesForProp.push(cssClasses.RevealRed);
        break;
      case 1:
        classesForProp.push(cssClasses.RevealBlue);
        break;
      case 2:
        classesForProp.push(cssClasses.RevealNeutral);
        break;
      case 3:
        classesForProp.push(cssClasses.RevealBlack);
        break;
      default:
        break;
    }
  }
  return (
    <div
      className={classesForProp.join(" ")}
      onClick={() => props.onClick(props.index)}
    >
      <span>{props.word}</span>
    </div>
  );
};

export default square;
