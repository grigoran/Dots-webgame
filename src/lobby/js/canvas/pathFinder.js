import { Vector } from "./vector.js";
import * as pathWorker from "./pathWorker.js";
import { player } from "../welcome-form.js";

let dotArr = {};
let startPos = new Vector();
let color = "";
let candidatePath = [];

let findPath = function (pos) {
  startPos = new Vector(pos.x, pos.y);
  color = dotArr.getColor(pos);
  candidatePath = [];
  recurcivePath(startPos, [], 0);
  if (candidatePath.length > 3) {
    candidatePath = pathWorker.simplifyPath(candidatePath);
    return candidatePath;
  } else return { path: [] };
};

//pos-current dot pos, path-current path, backdir-dir to prev dot
function recurcivePath(pos, path, backdir) {
  let next;
  if (path.length != 0) dotArr.mark(pos);
  if (path.length != 0 && pos.x == startPos.x && pos.y == startPos.y) {
    candidatePath = [...path];
    dotArr.unmark(pos);
    return true;
  }

  path.push(pos);
  let dir = 0;
  for (let i = 0; i < 8; i++) {
    dir = (backdir + 2 + i) % 8;
    next = dotArr.nextPos(dir, pos);
    if (
      !dotArr.isMarked(next) &&
      dotArr.getColor(next) == color &&
      !dotArr.isInside(next) &&
      recurcivePath(next, [...path], (dir + 4) % 8)
    ) {
      dotArr.unmark(pos);
      return true;
    }
  }
  dotArr.unmark(pos);
  return false;
}

//IMPORTANT in this function, path is object with boundings and optimized path fields
function markDotsInsidePath(polygon) {
  let pos = new Vector();
  let color = dotArr.getColor(polygon.path[0]);
  let localPlayer = color == player.local.color;
  for (let i = 0; i < polygon.source.length; i++) {
    dotArr.mark(polygon.source[i]);
  }
  console.log(polygon.bounding);
  for (let i = polygon.bounding.min.x; i <= polygon.bounding.max.x; i++) {
    for (let j = polygon.bounding.min.y; j <= polygon.bounding.max.y; j++) {
      pos.x = i;
      pos.y = j;
      let nowColor = dotArr.getColor(pos);
      if (dotArr.isMarked(pos)) continue;
      if (pathWorker.isInsidePath(polygon.path, pos)) {
        if (nowColor != color && nowColor != "" && !dotArr.isInside(pos)) {
          localPlayer ? (player.local.score += 1) : (player.remote.score += 1);
        }
        dotArr.markInside(pos);
        //dotArr.setColor(pos, "white");
      }
    }
  }
  for (let i = 0; i < polygon.source.length; i++) {
    dotArr.unmark(polygon.source[i]);
  }
}

let PathFinder = function () {
  this.assignArr = function (arr) {
    dotArr = arr;
  };
  this.findPath = findPath;
  this.markInsideNodes = markDotsInsidePath;
};
export let pathFinder = new PathFinder();
