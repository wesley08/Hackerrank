export const staircase = (n) => {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "#".repeat(i + 1));
  }
};

export const staircaseLoop = (n) => {
  for (let i = 0; i < n; i++) {
    let temp = "";
    for (let j = 1; j <= n; j++) {
      if (n - i <= j) temp += "#";
      else temp += " ";
    }
    console.log(temp);
  }
};
