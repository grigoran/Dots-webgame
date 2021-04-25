import { canvas, ctx } from "./init-canvas.js";

class Field {
  constructor() {
    //Размер поля
    this.size = {
      x: 15,
      y: 15,
    };

    let path = new Path2D(); //Путь для рисования поля
    let step = canvas.width / this.size.x; //шаг сетки

    for (let i = 0; i < this.size.x; i++) {
      path.moveTo(i * step + step / 2, 0);
      path.lineTo(i * step + step / 2, canvas.height);
    }
    for (let i = 0; i < this.size.y; i++) {
      path.moveTo(0, i * step + step / 2);
      path.lineTo(canvas.width, i * step + step / 2);
    }

    this.drawField = function () {
      ctx.strokeStyle = "black";
      ctx.lineWidth = 2;
      ctx.stroke(path);
    };
  }
}

export let field = new Field();
