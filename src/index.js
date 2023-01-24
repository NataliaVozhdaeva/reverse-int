module.exports = function reverse(n) {
  let newNumber = n;

  if (n < 0) {
    newNumber = n * -1;
  }
  let arr = Array.from(newNumber.toString());

  return Number(arr.reverse().join(''));
};
