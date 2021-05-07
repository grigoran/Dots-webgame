import { canvas, ctx } from "./init-canvas.js";
import { dots } from "./dots.js";

function map(val, beg, end) {
  let ret = val > end ? end : val;
  ret = ret < beg ? beg : ret;
  return ret;
}

class Field {
  #step = 0;
  constructor() {
    //Размер поля
    this.size = {
      x: 15,
      y: 15,
    };

    let path = new Path2D(); //Путь для рисования поля
    this.#step = canvas.width / this.size.x; //шаг сетки

    //рисуем сетку
    for (let i = 0; i < this.size.x; i++) {
      path.moveTo(i * this.#step + this.#step / 2, 0);
      path.lineTo(i * this.#step + this.#step / 2, canvas.height);
    }
    for (let i = 0; i < this.size.y; i++) {
      path.moveTo(0, i * this.#step + this.#step / 2);
      path.lineTo(canvas.width, i * this.#step + this.#step / 2);
    }

    dots.init(this.size, this.#step);

    //функция рисования поля
    this.drawField = function () {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke(path);
      dots.draw();
    };
  }
  placeDot(pos, color) {
    let newPos = this.getMeshCoord(pos);
    dots.push(newPos, color);
  }
  getMeshCoord(pos) {
    return {
      x: map(Math.floor(pos.x / this.#step), 0, this.size.x - 1),
      y: map(Math.floor(pos.y / this.#step), 0, this.size.y - 1),
    };
  }
  getTargetCoord(pos) {
    let meshPos = {};
    meshPos.x = map(Math.floor(pos.x / this.#step), 0, this.size.x - 1);
    meshPos.y = map(Math.floor(pos.y / this.#step), 0, this.size.y - 1);
    return {
      x: meshPos.x * this.#step + this.#step / 2,
      y: meshPos.y * this.#step + this.#step / 2,
    };
  }
}

export let field = new Field();
