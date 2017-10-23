import React, { Component } from 'react';
import Cell from './cell'
import update from 'immutability-helper';
import minimax from '../minimax';
import won from '../won';

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
      gameWon: false
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
    if (this.state.gameWon || !cellIsEmpty(this.state.board[index])) return false;

    function calculateWinner() {
      if (won(this.state.board, this.props.human)) {
        this.setState({ gameWon: true });
        this.props.onWin('human');
        setTimeout(this.resetGame, 2000);
      } else if (won(this.state.board, this.props.ai)) {
        this.setState({ gameWon: true });
        this.props.onWin('ai');
        setTimeout(this.resetGame, 2000);
      } else if (!this.state.board.some(i => {
        return typeof i === 'number';
      })) {
        this.setState({ gameWon: true });
        setTimeout(this.resetGame, 2000);
      }
    }

    function aiMove() {
      calculateWinner.bind(this)();
      let move = minimax(this.state.board, this.props.ai).index;

      if (cellIsEmpty(this.state.board[move])) {
        this.setState(
          update(
            this.state, 
            { board: { $splice: [[move, 1, this.props.ai]] } }
        ), calculateWinner);
      }
    }

    this.setState(
      update(
        this.state, 
        { board: { $splice: [[index, 1, this.props.human]] } }
      ), aiMove
    );
  }

  resetGame() {
    this.setState({ board: [0,1,2,3,4,5,6,7,8], gameWon: false });
  }

  render() {
    const { board } = this.state;
    return (
      <table className="board">
        <tbody>
          <tr>
            <Cell 
              index={0}
              onClick={this.handleClick} 
              value={display(board[0])} 
            />
            <Cell 
              index={1}
              onClick={this.handleClick} 
              value={display(board[1])} 
            />
            <Cell 
              index={2}
              onClick={this.handleClick} 
              value={display(board[2])} 
            />
          </tr>
          <tr>
            <Cell 
              index={3}
              onClick={this.handleClick} 
              value={display(board[3])} 
            />
            <Cell 
              index={4}
              onClick={this.handleClick} 
              value={display(board[4])} 
            />
            <Cell 
              index={5}
              onClick={this.handleClick} 
              value={display(board[5])} 
            />
          </tr>
          <tr>
            <Cell 
              index={6}
              onClick={this.handleClick} 
              value={display(board[6])} 
            />
            <Cell 
              index={7}
              onClick={this.handleClick} 
              value={display(board[7])} 
            />
            <Cell 
              index={8}
              onClick={this.handleClick} 
              value={display(board[8])} 
            />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;

