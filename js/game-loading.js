import { Stage } from "./stage.js";

import { localPlayerColor } from "./welcome-form.js";
import { canvas, ctx } from "./init-canvas.js";

export class GameLoading extends Stage {
  #screenWidth = canvas.width;
  #screenHeight = canvas.height;
  #radius = 10;
  #totalShapeCount = 100;
  #circleCount = 5;
  #speed = 1;
  #offset = 0;
  #nowAlpha = 1;

  #getAngle(phase) {
    return 4 * (Math.atan((phase % 2) - 1) + Math.PI * 4);
  }

  update(deltaTime) {
    ctx.fillStyle = localPlayerColor;
    for (let i = 0; i < this.#circleCount; ++i) {
      ctx.beginPath();
      let angle = this.#getAngle(this.#offset + i * 0.1);
      ctx.arc(
        Math.sin(angle) * this.#totalShapeCount + this.#screenWidth / 2,
        Math.cos(angle) * this.#totalShapeCount + this.#screenHeight / 2,
        this.#radius,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    this.#offset += this.#speed * deltaTime;
    if (this.#offset >= Math.PI) {
      if (this.#nowAlpha > 0) this.#nowAlpha -= this.#speed * deltaTime;
      this.#nowAlpha < 0
        ? (ctx.globalAlpha = 0)
        : (ctx.globalAlpha = this.#nowAlpha);
      if (this.#nowAlpha <= 0) {
        setTimeout(() => {
          this.onComplete();
          ctx.globalAlpha = 1;
        }, 200);
      }
    }
  }
}
