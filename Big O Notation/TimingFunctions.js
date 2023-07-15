//* https://rithmschool.github.io/function-timer-demo/
//? Programming way
function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();
console.log(`${(t2 - t1) / 1000} seconds`);

//? Mathimatical way
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

const t3 = performance.now();
addUpTo2(1000000000);
const t4 = performance.now();
console.log(`${(t4 - t3) / 1000} seconds`);
