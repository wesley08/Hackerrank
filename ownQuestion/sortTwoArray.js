const sortTwoArray = (a, b) => {
  if (a.length <= 1) return a;

  let temp = a[0];
  let left = [];
  let right = [];

  for (let i = 1; i < a.length; i++) {
    if (a[i] > temp) right.push(a[i]);
    else left.push(a[i]);

    if (b.length)
      if (b[i] > temp) right.push(b[i]);
      else left.push(b[i]);
  }

  return sortTwoArray(left, []).concat(temp, sortTwoArray(right, []));
};

console.log(sortTwoArray([5, 3, 7, 1, 8], [2, 5, 1, 3, 9]));

const reverseNumber = (num) => {
  const length = Math.ceil(Math.log10(num + 1));
  let temp = 0;
  for (let i = 1; i < length + 1; i++) {
    let getnum = num % Math.pow(10, i);
    num -= getnum;
    temp += Math.pow(10, length - i + 1) * (getnum / Math.pow(10, i));
  }

  return temp;
};

console.log(reverseNumber(1223));
console.log(reverseNumber(34324));
console.log(reverseNumber(65463));

const checkNumber = (num) => {
  const length = Math.ceil(Math.log10(num + 1));
  const a = [];

  for (let i = 1; i < length + 1; i++) {
    let getnumFirst = num % Math.pow(10, i);
    num -= getnumFirst;
    a.push(getnumFirst / Math.pow(10, i - 1));
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] != a[a.length - i - 1]) return false;
  }
  return true;
};

console.log(checkNumber(121));
console.log(checkNumber(11211));
