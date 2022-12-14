export const binarySearch = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.round((left + right) / 2);
    if (arr[mid] == target) return mid;
    else if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }
  return -1;
};

console.log(binarySearch([1, 3, 5, 6, 7, 7, 9], 1));
