module.exports = function towelSort (matrix) {
  let arr = [];
  if (typeof(matrix) == 'undefined') {
    return arr;
  }
  let l = matrix.length;
  
  for (let i = 0; i < l; i++){
    if (i % 2 != 0) {
      matrix[i].reverse();
    }
  }  
  for (let i = 0; i < l; i++){
    for (n = 0; n < matrix[i].length; n++) {    
      arr.push(matrix[i][n]);    
   }
  }
  return arr;
}
