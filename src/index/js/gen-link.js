import "../css/gen-link.css";
import { show as showPopup } from "./popup.js";

let genButton = document.querySelector(".generate-url-button");

let socket = new WebSocket("ws://" + window.location.host);

genButton.addEventListener("click", () => {
  socket.send("newGame");
});

socket.onmessage = function (event) {
  let lobbyId = "id/" + event.data;
  let lobbyLink = window.location.href + lobbyId;
  showPopup(lobbyLink);
  socket.close();
};
