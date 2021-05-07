let genButton = document.querySelector(".generate-url-button");
let linkElem = document.createElement("a");

let socket = new WebSocket("ws://" + window.location.host);

genButton.addEventListener("click", () => {
  socket.send("newGame");
});

socket.onmessage = function (event) {
  let lobbyId = "id/" + event.data;
  linkElem.innerText = window.location.href + lobbyId;
  linkElem.setAttribute("href", lobbyId);
  document.body.append(linkElem);
  socket.close();
};
