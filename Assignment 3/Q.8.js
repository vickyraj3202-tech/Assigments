function repeatedSum(num) {
  num = Math.abs(num);

  while (num >= 10) {
    let sum = 0;

    while (num > 0) {
      sum += num % 10;           // Get the last digit
      num = Math.floor(num / 10); // Remove the last digit
    }

    num = sum;
  }

  return num;
}

console.log(repeatedSum(456)); // 6
console.log(repeatedSum(999)); // 9
console.log(repeatedSum(0));   // 0