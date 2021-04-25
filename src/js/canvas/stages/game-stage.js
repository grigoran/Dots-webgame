import { canvas, ctx } from "./../init-canvas.js";
import { localPlayerNickname, localPlayerColor } from "../../welcome-form.js";
import { Stage } from "./stage.js";
import { field } from "../field.js";

import memImage from "../../../img/mike.jpg";

document.addEventListener("mousemove", getMouseHandler());

function Vector() {
  this.x = 0;
  this.y = 0;
}

let mousePos = new Vector();

let cursor = {};
cursor.pos = new Vector();
cursor.target = new Vector();
cursor.radius = 10;
cursor.speed = 10;

function getMouseHandler() {
  let rect = canvas.getBoundingClientRect();
  let scaleX = canvas.width / rect.width;
  let scaleY = canvas.height / rect.height;
  return function (event) {
    mousePos.x = (event.clientX - rect.left) * scaleX;
    mousePos.y = (event.clientY - rect.top) * scaleY;
  };
}

cursor.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = localPlayerColor;
  ctx.arc(cursor.pos.x, cursor.pos.y, cursor.radius, 0, 2 * Math.PI);
  ctx.fill();
};

export class GameStage extends Stage {
  update(deltaTime) {
    field.drawField();

    cursor.target = field.getTargetCoord(mousePos);
    cursor.pos.x += (cursor.target.x - cursor.pos.x) * deltaTime * cursor.speed;
    cursor.pos.y += (cursor.target.y - cursor.pos.y) * deltaTime * cursor.speed;

    cursor.draw();
  }
}
