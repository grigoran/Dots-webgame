import { canvas, ctx } from "./init-canvas.js";
import { assignDotsArr, findPath } from "./pathFinder.js";

let dotsArr = [];
const TWO_PI = 2 * Math.PI;

class Dots {
  #step = 0;
  #size = {};
  #dotRadius = 8;
  constructor() {
    this.init = function (size, step) {
      this.#step = step;
      this.#size = size;
      for (let i = 0; i < size.x; i++) {
        dotsArr[i] = [];
        for (let j = 0; j < size.y; j++) {
          dotsArr[i][j] = "";
        }
      }
      assignDotsArr(dotsArr);
    };
    this.push = function (pos, color) {
      dotsArr[pos.x][pos.y] = color;
      findPath(pos);
    };
    this.draw = function () {
      let color = "";
      for (let i = 0; i < this.#size.x; i++) {
        for (let j = 0; j < this.#size.y; j++) {
          color = dotsArr[i][j];
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

export let dots = new Dots();
