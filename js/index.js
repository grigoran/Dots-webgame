//document.querySelector(".welcome-popup").classList.toggle("welcome-popup_hiden")
let welcome_popup = document.querySelector(".welcome-popup");
let welcome_popup__form = welcome_popup.querySelector(".welcome-popup__form");

window.onload = loadHandler;
welcome_popup__form.addEventListener("submit", welcomeFormSubmit);

function loadHandler() {
  setTimeout(() => welcome_popup.classList.toggle("welcome-popup_shown"), 150);
}

function welcomeFormSubmit(event) {
  welcome_popup.classList.toggle("welcome-popup_shown");
  setTimeout(() => welcome_popup.classList.toggle("welcome-popup_hidden"), 150);
  event.preventDefault();
}
