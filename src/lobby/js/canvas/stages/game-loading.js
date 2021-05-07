import { Stage } from "./stage.js";

import { player } from "../../welcome-form.js";
import { canvas, ctx } from "../init-canvas.js";
import { gameServer } from "../../websocket.js";

let loaded = false;

gameServer.onStart((socket) => {
  socket.send(`player ${player.local.color} ${player.local.nickname}`);
  loaded = true;
});

gameServer.onPlayerRequest((color, nick) => {
  player.remote.color = color;
  player.remote.nickname = nick;
  console.log(player.remote);
});

export class GameLoading extends Stage {
  #screenWidth = canvas.width;
  #screenHeight = canvas.height;
  #radius = 7;
  #totalShapeRadius = 70;
  #circleCount = 5;
  #speed = 1;
  #offset = 0;
  #nowAlpha = 1;

  #getAngle(phase) {
    return 4 * (Math.atan((phase % 2) - 1) + Math.PI * 4);
  }

  update(deltaTime) {
    ctx.fillStyle = player.local.color;
    for (let i = 0; i < this.#circleCount; ++i) {
      ctx.beginPath();
      let angle = this.#getAngle(this.#offset + i * 0.1);
      ctx.arc(
        Math.sin(angle) * this.#totalShapeRadius + this.#screenWidth / 2,
        Math.cos(angle) * this.#totalShapeRadius + this.#screenHeight / 2,
        this.#radius,
        0,
        Math.PI * 2
      );
      ctx.fill();
    }
    this.#offset += this.#speed * deltaTime;
    if (loaded) {
      if (this.#nowAlpha > 0) this.#nowAlpha -= this.#speed * deltaTime;
      this.#nowAlpha < 0
        ? (ctx.globalAlpha = 0)
        : (ctx.globalAlpha = this.#nowAlpha);
      if (this.#nowAlpha <= 0) {
        this.onComplete();
      }
    }
  }
}
