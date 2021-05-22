import { canvas, ctx } from "./init-canvas.js";
import { pathFinder } from "./pathFinder.js";
import { dotGroups } from "./dotGroups.js";
import { Vector } from "./vector.js";

const TWO_PI = 2 * Math.PI;

function Dot() {
  this.color = "";
  this.connected = false;
  this.inside = false;
  this.marked = false;
  this.group = -1;
}

function getNextPos(dir, pos) {
  let newPos;
  switch (dir) {
    case 0:
      newPos = new Vector(pos.x + 1, pos.y);
      break;
    case 1:
      newPos = new Vector(pos.x + 1, pos.y - 1);
      break;
    case 2:
      newPos = new Vector(pos.x, pos.y - 1);
      break;
    case 3:
      newPos = new Vector(pos.x - 1, pos.y - 1);
      break;
    case 4:
      newPos = new Vector(pos.x - 1, pos.y);
      break;
    case 5:
      newPos = new Vector(pos.x - 1, pos.y + 1);
      break;
    case 6:
      newPos = new Vector(pos.x, pos.y + 1);
      break;
    case 7:
      newPos = new Vector(pos.x + 1, pos.y + 1);
      break;
  }
  return newPos;
}

function checkPos(pos, size) {
  if (!pos || pos.x < 0 || pos.x >= size.x || pos.y < 0 || pos.y >= size.y) {
    return false;
  }
  return true;
}

function DotArr(meshSize) {
  let arr = [];
  for (let i = 0; i < meshSize.x; i++) {
    arr[i] = [];
    for (let j = 0; j < meshSize.y; j++) {
      arr[i][j] = new Dot();
    }
  }
  this.size = meshSize;
  this.getColor = function (pos) {
    if (!checkPos(pos, this.size)) return "";
    return arr[pos.x][pos.y].color;
  };
  this.setColor = function (pos, color) {
    if (!checkPos(pos, this.size)) return;
    arr[pos.x][pos.y].color = color;
  };
  this.connect = function (pos) {
    if (!checkPos(pos, this.size)) return;
    arr[pos.x][pos.y].connected = true;
  };
  this.isConnected = function (pos) {
    if (!checkPos(pos, this.size)) return false;
    return arr[pos.x][pos.y].connected;
  };
  this.markInside = function (pos) {
    if (!checkPos(pos, this.size)) return;
    arr[pos.x][pos.y].inside = true;
  };
  this.isInside = function (pos) {
    if (!checkPos(pos, this.size)) return false;
    return arr[pos.x][pos.y].inside;
  };
  this.mark = function (pos) {
    if (!checkPos(pos, this.size)) return;
    arr[pos.x][pos.y].marked = true;
  };
  this.unmark = function (pos) {
    if (!checkPos(pos, this.size)) return;
    arr[pos.x][pos.y].marked = false;
  };
  this.isMarked = function (pos) {
    if (!checkPos(pos, this.size)) return false;
    return arr[pos.x][pos.y].marked;
  };
  this.setGroup = function (pos, id) {
    if (!checkPos(pos, this.size)) return;
    arr[pos.x][pos.y].group = id;
  };
  this.getGroup = function (pos) {
    if (!checkPos(pos, this.size)) -1;
    return arr[pos.x][pos.y].group;
  };
  this.nextPos = (dir, pos) => {
    let newPos = getNextPos(dir, pos);
    if (
      newPos.x < 0 ||
      newPos.x >= this.size.x ||
      newPos.y < 0 ||
      newPos.y >= this.size.y
    ) {
      return undefined;
    }
    return newPos;
  };
}

let dotArr = {};

class Dots {
  #step = 0;
  #size = {};
  #dotRadius = 8;
  #paths = [];
  constructor() {
    this.init = function (size, step) {
      this.#step = step;
      this.#size = size;
      dotArr = new DotArr(size);
      pathFinder.assignArr(dotArr);
      dotGroups.assignArr(dotArr);
    };
    this.push = function (pos, color) {
      if (dotArr.getColor(pos) != "" || dotArr.isInside(pos)) return false;
      dotArr.setColor(pos, color);
      let path = dotGroups.addDot(pos);
      //let path = pathFinder.findPath(pos);
      if (path.length > 0) this.#paths.push(path);
      return true;
    };
    this.drawPaths = function () {
      for (let i = 0; i < this.#paths.length; i++) {
        let path = this.#paths[i];
        ctx.beginPath();
        ctx.strokeStyle = dotArr.getColor(path[0]);
        //if (i == this.#paths.length - 1) ctx.strokeStyle = "white";
        ctx.lineWidth = 3;
        for (let pos of path) {
          ctx.lineTo(
            pos.x * this.#step + this.#step / 2,
            pos.y * this.#step + this.#step / 2
          );
        }
        ctx.closePath();
        ctx.stroke();
      }
    };
    this.fillPaths = function () {
      //fill paths
      for (let i = this.#paths.length - 1; i >= 0; i--) {
        let path = this.#paths[i];
        ctx.beginPath();
        ctx.fillStyle = getFillColor(dotArr.getColor(path[0]));
        for (let pos of path) {
          ctx.lineTo(
            pos.x * this.#step + this.#step / 2,
            pos.y * this.#step + this.#step / 2
          );
        }
        ctx.closePath();
        ctx.fill();
      }
    };
    this.drawDots = function () {
      for (let i = 0; i < this.#size.x; i++) {
        for (let j = 0; j < this.#size.y; j++) {
          let color = dotArr.getColor({ x: i, y: j });
          if (color == "") continue;
          ctx.beginPath();
          ctx.fillStyle = color;
          ctx.arc(
            i * this.#step + this.#step / 2,
            j * this.#step + this.#step / 2,
            this.#dotRadius,
            0,
            TWO_PI
          );
          ctx.fill();
        }
      }
    };
  }
}

function getFillColor(hex) {
  let opacity = 0.5;
  if (!hex) return "orange";
  let rgb = hex.match(/[a-f\d]{2}/gi);
  if (!rgb) return "orange";
  rgb = rgb.map((elem) => parseInt(elem, 16) * opacity).join(",");
  return `rgb(${rgb})`;
}

export let dots = new Dots();
