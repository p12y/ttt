import React, { Component } from 'react';
import Cell from './cell'
import update from 'immutability-helper';

function display(char) {
  return typeof char === 'string' ? char : null;
}

function winning(board, player) {
  let winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];
  
  function isRow(el, index, arr) {
    return board[el[0]] === player && 
           board[el[1]] === player && 
           board[el[2]] === player;
  }

  return winningCombos.some(isRow);
}
 
class Board extends Component {
  constructor(props) {
    super(props);
    this.state = { board: [0, 1, 2, 3, 4, 5, 6, 7, 8], humChar: "X", aiChar: "O" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.setState(update(this.state, 
      { board: { $splice: [[index, 1, this.state.humChar]] } }
    ));
  }

  render() {
    const { board } = this.state;
    let win = winning(this.state.board, this.state.humChar);
    console.log(win);
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