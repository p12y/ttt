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

export default won;