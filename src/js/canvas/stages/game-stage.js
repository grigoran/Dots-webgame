import { canvas, ctx } from "./../init-canvas.js";
import { localPlayerNickname, localPlayerColor } from "../../welcome-form.js";
import { Stage } from "./stage.js";
import { drawField } from "../field.js";

import memImage from "../../../img/mike.jpg";

export class GameStage extends Stage {
  update(deltaTime) {
    drawField();
  }
}
