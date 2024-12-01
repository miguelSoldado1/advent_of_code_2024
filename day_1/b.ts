import { readFile } from "node:fs/promises";

const input = await readFile("./day_1/input.txt", "utf8");
const lines = input.split("\r\n");

const left = lines.map((line) => line.split("   ")[0]).map((str) => parseInt(str));
const right = lines.map((line) => line.split("   ")[1]).map((str) => parseInt(str));
let sum = 0;

for (let i = 0; i < left.length; i++) {
  const curr = left[i];

  const numOfRightOccurences = right.filter((num) => num === curr).length;

  sum += curr * numOfRightOccurences;
}

console.log(sum);
