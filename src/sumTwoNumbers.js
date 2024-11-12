/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  let num1 = Number(firstNumber.toString().replace(/\s+/g, ""));
let num2 = Number(secondNumber.toString().replace(/\s+/g, ""));
let sum = num1 + num2;
return sum;
  throw new Error('Not implemented');
};
