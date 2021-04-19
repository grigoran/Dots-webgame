import { canvas, ctx } from "./init-canvas.js";

import { Stage } from "./stages/stage.js";
import { GameLoading } from "./stages/game-loading.js";
import { FieldAppear } from "./stages/field-appear.js";

export function startGame() {
  lastTime = Date.now();
  requestAnimationFrame(gameLoop);
}
let lastTime = Date.now();

Stage.prototype.onComplete = () => {
  currentStage = currentStage.getNext();
  ctx.restore();
};

//init game stages
let gameLoadStage = new GameLoading();
let fieldAppearStage = new FieldAppear();

//game stages dependences
let currentStage = gameLoadStage;
gameLoadStage.setNext(fieldAppearStage);

function gameLoop() {
  let nowTime = Date.now();
  let deltaTime = (nowTime - lastTime) / 1000;
  lastTime = nowTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  currentStage.update(deltaTime);
  requestAnimationFrame(gameLoop);
}
