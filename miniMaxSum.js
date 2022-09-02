export const miniMaxSum = (arr) => {
  arr.sort();
  let totalValueArray = 0;
  for (const items of arr) {
    totalValueArray += items;
  }
  console.log(totalValueArray - arr[arr.length - 1], totalValueArray - arr[0]);
};
