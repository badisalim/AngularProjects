const _board = [
  [0, 0, 1, 0, 0, 8, 0, 0, 5],
  [0, 2, 4, 0, 0, 0, 0, 9, 0],
  [6, 5, 9, 0, 3, 2, 0, 0, 0],
  [0, 0, 0, 2, 0, 0, 1, 0, 8],
  [0, 0, 6, 0, 1, 0, 9, 0, 0],
  [4, 0, 7, 0, 0, 6, 0, 0, 0],
  [0, 0, 0, 3, 6, 0, 2, 8, 1],
  [0, 6, 0, 0, 0, 0, 3, 4, 0],
  [1, 0, 0, 8, 0, 0, 7, 0, 0]
];

const isValid=(board, row, col, k) =>{
  for (let i = 0; i < 9; i++) {
      const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const n = 3 * Math.floor(col / 3) + i % 3;
      if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
        return false;
      }
  }
  return true;
}

const solveSudoku=(data) =>{
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    if (data[i][j] == 0) {
      for (let k = 1; k <= 9; k++) {
        if (isValid(data, i, j, k)) {
          data[i][j] = `${k}`;
        if (solveSudoku(data)) {
         return true;
        } else {
         data[i][j] = 0;
        }
       }
     }
     return false;
   }
 }
}
return true;
}

solveSudoku(_board);
console.log(_board);



//  const _board = [
//       ['.', '.', '1', '.', '.', '8', '.', '.', '5'],
//       ['.', '2', '4', '.', '.', '.', '.', '9', '.'],
//       ['6', '5', '9', '.', '3', '2', '.', '.', '.'],
//       ['.', '.', '.', '2', '.', '.', '1', '.', '8'],
//       ['.', '.', '6', '.', '1', '.', '9', '.', '.'],
//       ['4', '.', '7', '.', '.', '6', '.', '.', '.'],
//       ['.', '.', '.', '3', '6', '.', '2', '8', '1'],
//       ['.', '6', '.', '.', '.', '.', '3', '4', '.'],
//       ['1', '.', '.', '8', '.', '.', '7', '.', '.'],
//   ];
  
//   const isValid=(board, row, col, k) =>{
//     for (let i = 0; i < 9; i++) {
//         const m = 3 * Math.floor(row / 3) + Math.floor(i / 3);
//         const n = 3 * Math.floor(col / 3) + i % 3;
//         if (board[row][i] == k || board[i][col] == k || board[m][n] == k) {
//           return false;
//         }
//     }
//     return true;
// }

// const solveSudoku=(data) =>{
//   for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//       if (data[i][j] == '.') {
//         for (let k = 1; k <= 9; k++) {
//           if (isValid(data, i, j, k)) {
//             data[i][j] = `${k}`;
//           if (solveSudoku(data)) {
//            return true;
//           } else {
//            data[i][j] = '.';
//           }
//          }
//        }
//        return false;
//      }
//    }
//  }
//  return true;
// }

// solveSudoku(_board);
// console.log(_board);



