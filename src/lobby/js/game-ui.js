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
}

export function init(localTurn) {
  document.querySelector(".header__logo").after(nowTurn);
  localPlayerElement.innerText = player.local.nickname;
  localPlayerElement.style.color = player.local.color;

  remotePlayerElement.innerText = player.remote.nickname;
  remotePlayerElement.style.color = player.remote.color;
  turnContainer.append(localTurn ? localPlayerElement : remotePlayerElement);
}
