import { player } from "./welcome-form.js";
import "../css/game-ui.css";

let nowTurn = document.createElement("div");
nowTurn.classList.add("now-turn");
let nowTurnText = document.createElement("p");
nowTurnText.classList.add("now-turn__text");
nowTurnText.innerText = "Сейчас ходит:";
nowTurn.append(nowTurnText);

let turnContainer = document.createElement("div");
turnContainer.classList.add("turn-container");

let localPlayerElement = document.createElement("p");
localPlayerElement.classList.add("turn-container__player");

let remotePlayerElement = document.createElement("p");
remotePlayerElement.classList.add("turn-container__player");

nowTurn.append(turnContainer);

//players score
let playerScoreWrapper = document.createElement("div");
playerScoreWrapper.classList.add("player-score-wrapper");
let localPlayerScoreElement = document.createElement("p");
localPlayerScoreElement.classList.add("player-score");
let remotePlayerScoreElement = document.createElement("p");
remotePlayerScoreElement.classList.add("player-score");
playerScoreWrapper.append(localPlayerScoreElement, remotePlayerScoreElement);

export function setTurn(localTurn) {
  if (localTurn) {
    remotePlayerElement.classList.add("turn-container__player_hidden");
    turnContainer.append(localPlayerElement);
    setTimeout(() => {
      remotePlayerElement.remove();
      remotePlayerElement.classList.remove("turn-container__player_hidden");
    }, 200);
  } else {
    localPlayerElement.classList.add("turn-container__player_hidden");
    turnContainer.append(remotePlayerElement);
    setTimeout(() => {
      localPlayerElement.remove();
      localPlayerElement.classList.remove("turn-container__player_hidden");
    }, 200);
  }
  updateScore();
}

let lastScore = {
  local: 0,
  remote: 0,
};
function updateScore() {
  if (player.local.score != lastScore.local) {
    lastScore.local = player.local.score;
    localPlayerScoreElement.innerText = `${player.local.nickname}: ${player.local.score}`;
  }
  if (player.remote.score != lastScore.remote) {
    lastScore.remote = player.remote.score;
    remotePlayerScoreElement.innerText = `${player.remote.nickname}: ${player.remote.score}`;
  }
}

export function init(localTurn) {
  document.querySelector(".header__logo").after(nowTurn);
  localPlayerElement.innerText = player.local.nickname;
  localPlayerElement.style.color = player.local.color;

  remotePlayerElement.innerText = player.remote.nickname;
  remotePlayerElement.style.color = player.remote.color;
  turnContainer.append(localTurn ? localPlayerElement : remotePlayerElement);

  //players score
  localPlayerScoreElement.innerText = `${player.local.nickname}: 0`;
  remotePlayerScoreElement.innerText = `${player.remote.nickname}: 0`;
  localPlayerScoreElement.style.borderColor = player.local.color;
  remotePlayerScoreElement.style.borderColor = player.remote.color;

  document.body.append(playerScoreWrapper);
}
