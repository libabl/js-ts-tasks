/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */
module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function Prime(num) {
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
  return function (start, end) {
    const prime1 = [];
    for (let i = start; i <= end; i += 1) {
      if (Prime(i)) {
        prime1.push(i);
      }
    }
    return prime1;
  };
};

