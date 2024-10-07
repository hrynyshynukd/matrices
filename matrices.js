function multiplyMatrices(matrixA, matrixB) {
  const rowsA = matrixA.length;
  const colsA = matrixA[0].length;
  const rowsB = matrixB.length;
  const colsB = matrixB[0].length;

  if (colsA !== rowsB) {
    return "Матриці не узгоджені для множення.";
  }

  let result = [];
  for (let i = 0; i < rowsA; i++) {
    result[i] = [];
    for (let j = 0; j < colsB; j++) {
      result[i][j] = 0; 
      for (let k = 0; k < colsA; k++) {
        result[i][j] += matrixA[i][k] * matrixB[k][j];
      }
    }
  }

  return result;
}


let A = [
  [3, 1, 2],
  [5, 4, 5]
];

let B = [
  [4, 2],
  [1, 3],
  [5, 4]
];


let productAB = multiplyMatrices(A, B);
console.log("A * B =");
console.table(productAB);


