let socket = new WebSocket(
  "ws://" + window.location.host + window.location.pathname
);

let onstart = function (socket) {};
let playerRequest = function (color, nick) {};
let place = function (pos) {};

export let gameServer = {
  onStart(callback) {
    onstart = callback;
  },
  onPlayerRequest(callback) {
    playerRequest = callback;
  },
  join() {
    socket.send("join");
  },
  place(pos) {
    socket.send(`place ${pos.x} ${pos.y}`);
  },
  onPlace(callback) {
    place = callback;
  },
};

socket.onopen = function (e) {
  socket.send("con");
};

socket.onmessage = (event) => {
  let message = event.data;
  let command = message.split(" ");
  if (command[0] == "start") {
    onstart(socket);
  }
  if (command[0] == "player") {
    playerRequest(command[1], command[2]);
  }
  if (command[0] == "place") {
    place({ x: Number(command[1]), y: Number(command[2]) });
  }
};
