import { localPlayerColor } from "./welcome-form.js";
export function startCanvas() {
  requestAnimationFrame(redraw);
}

let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let lastTime = Date.now();

let radius = 10;
let circleCount = 5;
let totalShapeCount = 100;

let offset = 0;
let speed = 1;

function getAngle(phase) {
  return 4 * (Math.atan((phase % 2) - 1) + Math.PI * 4);
}

function redraw() {
  let nowTime = Date.now();
  let deltaTime = (nowTime - lastTime) / 1000;
  lastTime = nowTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = localPlayerColor;
  for (let i = 0; i < circleCount; ++i) {
    ctx.beginPath();
    let angle = getAngle(offset + i * 0.1);
    ctx.arc(
      Math.sin(angle) * totalShapeCount + canvas.width / 2,
      Math.cos(angle) * totalShapeCount + canvas.height / 2,
      radius,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
  offset += speed * deltaTime;
  requestAnimationFrame(redraw);
}
