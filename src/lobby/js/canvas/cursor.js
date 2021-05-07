import { Vector } from "./vector.js";
import { canvas, ctx } from "./init-canvas.js";
import { localPlayerNickname, localPlayerColor } from "../welcome-form.js";

let nowRadius = 0;
let animationProgress = 100;
let animationSpeed = 500; //percent per second

//calculate value between 0 and 1 dependent on animation Progress(0:100);
function getProgress(progress) {
  let prog = progress / 100;
  return prog;
}

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
  };
  this.update = function (deltaTime) {
    if (animationProgress < 100) {
      nowRadius = this.radius * getProgress(animationProgress);
      animationProgress += deltaTime * animationSpeed;
    } else nowRadius = this.radius;
  };
}

export let cursor = new Cursor();
