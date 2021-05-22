import { Vector } from "./vector";
import { isInsidePath } from "./pathWorker.js";
import { pathFinder } from "./pathFinder.js";
let dotArr = {};

let TOP_ID_VALUE = 0; //every group creation increase this value by 1

//object, that contain group information
function Group(pos, id, color) {
  dotArr.setGroup(pos, id);
  this.id = id;
  this.color = color;
  this.bounding = {
    begin: new Vector(pos.x, pos.y),
    end: new Vector(pos.x, pos.y),
  };
  this.push = (pos) => {
    dotArr.setGroup(pos, this.id);
    //update bounding
    if (pos.x > this.bounding.end.x) this.bounding.end.x = pos.x;
    if (pos.y > this.bounding.end.y) this.bounding.end.y = pos.y;
    if (pos.x < this.bounding.begin.x) this.bounding.begin.x = pos.x;
    if (pos.y < this.bounding.begin.y) this.bounding.begin.y = pos.y;
  };
  this.unify = (otherGroup) => {
    let bound = otherGroup.bounding;
    for (let i = bound.begin.x; i <= bound.end.x; i++) {
      for (let j = bound.begin.y; j <= bound.end.y; j++) {
        let pos = { x: i, y: j };
        if (dotArr.getGroup(pos) == otherGroup.id) this.push(pos);
      }
    }
  };
}

//array of Group objects
function GroupArr() {
  this.arr = {};
  this.createGroup = (pos, color) => {
    this.arr[TOP_ID_VALUE] = new Group(pos, TOP_ID_VALUE, color);
    TOP_ID_VALUE += 1;
  };
  this.addToGroup = (pos, id) => {
    this.arr[id].push(pos);
  };
  this.unify = (first, second) => {
    if (first > second) {
      let tmp = first;
      first = second;
      second = tmp;
    }
    this.arr[first].unify(this.arr[second]);
    delete this.arr[second];
  };
  this.getBounding = (id) => {
    return this.arr[id].bounding;
  };
  this.getColor = (id) => {
    return this.arr[id].color;
  };
}
let groups = new GroupArr();

function checkConnection(pos, color) {
  //id точки, которую только что поставили, всегда равен -1. Но может случится такое,
  //что при прохождении данного цикла, точка будет попадать сразу в две группы и именно поэтому,
  //мы проверяем наличие точки в группе несмотря на то, что мы ее только поставили.
  //id of recently placed dot always equal to -1. But if dot included in several groups, this id may be different.
  let id = dotArr.getGroup(pos);
  for (let i = 0; i < 8; i++) {
    let nextPos = dotArr.nextPos(i, pos);
    if (!nextPos) continue;
    let nextId = dotArr.getGroup(nextPos);
    id = dotArr.getGroup(pos);
    if (!dotArr.isInside(nextPos) && dotArr.getColor(nextPos) == color) {
      if (id == -1) {
        groups.addToGroup(pos, nextId);
      } else if (id != nextId) {
        groups.unify(id, nextId);
      }
    }
  }
  //if id not changed, create group
  if (id == -1) {
    groups.createGroup(pos, color);
  }
  return dotArr.getGroup(pos);
}

function getUnderDot(id, pos, ymax) {
  for (let i = pos.y; i <= ymax; i++) {
    let newPos = { x: pos.x, y: i };
    if (!dotArr.isInside(newPos) && dotArr.getGroup(newPos) == id)
      return newPos;
  }
  return false;
}

function findZones(id) {
  let bound = groups.getBounding(id);
  let color = groups.getColor(id);
  for (let i = bound.begin.x + 1; i < bound.end.x; i++) {
    for (let j = bound.begin.y + 1; j < bound.end.y; j++) {
      let nowPos = { x: i, y: j };
      let nowColor = dotArr.getColor(nowPos);
      if (nowColor != "" && nowColor != color && !dotArr.isInside(nowPos)) {
        let underPos = getUnderDot(id, nowPos, bound.end.y);
        if (!underPos) continue;
        let polygon = pathFinder.findPath(underPos);
        if (polygon.path.length > 0 && isInsidePath(polygon.path, nowPos)) {
          pathFinder.markInsideNodes(polygon);
          return polygon.path;
        }
      }
    }
  }
  return [];
}

function addDot(pos) {
  let color = dotArr.getColor(pos);
  let id = checkConnection(pos, color); //check inclusion into the group
  let path = findZones(id, color);
  return path;
}

let DotGroups = function () {
  this.assignArr = function (arr) {
    dotArr = arr;
  };
  this.addDot = addDot;
};
export let dotGroups = new DotGroups();
