import React, { Component } from 'react';
import Cell from './cell'
import update from 'immutability-helper';
import minimax from '../minimax';

function display(char) {
  return typeof char === 'string' ? char : null;
}

function cellIsEmpty(cell) {
  return typeof cell === 'number';
}
 
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { board: [0,1,2,3,4,5,6,7,8] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    if (!cellIsEmpty(this.state.board[index])) return false;

    function aiMove() {
      let move = minimax(this.state.board, this.props.ai).index;
      if (cellIsEmpty(this.state.board[move])) {
        this.setState(
          update(
            this.state, 
            { board: { $splice: [[move, 1, this.props.ai]] } }
        ));
      }
    }

    this.setState(
      update(
        this.state, 
        { board: { $splice: [[index, 1, this.props.human]] } }
      ), aiMove
    );
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

