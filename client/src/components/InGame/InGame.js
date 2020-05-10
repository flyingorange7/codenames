import React from "react";
import cssClasses from "./InGame.module.css";
import Table from "./Table/Table";

const ingame = (props) => {
  let teamColor = [cssClasses.BlueTeam];
  if (props.activeTeam === 0 && !props.isGameOver) {
    teamColor.push(cssClasses.RedTeam);
  } else if (props.isGameOver) teamColor.push(cssClasses.GameOver);
  return (
    <div>
      <h1 className={cssClasses.WelcomeText}>Welcome to CodeNames!</h1>
      <div>
        <span className={cssClasses.WordCount}>
          {props.wordCount[0]} -{" "}
          <span className={cssClasses.Blue}>{props.wordCount[1]}</span>
        </span>
        <button
          onClick={props.newGameHandler}
          className={cssClasses.FloatButtonRight}
        >
          New Game
        </button>
      </div>
      <Table
        data={props.data}
        playerType={props.playerType}
        onClick={props.revealWordType}
        isGameOver={props.isGameOver}
      />
      <div>
        {!props.isGameOver ? (
          <span className={teamColor.join(" ")}>
            {props.activeTeam === 0 ? "Red" : "Blue"} Team's turn
          </span>
        ) : (
          <span className={teamColor.join(" ")}>Game Over!</span>
        )}
        <button onClick={() => props.switchPlayerType(0)}>Player</button>
        <button onClick={() => props.switchPlayerType(1)}>SpyMaster</button>
        <button
          onClick={props.switchTeam}
          className={cssClasses.FloatButtonRight}
        >
          End Turn
        </button>
      </div>
    </div>
  );
};

export default ingame;
