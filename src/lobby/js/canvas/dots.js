import { canvas, ctx } from "./init-canvas.js";
import { pathFinder } from "./pathFinder.js";

const TWO_PI = 2 * Math.PI;

function Dot() {
  this.color = "";
  this.connected = false;
  this.inside = false;
  this.marked = false;
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
    return arr[pos.x][pos.y].color;
  };
  this.setColor = function (pos, color) {
    arr[pos.x][pos.y].color = color;
  };
  this.connect = function (pos) {
    arr[pos.x][pos.y].connected = true;
  };
  this.isConnected = function (pos) {
    return arr[pos.x][pos.y].connected;
  };
  this.markInside = function (pos) {
    arr[pos.x][pos.y].inside = true;
  };
  this.isInside = function (pos) {
    return arr[pos.x][pos.y].inside;
  };
  this.mark = function (pos) {
    arr[pos.x][pos.y].marked = true;
  };
  this.unmark = function (pos) {
    arr[pos.x][pos.y].marked = false;
  };
  this.isMarked = function (pos) {
    return arr[pos.x][pos.y].marked;
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
    };
    this.push = function (pos, color) {
      if (dotArr.getColor(pos) != "" || dotArr.isInside(pos)) return false;
      dotArr.setColor(pos, color);
      pathFinder.findPath(pos).then((path) => {
        if (path && path.length > 0) this.#paths.push(path);
      });
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
  let rgb = hex
    .match(/[a-f\d]{2}/gi)
    .map((elem) => parseInt(elem, 16) * opacity)
    .join(",");
  return `rgb(${rgb})`;
}

export let dots = new Dots();
