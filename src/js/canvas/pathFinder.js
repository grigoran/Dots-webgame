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
    let pathIndex = maxAreaIndex(candidatePaths);
    let result = [];
    if (pathIndex >= 0) {
      result = [...candidatePaths[pathIndex]];
      markDotsAsConnected(result);
    }
    return result;
  } else return [];
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
    if (next.x == prevPos.x && next.y == prevPos.y) continue;
    if (
      dotArr.getColor(next) == color &&
      !dotArr.isConnected(next) &&
      !findInLastFour(path, next)
    ) {
      recurcivePath(next, [...path], pos);
    }
  }
}

function findInLastFour(path, pos) {
  for (let i = path.length - 1; i >= 1; --i) {
    if (pos.x == path[i].x && pos.y == path[i].y) {
      return true;
    }
  }
  return false;
}

function maxAreaIndex(paths) {
  let nowArea = 0;
  let maxNodes = 0;
  let insideNodes = 0;
  let indexes = [];
  let areas = [];
  for (let i = 0; i < paths.length; i++) {
    nowArea = findArea(paths[i]);
    if (nowArea <= 0) continue;
    insideNodes = nowArea - paths[i].length / 2 + 1; //формула пика
    if (insideNodes <= 0) continue;
    if (insideNodes > maxNodes) {
      maxNodes = insideNodes;
      indexes = [i];
      areas = [nowArea];
    } else if (insideNodes == maxNodes) {
      indexes.push(i);
      areas.push(nowArea);
    }
  }

  if (maxNodes == 0) return -1;
  if (indexes.length < 1) return -1;
  let minArea = areas[0];
  let resIndex = indexes[0];
  for (let i = 1; i < indexes.length; i++) {
    if (areas[i] < minArea) {
      resIndex = indexes[i];
      minArea = areas[i];
    }
  }
  console.log(findArea(paths[resIndex]) - paths[resIndex].length / 2 + 1);
  console.log(resIndex);
  console.log(indexes);
  return resIndex;
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

function markDotsAsConnected(path) {
  for (let pos of path) {
    dotArr.connect(pos);
  }
}

let PathFinder = function () {
  this.assignArr = function (arr) {
    dotArr = arr;
  };
  this.findPath = findPath;
};
export let pathFinder = new PathFinder();
