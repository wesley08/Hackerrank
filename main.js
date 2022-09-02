import { binarySearch } from "./Algorithms/binarySearch.js";
import { insertionSort } from "./Algorithms/insertionSort.js";
import { quickSort } from "./Algorithms/quickSort.js";
import {
  birthdayCakeCandles,
  birthdayCakeCandlesTwo,
} from "./birthdayCakeCandles.js";
import { diagonalDifferent } from "./diagonalDifferent.js";
import { miniMaxSum } from "./miniMaxSum.js";
import { plusMinus } from "./plusMinus.js";
import { staircase, staircaseLoop } from "./staircase.js";

// diagonalDifferent([
//   [11, 2, 4],
//   [4, 5, 6],
//   [10, 8, -12],
// ]);
// plusMinus([-4, 3, -9, 0, 4, 1]);
// staircase(6);
// staircaseLoop(6);
// miniMaxSum([1, 2, 3, 4, 5]);
// birthdayCakeCandles([5, 1, 2, 3, 4, 5, 5, 5, 5]);
// birthdayCakeCandlesTwo([1, 2, 3, 3, 1, 3, 4, 5, 5, 5, 5]);
console.log(binarySearch([1, 2, 2, 5, 6, 7, 8, 10], 7));
console.log(quickSort([5, 2, 6, 1, 9]));
insertionSort([5, 2, 6, 1, 9]);
