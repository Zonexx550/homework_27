document.getElementById("taskFirstBtn").addEventListener("click", function () {
  const numberPower = (num, power) => Math.pow(num, power);
  
  console.log(numberPower(2, 3)); 
  console.log(numberPower(5, 2));
});

document.getElementById("taskSecondBtn").addEventListener("click", function () {
  const getGcd = (a, b) => {
    if (b === 0) return a;
    return getGcd(b, a % b);
};

console.log(getGcd(44, 32));
console.log(getGcd(12, 18));
});

document.getElementById("taskThirdBtn").addEventListener("click", function () {
const maxDigit = (num) => {
  let max = 0;
  for (let digit of `${num}`) {
      if (digit > max) {
          max = digit;
      }
  } return max;
};

console.log(maxDigit(1273));
console.log(maxDigit(18276));
console.log(maxDigit(88976));
});

document.getElementById("taskForthBtn").addEventListener("click", function () {
  const isPrime = (num, divisor = 2) => {
    if (num <= 1) return false;
    if (divisor > Math.sqrt(num)) return true;
    if (num % divisor === 0) return false;
    return isPrime(num, divisor + 1);
};
  console.log(isPrime(2));
  console.log(isPrime(3));
  console.log(isPrime(4));
  console.log(isPrime(5));
  console.log(isPrime(6));
  console.log(isPrime(7));
});

document.getElementById("taskFifthBtn").addEventListener("click", function () {
const checkAge = (age, callback) => {
  if (age >= 18) {
      callback("Доступ разрешён");
  } else {
      callback("Доступ запрещён");
  }
};

checkAge(24, (status) => {
  console.log(status);
});

checkAge(14, (status) => {
  console.log(status);
});
});

document.getElementById("taskSixBtn").addEventListener("click", function () {
  const isPalindrome = (str) => {
    const checkStr = str.toLowerCase();
    const reverseStr = checkStr.split('').reverse().join('');
    return checkStr === reverseStr;
};

console.log(isPalindrome("RaCeCar"));
console.log(isPalindrome("RaCeCarR"));
console.log(isPalindrome("MaDaM"));
console.log(isPalindrome("MaDDaM"));
console.log(isPalindrome("hello"));
});

document.getElementById("taskSevenBtn").addEventListener("click", function () {
  const fibonacci = (n) => {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
  };

console.log(fibonacci(3));
console.log(fibonacci(6));
console.log(fibonacci(10));
console.log(fibonacci(1));
});