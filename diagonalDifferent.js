export const diagonalDifferent = (arr) => {
  let x = 0;
  let y = 0;

  for (let i = 0; i < arr.length; i++) {
    x += arr[i][i];
    y += arr[i][arr.length - i - 1];
  }

  console.log(Math.abs(x - y));
};
