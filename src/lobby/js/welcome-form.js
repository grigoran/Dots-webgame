import "../css/welcome-popup.css";
import { startGame } from "./canvas/canvas.js";
import { gameServer } from "./websocket";

const RAND_NICKNAMES = [
  "Щас бы на дачу",
  "SuperDominator",
  "Placeholder",
  "Плейсхолдер",
  "Что-то грустно",
  "За шо",
  "Твое имя",
  "Petr",
  "Паравозик томас",
  "Alukard",
  "Милый кисик",
  "Доброжелатель",
];

function getRandNick() {
  return RAND_NICKNAMES[Math.floor(Math.random() * RAND_NICKNAMES.length)];
}

export let player = {
  local: {},
  remote: {
    color: "pink",
    nickname: getRandNick(),
  },
};

let popupForm = createFormElement();
let popup = createPopupElement(popupForm);

//document.addEventListener("DOMContentLoaded", loadHandler);
window.onload = loadHandler;

function loadHandler() {
  document.body.append(popup);
  requestAnimationFrame(() => {
    popup.classList.toggle("welcome-popup_shown");
  });
}

function welcomeFormSubmit(event) {
  if (popup.classList.contains("welcome-popup_shown")) {
    player.local.color = popupForm.color.value;
    player.local.nickname = popupForm.nickname.value;
    if (player.local.nickname == "")
      player.local.nickname = popupForm.nickname.placeholder;
    popup.classList.remove("welcome-popup_shown");
    gameServer.join();
    startGame();
    setTimeout(() => popup.remove(), 150);
  }
  event.preventDefault();
}

function createFormElement() {
  //form
  let form = document.createElement("form");
  form.className = "welcome-popup__form";

  //form: nickname section
  let nickNameSection = document.createElement("div");
  nickNameSection.className = "welcome-popup__nickname-section";
  let label = document.createElement("label");
  label.className = "welcome-popup__nickname-label";
  label.innerHTML = `Твое имя:
  <input
    class="welcome-popup__nickname-field"
    type="text"
    name="nickname"
    placeholder="${getRandNick()}"
    autocomplete="off"
    autofocus="autofocus"
  />`;
  nickNameSection.append(label);

  //form:color picker
  let colorPicker = document.createElement("ul");
  colorPicker.className = "color-picker";
  let colors = ["#ee2b2b", "#0bb870", "#0db1f1", "#e9a6da", "#831583"];
  for (let i = 0; i < 5; i++) {
    let item = document.createElement("li");
    let itemInput = document.createElement("input");

    item.className = "color-picker__item";

    itemInput.className = "color-picker__button";
    itemInput.setAttribute("type", "radio");
    itemInput.setAttribute("name", "color");
    itemInput.setAttribute("value", colors[i]);
    if (i == 0) itemInput.setAttribute("checked", "");

    item.append(itemInput);
    itemInput.style.backgroundColor = colors[i];
    colorPicker.append(item);
  }

  //form:submit
  let formSubmit = document.createElement("input");
  formSubmit.className = "welcome-popup__submit";
  formSubmit.setAttribute("type", "submit");
  formSubmit.setAttribute("name", "submit");
  formSubmit.setAttribute("value", "Играть");

  //form fill
  form.append(nickNameSection);
  form.append(colorPicker);
  form.append(formSubmit);
  form.addEventListener("submit", welcomeFormSubmit);
  return form;
}

function createPopupElement(form) {
  let div = document.createElement("div");
  div.className = "welcome-popup";

  //popupHeader
  let popupHeader = document.createElement("h3");
  popupHeader.className = "welcome-popup__title";
  popupHeader.innerText = "Вход в игру";

  //final
  div.append(popupHeader);
  div.append(form);
  return div;
}
