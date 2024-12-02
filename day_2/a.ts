import { readFile } from "node:fs/promises";

const input = await readFile("./day_2/input.txt", "utf8");
const lines = input.split("\r\n");

const numLines = lines.map((line) => line.split(" ").map((num) => parseInt(num)));

let count = 0;

outer: for (const line of numLines) {
  if (line[0] === line[1] || Math.abs(line[0] - line[1]) > 3) {
    continue outer;
  }

  const isDecreasing = line[0] > line[1];
  for (let i = 1; i < line.length - 1; i++) {
    const [first, second] = [line[i], line[i + 1]];
    if (first === second || first > second !== isDecreasing || Math.abs(first - second) > 3) {
      continue outer;
    }
  }

  count++;
}

console.log(count);
