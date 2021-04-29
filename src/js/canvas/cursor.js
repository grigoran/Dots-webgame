import { Vector } from "./vector.js";
import { canvas, ctx } from "./init-canvas.js";
import { localPlayerNickname, localPlayerColor } from "../welcome-form.js";

function Cursor() {
  this.pos = new Vector();
  this.target = new Vector();
  this.radius = 10;
  this.speed = 10;
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = localPlayerColor;
    ctx.arc(cursor.pos.x, cursor.pos.y, cursor.radius, 0, 2 * Math.PI);
    ctx.fill();
  };
}

export let cursor = new Cursor();
