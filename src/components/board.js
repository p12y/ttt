import React, { Component } from 'react';
import Cell from './cell';
import update from 'immutability-helper';
import moves from '../moves';
import won from '../won';
import { headShake } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  headShake: {
    animationName: headShake,
    animationDuration: '1s'
  }
});

function display(char) {
  return typeof char === 'string' ? char : null;
}

function cellIsEmpty(cell) {
  return typeof cell === 'number';
}
 
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      board: props.board,
      gameWon: false,
      isShaking: false,
      acceptingInput: true
    };

    this.handleClick = this.handleClick.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.board !== nextProps.board) {
      this.setState({board: nextProps.board});
    }
  }

  handleClick(index) {

    if (this.state.gameWon         ||  
        !this.state.acceptingInput || 
        !cellIsEmpty(this.state.board[index])
    ) {
      return false;
    } 
    

    function calculateWinner() {
      if (won(this.state.board, this.props.human)) {
        this.setState({ gameWon: true });
        this.props.onWin('human');
        setTimeout(this.resetGame, 2000);
        return true;
      } else if (won(this.state.board, this.props.ai)) {
        this.setState({ gameWon: true, isShaking: true });
        this.props.onWin('ai');
        setTimeout(this.resetGame, 2000);
        return true;
      } else if (this.state.board.every(i => typeof i === 'string')) {
        this.props.onWin('draw');
        setTimeout(this.resetGame, 2000);
        return true;
      }
      return false;
    }

    function aiMove() {
      let move;
      if (calculateWinner.bind(this)()) {
        this.setState({acceptingInput: true});
        return false;
      }

      switch (this.props.difficulty) {
        case 'easy': {
          move = moves.easyMove(this.state.board);
          break;
        }
        case 'medium': {
          move = moves.mediumMove(this.state.board, this.props.ai);
          break;
        }
        case 'hard': {
          move = moves.hardMove(this.state.board, this.props.ai).index;
          break;
        }
        default: {
          move = moves.easyMove(this.state.board);
          break;
        }
      }

      if (cellIsEmpty(this.state.board[move])) {
        setTimeout(() => { 
          this.setState({acceptingInput: true});
          this.setState(
            update(
              this.state, 
              { board: { $splice: [[move, 1, this.props.ai]] } }
            ), calculateWinner)
        }, 500);
      } else {
        calculateWinner.bind(this)();
        this.setState({acceptingInput: true});
      }
    }

    this.setState(
      update(
        this.state, 
        { board: { $splice: [[index, 1, this.props.human]] } }
      ), aiMove
    );
    this.setState({acceptingInput: false});
  }

  resetGame() {
    this.setState({ board: [0,1,2,3,4,5,6,7,8], gameWon: false, isShaking: false });
  }

  render() {
    const { board } = this.state;
    return (
      <div 
        className={`board ${this.state.isShaking ? css(styles.headShake) : ''}`} 
        onClick={this.props.onClick}
      >
        <div className="content">
          <div className="grid">
            <div className="row">
              <Cell 
                className="left"
                index={0}
                onClick={this.handleClick} 
                value={display(board[0])} 
              />
              <Cell 
                className="center"
                index={1}
                onClick={this.handleClick} 
                value={display(board[1])} 
              />
              <Cell 
                className="right"
                index={2}
                onClick={this.handleClick} 
                value={display(board[2])} 
              />
            </div>
            <div className="row middle">
              <Cell 
                className="left"
                index={3}
                onClick={this.handleClick} 
                value={display(board[3])} 
              />
              <Cell 
                className="center"
                index={4}
                onClick={this.handleClick} 
                value={display(board[4])} 
              />
              <Cell 
                className="right"
                index={5}
                onClick={this.handleClick} 
                value={display(board[5])} 
              />
            </div>
            <div className="row">
              <Cell 
                className="left"
                index={6}
                onClick={this.handleClick} 
                value={display(board[6])} 
              />
              <Cell 
                className="center"
                index={7}
                onClick={this.handleClick} 
                value={display(board[7])} 
              />
              <Cell 
                className="right"
                index={8}
                onClick={this.handleClick} 
                value={display(board[8])} 
              />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Board;

