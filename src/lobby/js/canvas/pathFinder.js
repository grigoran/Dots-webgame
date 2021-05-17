import { Vector } from "./vector.js";
import * as pathWorker from "./pathWorker.js";
import { player } from "../welcome-form.js";

let dotArr = {};
let startPos = new Vector();
let color = "";
let candidatePaths = [];
let connectedDots = []; //count of connected dots for each canditate path

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

//find condidates with minimal connected nodes
function filterCanditates() {
  let result = [];
  let min = connectedDots[0];
  for (let val of connectedDots) {
    if (val < min) min = val;
  }
  for (let i = 0; i < connectedDots.length; i++) {
    if (connectedDots[i] == min) result.push(candidatePaths[i]);
  }
  return result;
}

let findPath = function (pos) {
  return new Promise((resolve, reject) => {
    startPos = new Vector(pos.x, pos.y);
    color = dotArr.getColor(pos);
    candidatePaths = [];
    connectedDots = [];
    let result = [];
    recurcivePath(startPos, [], startPos, 0);
    if (candidatePaths.length > 0) {
      //candidatePaths = filterCanditates();
      let pathIndex = pathWorker.maxAreaIndex(candidatePaths);
      if (pathIndex >= 0) {
        result = [...candidatePaths[pathIndex]];
        markDotsAsConnected(result);
        result = pathWorker.simplifyPath(result);
        markDotsInsidePath(result);
      }
      resolve(result.path);
    } else resolve(result);
  });
};

function recurcivePath(pos, path, prevPos, connectedDotsCount) {
  let next;
  if (path.length != 0) dotArr.mark(pos);
  if (path.length != 0 && pos.x == startPos.x && pos.y == startPos.y) {
    candidatePaths.push([...path]);
    connectedDots.push(connectedDotsCount);
    dotArr.unmark(pos);
    return;
  }

  path.push(pos);
  for (let i = 0; i < 8; i++) {
    next = nextPos(i, pos);
    if (!next || (next.x == prevPos.x && next.y == prevPos.y)) continue;
    if (
      dotArr.getColor(next) == color &&
      !dotArr.isInside(next) &&
      !dotArr.isMarked(next)
    ) {
      recurcivePath(
        next,
        [...path],
        pos,
        dotArr.isConnected(pos) ? connectedDotsCount + 1 : connectedDotsCount
      );
    }
  }
  dotArr.unmark(pos);
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
  let localPlayer = color == player.local.color;
  for (let i = polygon.bounding.min.x; i < polygon.bounding.max.x; i++) {
    for (let j = polygon.bounding.min.y; j < polygon.bounding.max.y; j++) {
      pos.x = i;
      pos.y = j;
      let nowColor = dotArr.getColor(pos);
      if (dotArr.isConnected(pos) && nowColor == color) continue;
      if (pathWorker.isInsidePath(polygon.path, pos)) {
        if (nowColor != color && nowColor != "" && !dotArr.isInside(pos)) {
          localPlayer ? (player.local.score += 1) : (player.remote.score += 1);
        }
        dotArr.markInside(pos);
        //dotArr.setColor(pos, "white");
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
