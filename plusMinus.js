export const plusMinus = (arr) => {
  let positive = 0,
    negative = 0,
    netral = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) negative += 1;
    if (arr[i] > 0) positive += 1;
    if (arr[i] == 0) netral += 1;
  }

  console.log(positive / arr.length);
  console.log(negative / arr.length);
  console.log(netral / arr.length);
};
