import { canvas, ctx } from "./init-canvas.js";

export let field = {
  size: {
    x: 15,
    y: 15,
  },
};

function getDrawFieldFunc() {
  let path = new Path2D();
  let step = canvas.width / field.size.x;

  for (let i = 0; i < field.size.x; i++) {
    path.moveTo(i * step + step / 2, 0);
    path.lineTo(i * step + step / 2, canvas.height);
  }
  for (let i = 0; i < field.size.y; i++) {
    path.moveTo(0, i * step + step / 2);
    path.lineTo(canvas.width, i * step + step / 2);
  }

  return function () {
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke(path);
  };
}

export let drawField = getDrawFieldFunc();
