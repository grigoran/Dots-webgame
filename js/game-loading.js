import { localPlayerColor } from "./welcome-form.js";
export function onLoad(callback) {
  loadCallback = callback;
}
let radius = 10;
let circleCount = 5;
let totalShapeCount = 100;

let offset = 0;
let speed = 1;

let nowAlpha = 1;

let loadCallback = function () {};

function getAngle(phase) {
  return 4 * (Math.atan((phase % 2) - 1) + Math.PI * 4);
}

export function update(ctx, deltaTime, screenWidth, screenHeight) {
  ctx.fillStyle = localPlayerColor;
  for (let i = 0; i < circleCount; ++i) {
    ctx.beginPath();
    let angle = getAngle(offset + i * 0.1);
    ctx.arc(
      Math.sin(angle) * totalShapeCount + screenWidth / 2,
      Math.cos(angle) * totalShapeCount + screenHeight / 2,
      radius,
      0,
      Math.PI * 2
    );
    ctx.fill();
  }
  offset += speed * deltaTime;
  if (offset >= Math.PI) {
    if (nowAlpha > 0) nowAlpha -= speed * deltaTime;
    nowAlpha < 0 ? (ctx.globalAlpha = 0) : (ctx.globalAlpha = nowAlpha);
    if (nowAlpha <= 0) {
      setTimeout(() => {
        loadCallback();
        ctx.globalAlpha = 1;
      }, 200);
    }
  }
}
