import { canvas, ctx } from "./../init-canvas.js";
import { localPlayerNickname, localPlayerColor } from "../../welcome-form.js";
import { Stage } from "./stage.js";
import { field } from "../field.js";
import { Vector } from "../vector.js";
import { cursor } from "../cursor.js";

let mousePos = new Vector();

function getMouseHandler() {
  let rect = canvas.getBoundingClientRect();
  let scaleX = canvas.width / rect.width;
  let scaleY = canvas.height / rect.height;
  return function (event) {
    mousePos.x = (event.clientX - rect.left) * scaleX;
    mousePos.y = (event.clientY - rect.top) * scaleY;
  };
}

export class GameStage extends Stage {
  init() {
    document.addEventListener("mousemove", getMouseHandler());
    document.addEventListener("click", () => {
      cursor.click();
      field.placeDot(mousePos, localPlayerColor);
    });
  }
  update(deltaTime) {
    field.drawField();

    cursor.target = field.getTargetCoord(mousePos);
    cursor.pos.x += (cursor.target.x - cursor.pos.x) * deltaTime * cursor.speed;
    cursor.pos.y += (cursor.target.y - cursor.pos.y) * deltaTime * cursor.speed;
    cursor.update(deltaTime);
    cursor.draw();
  }
}
