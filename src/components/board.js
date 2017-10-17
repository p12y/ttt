import React, { Component } from 'react';
import Cell from './cell'

let boardArr = ["X", 1, 2, 3, 4, 5, 6, 7, 8, 9];

const humPlayer = "X";
const aiPlayer = "O";

function display(char) {
  return typeof char === 'string' ? char : null;
}

class Board extends Component {
  render() {
    return (
      <table className="board">
        <tbody>
          <tr>
            <Cell value={display(boardArr[0])} />
            <Cell value={display(boardArr[1])} />
            <Cell value={display(boardArr[2])} />
          </tr>
          <tr>
            <Cell value={display(boardArr[3])} />
            <Cell value={display(boardArr[4])} />
            <Cell value={display(boardArr[5])} />
          </tr>
          <tr>
            <Cell value={display(boardArr[6])} />
            <Cell value={display(boardArr[7])} />
            <Cell value={display(boardArr[8])} />
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Board;