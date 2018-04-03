const exitMaze = maze => {
  let size = maze.length;
  let startRow = 0;
  let startCol = 0;
  let solution = new Set();

  if (checkNeighbors(maze, startRow, startCol, solution, size)) {
    return true;
  };

  return false;
}

const checkNeighbors = (maze, row, col, solution, size) => {
  let location = `${row}${col}`;

  if (solution.has('33')) return true;

  if (row < 0 ||
      col < 0 ||
      row >= size ||
      col >= size ||
      maze[row][col] === 0) return false;

  solution.add(location);

  //check right
  if (checkNeighbors(maze, row, col+1, solution, size)) {
    return true;
  }

  //check down
  if (checkNeighbors(maze, row+1, col, solution, size)) {
    return true;
  }

  return false;
}

const display = (solution, size) => {
   return 'hello';
}

const maze =
[
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [0, 1, 0, 0],
  [1, 1, 1, 1],
];

console.log(exitMaze(maze));