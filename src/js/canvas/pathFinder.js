import { Vector } from "./vector.js";

let dotArr = {};
let startPos = new Vector();
let color = "";
let candidatePaths = [];

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

let findPath = function (pos) {
  startPos = new Vector(pos.x, pos.y);
  color = dotArr.getColor(pos);
  candidatePaths = [];
  recurcivePath(startPos, [], startPos);
  if (candidatePaths.length > 0) {
    return [...candidatePaths[maxAreaIndex(candidatePaths)]];
  } else return [];
};

function recurcivePath(pos, path, prevPos) {
  let next;
  if (path.length != 0 && pos.x == startPos.x && pos.y == startPos.y) {
    candidatePaths.push([...path]);
    return;
  }
  path.push(pos);
  for (let i = 0; i < 8; i++) {
    next = nextPos(i, pos);
    if (next.x == prevPos.x && next.y == prevPos.y) continue;
    if (dotArr.getColor(next) == color) {
      recurcivePath(next, [...path], pos);
    }
  }
}

function maxAreaIndex(paths) {
  let maxArea = 0;
  let nowArea = 0;
  let index = 0;
  for (let i = 0; i < paths.length; i++) {
    nowArea = findArea(paths[i]);
    if (nowArea > maxArea) {
      maxArea = nowArea;
      index = i;
    }
  }
  return index;
}

function findArea(path) {
  //формула Гаусса
  let area = 0;
  for (let i = 0; i < path.length; i++) {
    area += (path[i].x * path[(i + 1) % path.length].y) / 2;
    area -= (path[(i + 1) % path.length].x * path[i].y) / 2;
  }
  return area;
}

let PathFinder = function () {
  this.assignArr = function (arr) {
    dotArr = arr;
  };
  this.findPath = findPath;
};
export let pathFinder = new PathFinder();
