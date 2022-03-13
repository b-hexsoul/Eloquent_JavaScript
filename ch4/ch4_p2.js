let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

// Write a function arrayToList that builds up a list structure like the one shown when given [1, 2, 3] as argument.
function arrayToList(arr) {
  let newList = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    newList = { value: arr[i], rest: newList };
  }

  return newList;
}

console.log(arrayToList([1, 2, 3]));
