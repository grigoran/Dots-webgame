import { canvas, ctx } from "./init-canvas.js";

import { Stage } from "./stages/stage.js";
import { GameLoading } from "./stages/game-loading.js";
import { MemAppear } from "./stages/mem-appear.js";

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
let clearStage = new Stage();

//game stages dependences
gameLoadStage.setNext(memAppearStage);
memAppearStage.setNext(clearStage);

let currentStage = gameLoadStage;

function gameLoop() {
  let nowTime = Date.now();
  let deltaTime = (nowTime - lastTime) / 1000;
  lastTime = nowTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  currentStage.update(deltaTime);
  requestAnimationFrame(gameLoop);
}
