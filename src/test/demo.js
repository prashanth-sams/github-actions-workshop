// print binary algorithm in javascript
function printBinary(n) {
  let binary = [];
  while (n !== 0) {
    binary.push(n % 2);
    n = Math.floor(n / 2);
  }
  return binary.reverse().join('');
}

// print binary algorithm in javascript
function printBinary(n) {
  return n.toString(2);
}

// print binary algorithm in javascript
function printBinary(n) {
  return n.toString(2).split('').reverse().join('');
}
