import React, { Component } from "react";
import cssClasses from "./App.module.css";
import InGame from "../components/InGame/InGame";

class App extends Component {
  state = {
    data: null,
    playerType: 0,
    wordCount: [9, 8, 7, 1],
    activeTeam: 0,
    isGameOver: false,
  };

  componentDidMount() {
    this.callBackendAPI()
      .then((res) => {
        this.setState({ data: res.express });
        console.log(this.state.data);
      })
      .catch((err) => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch("/express_test");
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }
    return body;
  };

  newGameHandler = () => {
    this.callBackendAPI()
      .then((res) => {
        this.setState({
          data: res.express,
          playerType: 0,
          wordCount: [9, 8],
          activeTeam: 0,
          isGameOver: false,
        });
        console.log(this.state.data);
      })
      .catch((err) => console.log(err));
  };

  switchPlayerType = (newPlayerType) => {
    this.setState({ playerType: newPlayerType });
  };

  switchTeam = () => {
    this.setState({ activeTeam: ~this.state.activeTeam });
  };

  revealWordType = (index) => {
    const _data = [...this.state.data];
    const _wordCount = [...this.state.wordCount];

    _data[index].isRevealed = true;
    _wordCount[_data[index].type]--;
    if (_data[index].type !== this.state.activeTeam * -1) {
      this.switchTeam();
    }
    if (_data[index].type === 3 || _wordCount[_data[index].type] === 0) {
      this.setState({ data: _data, wordCount: _wordCount, isGameOver: true });
    } else this.setState({ data: _data, wordCount: _wordCount });
  };

  render() {
    return (
      <div className={cssClasses.App}>
        <InGame
          wordCount={this.state.wordCount}
          newGameHandler={this.newGameHandler}
          data={this.state.data}
          playerType={this.state.playerType}
          revealWordType={this.revealWordType}
          switchPlayerType={this.switchPlayerType}
          activeTeam={this.state.activeTeam}
          switchTeam={this.switchTeam}
          isGameOver={this.state.isGameOver}
        />
      </div>
    );
  }
}

export default App;
