import { Vector } from "./vector.js";
import * as pathWorker from "./pathWorker.js";

let dotArr = {};
let startPos = new Vector();
let color = "";
let candidatePaths = [];

function nextPos(dir, pos) {
  let newPos;
  switch (dir) {
    case 0:
      newPos = new Vector(pos.x + 1, pos.y);
      break;
    case 1:
      newPos = new Vector(pos.x + 1, pos.y + 1);
      break;
    case 2:
      newPos = new Vector(pos.x, pos.y + 1);
      break;
    case 3:
      newPos = new Vector(pos.x - 1, pos.y + 1);
      break;
    case 4:
      newPos = new Vector(pos.x - 1, pos.y);
      break;
    case 5:
      newPos = new Vector(pos.x - 1, pos.y - 1);
      break;
    case 6:
      newPos = new Vector(pos.x, pos.y - 1);
      break;
    case 7:
      newPos = new Vector(pos.x + 1, pos.y - 1);
      break;
  }
  if (
    newPos.x < 0 ||
    newPos.x >= dotArr.size.x ||
    newPos.y < 0 ||
    newPos.y >= dotArr.size.y
  )
    return undefined;
  return newPos;
}

let findPath = function (pos) {
  return new Promise((resolve, reject) => {
    startPos = new Vector(pos.x, pos.y);
    color = dotArr.getColor(pos);
    candidatePaths = [];
    recurcivePath(startPos, [], startPos);
    if (candidatePaths.length > 0) {
      let pathIndex = pathWorker.maxAreaIndex(candidatePaths);
      let result = [];
      if (pathIndex >= 0) {
        result = [...candidatePaths[pathIndex]];
        markDotsAsConnected(result);
        result = pathWorker.simplifyPath(result);
        markDotsInsidePath(result);
      }
      resolve(result.path);
    } else resolve([]);
  });
};

/*В этом алгоритме присутствует проверка 3х последних эллементво во избеании замыкания*/
function recurcivePath(pos, path, prevPos) {
  let next;
  if (path.length != 0 && pos.x == startPos.x && pos.y == startPos.y) {
    candidatePaths.push([...path]);
    return;
  }
  path.push(pos);
  for (let i = 0; i < 8; i++) {
    next = nextPos(i, pos);
    if (!next || (next.x == prevPos.x && next.y == prevPos.y)) continue;
    if (
      dotArr.getColor(next) == color &&
      !dotArr.isConnected(next) &&
      !dotArr.isInside(next) &&
      !pathWorker.findIntersects(path, next)
    ) {
      recurcivePath(next, [...path], pos);
    }
  }
}

function markDotsAsConnected(path) {
  for (let pos of path) {
    dotArr.connect(pos);
  }
}

//IMPORTANT in this function, path is object with boundings and optimized path fields
function markDotsInsidePath(polygon) {
  let pos = new Vector();
  let color = dotArr.getColor(polygon.path[0]);
  for (let i = polygon.bounding.min.x; i < polygon.bounding.max.x; i++) {
    for (let j = polygon.bounding.min.y; j < polygon.bounding.max.y; j++) {
      pos.x = i;
      pos.y = j;
      if (dotArr.isConnected(pos)) continue;
      if (pathWorker.isInsidePath(polygon.path, pos)) {
        dotArr.markInside(pos);
      }
    }
  }
}

let PathFinder = function () {
  this.assignArr = function (arr) {
    dotArr = arr;
  };
  this.findPath = findPath;
};
export let pathFinder = new PathFinder();
