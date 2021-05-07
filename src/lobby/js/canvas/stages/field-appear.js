import { Stage } from "./stage.js";
import { canvas, ctx } from "../init-canvas.js";
import { field } from "../field.js";

export class FieldAppear extends Stage {
  step = canvas.width / field.size.x;
  offset = 0;
  speed = canvas.height * 4;
  update(deltaTime) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    this.offset += deltaTime * this.speed;
    if (this.offset >= canvas.height) this.onComplete();
    for (let i = 0; i < field.size.x; i++) {
      ctx.moveTo(i * this.step + this.step / 2, 0);
      ctx.lineTo(i * this.step + this.step / 2, this.offset);
    }
    for (let i = 0; i < field.size.y; i++) {
      ctx.moveTo(0, i * this.step + this.step / 2);
      ctx.lineTo(this.offset, i * this.step + this.step / 2);
    }
    ctx.stroke();
  }
}
