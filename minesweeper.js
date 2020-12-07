document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {cells: [
    {
      row: 0,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    },
    {
      row: 2,
      col: 2,
      isMine: true,
      isMarked: false,
      hidden: true,
      surroundingMines: 0
    }
  ]
};

function startGame () {
  document.addEventListener("click", checkForWin);
  document.addEventListener("contextmenu", checkForWin);
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);
  }
  // Don't remove this function call: it makes the game work!
  lib.initBoard()
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?

function checkForWin () {
  let bombsNumber = 0;
  let markedBombs = 0;
  let notBombsNumber = 0;

  for (let i = 0; i < board.cells.length; i++) {
    if (board.cells[i].isMine === true) {
      bombsNumber += 1;
    }

    if (board.cells[i].isMine === true && board.cells[i].isMarked === true) {
      markedBombs += 1;
    }

    if (board.cells[i].isMine === false && board.cells[i].hidden === false && board.cells[i].isMarked === false) {
      notBombsNumber += 1;
    }

    if (board.cells[i].isMine === true && board.cells[i].hidden === false) {
      lib.displayMessage("Boom!");
      break;
    }
  }

  if (bombsNumber === markedBombs && notBombsNumber === board.cells.length - bombsNumber) {
    lib.displayMessage("You win!");
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`:
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  let count = 0;
  let surroundingCells = lib.getSurroundingCells(cell.row, cell.col);
  for (let i = 0; i < surroundingCells.length; i++) {
    if (surroundingCells[i].isMine === true) {
      count += 1;
    }
  }
  return cell.surroundingMines = count;
}

