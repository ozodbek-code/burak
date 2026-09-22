function getSquareNumbers(numbers: number[]) {
  return numbers.map(number => ({
    number: number,
    square: number ** 2
  }));
}
console.log(getSquareNumbers([4, 6, 1, 9,23]));