import { canvas, ctx } from "./init-canvas.js";
import { localPlayerNickname } from "./welcome-form.js";
import { Stage } from "./stage.js";

export class MemAppear extends Stage {
  #img = new Image();
  #opacity = 0;
  constructor() {
    super();
    this.#img.src = "./img/mike.jpg";
  }
  update(deltaTime) {
    if (this.#opacity <= 1) this.#opacity += deltaTime;
    else {
      this.#opacity = 1;
      //this.onComplete();
    }
    ctx.globalAlpha = this.#opacity;
    ctx.drawImage(this.#img, canvas.width / 2 - this.#img.width / 2, 0);
    ctx.font = "35px Roboto";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.textBaseline = "top";
    ctx.fillText("Привет", canvas.width / 2, 2);
    ctx.textBaseline = "bottom";
    ctx.fillText(localPlayerNickname, canvas.width / 2, this.#img.height - 2);
  }
}
