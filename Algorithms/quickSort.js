export const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  let left = [];
  let right = [];
  let start = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > start) right.push(arr[i]);
    else left.push(arr[i]);
  }

  return quickSort(left).concat(start, quickSort(right));
};
