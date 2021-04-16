import { update as loadingAnim, update } from "./game-loading.js";
import { onLoad as setLoadCallback } from "./game-loading.js";
import { localPlayerNickname } from "./welcome-form.js";

export function startGame() {
  lastTime = Date.now();
  requestAnimationFrame(gameLoop);
}

let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");
let lastTime = Date.now();

let updateFunc = loadingAnim;

setLoadCallback(() => {
  let img = new Image();
  img.src = "./img/mike.jpg";
  let opacity = 0;
  updateFunc = function (ctx, deltaTime) {
    if (opacity <= 1) opacity += deltaTime;
    else opacity = 1;
    ctx.globalAlpha = opacity;
    ctx.drawImage(img, 0, 0);
    ctx.font = "35px Roboto";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(localPlayerNickname, img.width / 2, img.height - 10);
  };
});

function gameLoop() {
  let nowTime = Date.now();
  let deltaTime = (nowTime - lastTime) / 1000;
  lastTime = nowTime;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  updateFunc(ctx, deltaTime, canvas.width, canvas.height);
  requestAnimationFrame(gameLoop);
}
