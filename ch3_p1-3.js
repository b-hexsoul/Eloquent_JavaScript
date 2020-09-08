//recreate you own Math.min

const min = function (a, b) {
  if (a >= b) {
    return b;
  } else {
    return a;
  }
};

// Recursion practice - create a function isEven

const isEven = function (n) {
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  } else if (n < 0) {
    return isEven(n * -1 - 2);
  } else {
    return isEven(n - 2);
  }
};

//Create a function called countChar that takes two arguments
const countChar = function (str, char) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      counter++;
    }
  }
  return counter;
};
