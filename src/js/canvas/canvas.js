import { canvas, ctx } from "./init-canvas.js";

import { Stage } from "./stages/stage.js";
import { GameLoading } from "./stages/game-loading.js";
import { FieldAppear } from "./stages/field-appear.js";
import { GameStage } from "./stages/game-stage.js";

export function startGame() {
  lastTime = Date.now();
  ctx.save();
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
let gameStage = new GameStage();

//game stages dependences
let currentStage = gameLoadStage;
gameLoadStage.setNext(fieldAppearStage);
fieldAppearStage.setNext(gameStage);

function gameLoop() {
  let nowTime = Date.now();
  let deltaTime = (nowTime - lastTime) / 1000;
  lastTime = nowTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  currentStage.update(deltaTime);
  requestAnimationFrame(gameLoop);
}
