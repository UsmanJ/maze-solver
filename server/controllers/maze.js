export let mazeArray;
export let rows;
export let cols;

export const setupMaze = mazeArr => {
  // return new Promise((resolve, reject) => {
  mazeArray = mazeArr;
  rows = mazeArray[0].length - 1;
  cols = mazeArray.length - 1;
  //   resolve();
  // });
};

export const solveMaze = (xVal, yVal) => {
  // return new Promise((resolve, reject) => {
  let solved = false;

  if (yVal < cols) {
    var right = mazeArray[xVal][yVal + 1];
  }
  if (yVal > 0) {
    var left = mazeArray[xVal][yVal - 1];
  }
  if (xVal > 0) {
    var up = mazeArray[xVal - 1][yVal];
  }
  if (xVal < rows) {
    var down = mazeArray[xVal + 1][yVal];
  }

  if (right == "G" || left == "G" || up == "G" || down == "G") {
    mazeArray[xVal][yVal] = "D";
    return mazeArray;
    // setTimeout(() => {
    //   console.log("will now resolve!");
    //   resolve(mazeArray);
    // }, 1000);
  }

  // if (mazeArray[xVal][yVal] === "G") {
  mazeArray[xVal][yVal] = "D";
  //   return mazeArray;
  // }

  if (right === "." && !solved) {
    solved = solveMaze(xVal, yVal + 1);
  }
  if (down == "." && !solved) {
    solved = solveMaze(xVal + 1, yVal);
  }
  if (left == "." && !solved) {
    solved = solveMaze(xVal, yVal - 1);
  }
  if (up == "." && !solved) {
    solved = solveMaze(xVal - 1, yVal);
  }
  if (!solved) {
    mazeArray[xVal][yVal] = ".";
  }
  return solved;
  // });
};
