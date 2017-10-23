import _ from 'lodash';
import won from './won';

function emptyIndices(board) {
  return board.filter(i => (typeof i === 'number'));
}

function minimax(currBoard, player) {
 let availableCells = emptyIndices(currBoard);
 let bestMove, moves = [];
 
 if (won(currBoard, "X")) {
   return { score: -10 };
 } else if (won(currBoard, "O")) {
   return { score: 10 };
 }
 
 if (!availableCells.length) {
  return { score: 0 };
 }
 
 availableCells.forEach(cell => {
  let move = {};
  move.index = currBoard[cell];
  currBoard[cell] = player;
  
  if (player === "O") {
    let result = minimax(currBoard, "X");
    move.score = result.score;
  } else {
    let result = minimax(currBoard, "O");
    move.score = result.score;
  }

  currBoard[cell] = move.index;
  moves.push(move);
 });

 bestMove = player === "O" ? _.maxBy(moves, 'score') 
  : _.minBy(moves, 'score');

  return bestMove;
}

export default minimax;