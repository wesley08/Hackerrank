const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    const temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

console.log(selectionSort([3, 5, 7, 1, 2]));

let a = 10;
let b = 2;
a = a + b;
b = a - b;
a = a - b;

console.log(a, b);
