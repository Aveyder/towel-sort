
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix) return [];

  const result = [];

  for (let i = 0; i < matrix.length; i++) {
      let list;
      if (i % 2 !== 0) {
          list = matrix[i].reverse();
      } else {
          list = matrix[i];
      }
      for (let j = 0; j < list.length; j++) {
          result.push(list[j]);
      }
  }
  return result;
}
