// Write a range function that takes two arguments, start and end, and
// returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Run the example program and see whether it does indeed return 55.

function range(start, end) {
  if (start > end) return -1;
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
function sum(numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}

console.log(sum(range(1, 10)));
