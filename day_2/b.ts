import { readFile } from "node:fs/promises";

const input = await readFile("./day_2/input.txt", "utf8");
const lines = input.split("\r\n");
const numLines = lines.map((line) => line.split(" ").map((num) => parseInt(num)));

let count = 0;

outer: for (const line of numLines) {
  for (let removeIndex = -1; removeIndex < line.length; removeIndex++) {
    const testLine = removeIndex === -1 ? line : [...line.slice(0, removeIndex), ...line.slice(removeIndex + 1)];

    const isDecreasing = testLine[0] > testLine[1];
    let isSafe = true;

    for (let i = 0; i < testLine.length - 1; i++) {
      const [first, second] = [testLine[i], testLine[i + 1]];

      if (first === second || Math.abs(first - second) > 3 || first > second !== isDecreasing) {
        isSafe = false;
        break;
      }
    }

    if (isSafe) {
      count++;
      continue outer;
    }
  }
}

console.log(count);
