export const birthdayCakeCandles = (arr) => {
  arr.sort((a, b) => b - a);

  let result = 1;
  let i = 0;

  while (arr[i] == arr[i + 1]) {
    result += 1;
    i++;
  }
  console.log(result);
};

export const birthdayCakeCandlesTwo = (candles) => {
  let temp = [];
  for (const candle of candles) {
    if (temp[candle]) {
      temp[candle] += 1;
    } else {
      temp[candle] = 1;
    }
  }
  temp.sort((a, b) => b - a);
  console.log(temp[0]);
};
