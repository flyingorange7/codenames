import React from "react";
import cssClasses from "./Table.module.css";
import Square from "./Square/Square";

const table = (props) => {
  let squares = null;
  let cssForProp = [cssClasses.Table];
  if(props.isGameOver){
    cssForProp.push(cssClasses.GameOver)
  }
  if (props.data !== null) {
    squares = props.data.map((square, index) => {
      return (
        <Square
          key={square.key}
          index={square.key}
          word={square.word}
          type={square.type}
          playerType={props.playerType}
          onClick={props.onClick}
          isRevealed={square.isRevealed}
        />
      );
    });
  }

  return <div className={cssForProp.join(" ")}>{squares}</div>;
};

export default table;
