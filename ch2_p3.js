const gridPrinter = (x, y) => {
  let gridPrint = "";
  // Run through Y Axis
  for (let i = 0; i < y; i++) {
    // Form the X Axis
    for (let j = 0; j < x; j++) {
      //Is the row 0 or even?
      if (i % 2 == 0) {
        if (j % 2 == 0) {
          gridPrint += " ";
        } else {
          gridPrint += "#";
        }
        // Odd rows
      } else {
        if (j % 2 == 0) {
          gridPrint += "#";
        } else {
          gridPrint += " ";
        }
      }
    }
    //After completing a row add a newline
    gridPrint += "\n";
  }
  //End of program print the grid
  console.log(gridPrint);
};

gridPrinter(20, 3);
