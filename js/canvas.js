import { localPlayerColor } from "./welcome-form.js";
export function startCanvas() {
  requestAnimationFrame(redraw);
}

let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let lastTime = Date.now();

let ShapeRadius = 10;

function redraw() {
  let nowTime = Date.now();
  let deltaTime = nowTime - lastTime;
  lastTime = nowTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = localPlayerColor;
  ctx.arc(0, 0, ShapeRadius, 0, Math.PI * 2);
  ctx.fill();
  requestAnimationFrame(redraw);
}
