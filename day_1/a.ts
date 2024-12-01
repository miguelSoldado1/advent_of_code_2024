import { readFile } from "node:fs/promises";

const input = await readFile("./day_1/input.txt", "utf8");
const lines = input.split("\r\n");

const left = lines.map((line) => line.split("   ")[0]).map((str) => parseInt(str));
const right = lines.map((line) => line.split("   ")[1]).map((str) => parseInt(str));
let sum = 0;

while (left.length > 0 && right.length > 0) {
  const smallestLeft = left.reduce((a, b) => (a < b ? a : b));
  const smallestLeftPosition = left.indexOf(smallestLeft);

  const smallestRight = right.reduce((a, b) => (a < b ? a : b));
  const smallestRightPosition = right.indexOf(smallestRight);

  sum += Math.abs(smallestLeft - smallestRight);

  left.splice(smallestLeftPosition, 1);
  right.splice(smallestRightPosition, 1);
}

console.log(sum);
