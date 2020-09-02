//Problem says to make seven calls to output a triangle. This function lets you define how many calls

const theLoopingTriangle = (x) => {
  let text = "";
  for (let i = 0; i < x; i++) {
    text += "#";
    console.log(text);
  }
};

theLoopingTriangle(7);
