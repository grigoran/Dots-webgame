import { canvas, ctx } from "./../init-canvas.js";
import { localPlayerNickname, localPlayerColor } from "../../welcome-form.js";
import { Stage } from "./stage.js";
import { field } from "../field.js";

import memImage from "../../../img/mike.jpg";

document.addEventListener("mousemove", mouseMoveHandler);

let mousePos = {
  x: 0,
  y: 0,
};

let currentCursorPos = mousePos;

let cursorTarget = mousePos;

function mouseMoveHandler(event) {
  let rect = canvas.getBoundingClientRect();
  let scaleX = canvas.width / rect.width;
  let scaleY = canvas.height / rect.height;
  mousePos.x = (event.clientX - rect.left) * scaleX;
  mousePos.y = (event.clientY - rect.top) * scaleY;
}

function drawCursor() {
  let cursorRadius = 10;
  ctx.beginPath();
  ctx.fillStyle = localPlayerColor;
  cursorTarget = field.getTargetCoord(mousePos);
  currentCursorPos = cursorTarget;
  ctx.arc(currentCursorPos.x, currentCursorPos.y, cursorRadius, 0, 2 * Math.PI);
  ctx.fill();
}

export class GameStage extends Stage {
  update(deltaTime) {
    field.drawField();
    drawCursor();
  }
}
