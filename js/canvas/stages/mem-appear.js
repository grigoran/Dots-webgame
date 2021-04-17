import { canvas, ctx } from "./../init-canvas.js";
import { localPlayerNickname } from "../../welcome-form.js";
import { Stage } from "./stage.js";

export class MemAppear extends Stage {
  #img = new Image();
  #opacity = 0;
  #offset = 0;
  constructor() {
    super();
    this.#img.src = "./img/mike.jpg";
  }
  #getOppacity(phase) {
    let val = Math.sin(phase) * 1.5;
    return val <= 1 ? val : 1;
  }
  update(deltaTime) {
    this.#offset += deltaTime;
    if (this.#offset >= Math.PI) this.onComplete();
    ctx.globalAlpha = this.#getOppacity(this.#offset);
    ctx.drawImage(this.#img, canvas.width / 2 - this.#img.width / 2, 0);
    ctx.font = "35px Roboto";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "bottom";
    ctx.fillText(localPlayerNickname, canvas.width / 2, this.#img.height - 2);
  }
}
