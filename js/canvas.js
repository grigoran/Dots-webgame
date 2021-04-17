import { canvas, ctx } from "./init-canvas.js";
import { Stage } from "./stage.js";

import { GameLoading } from "./game-loading.js";
import { MemAppear } from "./mem-appear.js";

export function startGame() {
  lastTime = Date.now();
  requestAnimationFrame(gameLoop);
}
let lastTime = Date.now();

Stage.prototype.onComplete = () => {
  currentStage = currentStage.getNext();
};

//init game stages
let gameLoadStage = new GameLoading();
let memAppearStage = new MemAppear();

//game stages dependences
gameLoadStage.setNext(memAppearStage);

let currentStage = gameLoadStage;

function gameLoop() {
  let nowTime = Date.now();
  let deltaTime = (nowTime - lastTime) / 1000;
  lastTime = nowTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  currentStage.update(deltaTime);
  requestAnimationFrame(gameLoop);
}
