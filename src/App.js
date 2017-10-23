import React, { Component } from 'react';
import './App.css';
import PlayerSelect from './components/player_select';
import ScoreBoard from './components/score_board';
import Board from './components/board';
import DifficultySelect from './components/difficulty_select';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      difficulty: 'easy', 
      human: "X", ai: "O", 
      gameIsStarted: false, 
      humWinCount: 0,
      aiWinCount: 0,
      board: [0,1,2,3,4,5,6,7,8]
    };

    this.handlePlayerSelect = this.handlePlayerSelect.bind(this);
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleDifficultySelect = this.handleDifficultySelect.bind(this);
    this.handleWin = this.handleWin.bind(this);
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
    this.resetGame();
    this.setState({ difficulty });
  }

  handleWin(winner) {
    if (winner === 'human') {
      this.setState({ 
        humWinCount: this.state.humWinCount + 1, 
        gameIsStarted: false 
      });
    } else if (winner === 'ai') {
      this.setState({ 
        aiWinCount: this.state.aiWinCount + 1, 
        gameIsStarted: false 
      });
    }
  }

  resetGame() {
    this.setState({ 
      gameIsStarted: false, 
      humWinCount: 0, 
      aiWinCount: 0,
      board: [0,1,2,3,4,5,6,7,8]
    });
  }

  render() {
    return (
      <div className="App">
        <PlayerSelect onClick={this.handlePlayerSelect} />
        <ScoreBoard 
          human={this.state.humWinCount} 
          ai={this.state.aiWinCount} 
        />
        <div onClick={this.handleGameStart}>
          <Board 
            human={this.state.human} 
            ai={this.state.ai}
            onWin={this.handleWin} 
            board={this.state.board}
            difficulty={this.state.difficulty}
          />
        </div>
        <DifficultySelect onClick={this.handleDifficultySelect} />
      </div>
    );
  }
}

export default App;
