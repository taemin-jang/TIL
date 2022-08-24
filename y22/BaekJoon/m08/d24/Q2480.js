// 2480번 주사위 세게

const [x, y, z] = require("fs")
  .readFileSync(0)
  .toString()
  .split(" ")
  .map((el) => parseInt(el));

if (x === y && y === z && x === z) {
  console.log(10000 + x * 1000);
} else if (x === y || y === z || x === z) {
  if (x === y) {
    console.log(1000 + x * 100);
  } else if (z === y) {
    console.log(1000 + y * 100);
  } else if (x === z) {
    console.log(1000 + z * 100);
  }
} else if (x !== y && y !== z && x !== z) {
  let max = x;
  if (max < y) {
    max = y;
  }
  if (max < z) {
    max = z;
  }
  console.log(max * 100);
}
