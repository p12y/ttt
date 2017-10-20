import _ from 'lodash';

function won(board, player) {
  let winningCombos = [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],
    [1,4,7],[2,5,8],[0,4,8],[2,4,6]
  ];

  return winningCombos.some(el => {
    return board[el[0]] === player && 
           board[el[1]] === player && 
           board[el[2]] === player;
  });
}

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

 bestMove = player === "O" ? _.maxBy(moves, o => o.score) 
  : _.minBy(moves, o => o.score);

  return bestMove;
}

export default minimax;