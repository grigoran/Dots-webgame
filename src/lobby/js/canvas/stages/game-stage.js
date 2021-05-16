import { canvas, ctx } from "./../init-canvas.js";
import { player } from "../../welcome-form.js";
import { Stage } from "./stage.js";
import { field } from "../field.js";
import { Vector } from "../vector.js";
import { cursor } from "../cursor.js";
import { gameServer } from "../../websocket.js";
import * as gameUi from "../../game-ui.js";

let mousePos = new Vector();

let localTurn = false; //ходит ли сейчас локальный игрок

const DEV_MODE = false;

gameServer.onPlace((pos) => {
  field.placeDotDirect(pos, player.remote.color);
  localTurn = true;
  gameUi.setTurn(localTurn);
});

gameServer.onTurn((turn) => {
  if (turn == "local") {
    localTurn = true;
  } else {
    localTurn = false;
  }
});

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
    gameUi.init(localTurn);
    document.addEventListener("mousemove", getMouseHandler());
    document.addEventListener("click", () => {
      if (localTurn || DEV_MODE) {
        cursor.click();
        if (field.placeDot(mousePos, player.local.color)) {
          localTurn = DEV_MODE ? !localTurn : false;
          gameUi.setTurn(localTurn);
        }
      }
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
