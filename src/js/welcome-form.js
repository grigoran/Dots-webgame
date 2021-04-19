import "../css/welcome-popup.css";
import { startGame } from "./canvas/canvas.js";

export let localPlayerColor;
export let localPlayerNickname;

let popup = createPopupElement();

document.addEventListener("DOMContentLoaded", loadHandler);

function loadHandler() {
  document.body.append(popup);
  setTimeout(() => {
    popup.classList.toggle("welcome-popup_shown");
  }, 300);
}

function welcomeFormSubmit(event) {
  event.preventDefault();
}

function createPopupElement() {
  let div = document.createElement("div");
  div.className = "welcome-popup";

  //popupHeader
  let popupHeader = document.createElement("h3");
  popupHeader.className = "welcome-popup__title";
  popupHeader.innerText = "Вход в игру";

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
    placeholder="Греча"
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

  //final
  div.append(popupHeader);
  div.append(form);
  return div;
}
