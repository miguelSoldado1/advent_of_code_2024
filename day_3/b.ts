import { readFile } from "node:fs/promises";

let input = await readFile("./day_3/input.txt", "utf8");

let count = 0;
let enabled = true;

while (true) {
  const start = input.indexOf("mul(");
  if (start === -1) break;

  if (input.indexOf("don't()") <= start && input.indexOf("don't()") > -1) enabled = false;
  else if (input.indexOf("do()") <= start && input.indexOf("do()") > -1) enabled = true;

  input = input.slice(start + 4);
  const end = input.indexOf(")");
  const arr = input.slice(0, end).split(",");

  if (arr.length === 2 && arr.every((item) => !isNaN(+item) && !item.includes(" ") && item.length <= 3) && enabled) {
    count += +arr[0] * +arr[1];
  }
}

console.log(count);
