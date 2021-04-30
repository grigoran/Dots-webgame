import { Vector } from "./vector.js";

let dotsArr = [];
let startPos = new Vector();
let color = "";
let paths = [];

export let assignDotsArr = function (arr) {
  dotsArr = arr;
};

function nextPos(dir, pos) {
  let newPos = {};
  switch (dir) {
    case 0:
      return new Vector(pos.x + 1, pos.y);
    case 1:
      return new Vector(pos.x + 1, pos.y + 1);
    case 2:
      return new Vector(pos.x, pos.y + 1);
    case 3:
      return new Vector(pos.x - 1, pos.y + 1);
    case 4:
      return new Vector(pos.x - 1, pos.y);
    case 5:
      return new Vector(pos.x - 1, pos.y - 1);
    case 6:
      return new Vector(pos.x, pos.y - 1);
    case 7:
      return new Vector(pos.x + 1, pos.y - 1);
  }
}

export function findPath(pos) {
  startPos = new Vector(pos.x, pos.y);
  color = dotsArr[pos.x][pos.y];
  recurcivePath(startPos, 0, [], startPos);
  if (paths.length >= 1) console.log(paths);
}

function recurcivePath(pos, index, path, prevPos) {
  let next;
  if (index != 0 && pos.x == startPos.x && pos.y == startPos.y) {
    paths.push([...path]);
    return;
  }
  path.push(pos);
  for (let i = 0; i < 8; i++) {
    next = nextPos(i, pos);
    if (next.x == prevPos.x && next.y == prevPos.y) continue;
    if (dotsArr[next.x][next.y] == color) {
      recurcivePath(next, ++index, [...path], pos);
    }
  }
}
