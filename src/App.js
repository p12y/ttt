import React, { Component } from 'react';
import './App.css';
import PlayerSelect from './components/player_select';
import Board from './components/board';
import DifficultySelect from './components/difficulty_select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { difficulty: 'easy', human: "X", ai: "O", gameIsStarted: false };
    this.handlePlayerSelect = this.handlePlayerSelect.bind(this);
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleDifficultySelect = this.handleDifficultySelect.bind(this);
  }

  handlePlayerSelect(player) {
    if (this.state.gameIsStarted) return false;

    if (player === "X") {
      this.setState({human: "X", ai: "O"});
    } else {
      this.setState({human: "O", ai: "X"});
    }
  }

  handleGameStart() {
    this.setState({gameIsStarted: true});
  }

  handleDifficultySelect(difficulty) {
    if (this.state.gameIsStarted) return false;

    this.setState({ difficulty });
  }

  render() {
    return (
      <div className="App">
        <PlayerSelect onClick={this.handlePlayerSelect} />
        <div onClick={this.handleGameStart}>
          <Board human={this.state.human} ai={this.state.ai} />
        </div>
        <DifficultySelect onClick={this.handleDifficultySelect} />
      </div>
    );
  }
}

export default App;
