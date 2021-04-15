import { update as loadingAnim, update } from "./game-loading.js";
import { onLoad as setLoadCallback } from "./game-loading.js";

export function startGame() {
  lastTime = Date.now();
  requestAnimationFrame(gameLoop);
}

let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let lastTime = Date.now();

let updateFunc = loadingAnim;

setLoadCallback(() => {
  updateFunc = function () {};
});

function gameLoop() {
  let nowTime = Date.now();
  let deltaTime = (nowTime - lastTime) / 1000;
  lastTime = nowTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateFunc(ctx, deltaTime, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
}
