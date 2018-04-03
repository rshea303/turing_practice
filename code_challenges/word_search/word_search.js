const wordExists = (board, word) => {
  let visited = new Set();
  let pointer = 0;
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[0].length; col++) {
      if (checkNeighbors(board, word, row, col, pointer, visited)) {
        return true;
      }
    }
  }
  return false;
};

const checkNeighbors = (board, word, row, col, pointer, visited) => {
  const location = `${row}${col}`;
  if (pointer === word.length) return true;
  if (row < 0 || row >= board.length ||
      col < 0 || col >= board[0].length ||
      visited.has(location) ||
      board[row][col] !== word.charAt(pointer)) return false;

  visited.add(location);

  // look right
  if (checkNeighbors(board, word, row, col+1, pointer+1, visited)) {
    return true;
  };
  // look left
  if (checkNeighbors(board, word, row, col-1, pointer+1, visited)) {
    return true;
  };
  // look up
  if (checkNeighbors(board, word, row-1, col, pointer+1, visited)) {
    return true;
  };
  // look down
  if (checkNeighbors(board, word, row+1, col, pointer+1, visited)) {
    return true;
  };

  return false;
};

const board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

// word = 'ABCCED' => true
// word = 'ECBFCS' => true
// word = 'SEE' => true
// word = 'ABCB' => false
// word = 'SFCD' => false
