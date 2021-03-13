module.exports = function towelSort (matrix) {
  const arr = [];
  if (typeof(matrix) == 'undefined') {
    return arr;
  }
  const l = matrix.length;
  
  for (let i = 0; i < l; i++){
    if (i % 2 != 0) {
      matrix[i].reverse();
    }
  }  
  for (let i = 0; i < l; i++){
    for (let n = 0; n < matrix[i].length; n++) {    
      arr.push(matrix[i][n]);    
   }
  }
  return arr;
}
