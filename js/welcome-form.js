export let localPlayerColor;
export let localPlayerNickname;
import { startCanvas } from "./canvas.js";

setButtonsColor();
let welcome_popup = document.querySelector(".welcome-popup");
let welcome_popup__form = welcome_popup.querySelector(".welcome-popup__form");

document.addEventListener("DOMContentLoaded", loadHandler);
welcome_popup__form.addEventListener("submit", welcomeFormSubmit);

function loadHandler() {
  setTimeout(() => welcome_popup.classList.toggle("welcome-popup_shown"), 150);
}

function welcomeFormSubmit(event) {
  if (welcome_popup.classList.contains("welcome-popup_shown")) {
    localPlayerColor = welcome_popup__form.color.value;
    localPlayerNickname = welcome_popup__form.nickname.value;
    welcome_popup.classList.remove("welcome-popup_shown");
    setTimeout(() => {
      welcome_popup.classList.add("welcome-popup_hidden");
      startCanvas();
    }, 300);
  }
  event.preventDefault();
}

function setButtonsColor() {
  let buttons = document.querySelectorAll(".color-picker__button");
  buttons.forEach((element) => {
    element.style.backgroundColor = element.getAttribute("value");
  });
}
