/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  let max = [];
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0 || arr[i] === arr[i - 1]) {
      result.push(arr[i]);
    } else {
      if (result.length > max.length) {
        max = result;
      }
      result = [arr[i]];
    }
  }
  if (result.length > max.length) {
    max = result;
  }
  return max;
};
