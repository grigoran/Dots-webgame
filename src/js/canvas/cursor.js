import { Vector } from "./vector.js";
import { canvas, ctx } from "./init-canvas.js";
import { localPlayerNickname, localPlayerColor } from "../welcome-form.js";

let nowRadius = 0;
let animationProgress = 100;

function Cursor() {
  this.pos = new Vector();
  this.target = new Vector();
  this.radius = 10;
  nowRadius = this.radius;
  this.speed = 10;
  this.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = localPlayerColor;
    ctx.arc(cursor.pos.x, cursor.pos.y, nowRadius, 0, 2 * Math.PI);
    ctx.fill();
  };
  this.click = function () {
    animationProgress = 0;
    nowRadius = 0;
    console.log("click");
  };
  this.update = function (deltaTime) {
    if (animationProgress < 100) {
      nowRadius += deltaTime * 10;
      animationProgress += deltaTime;
    } else nowRadius = this.radius;
  };
}

export let cursor = new Cursor();
