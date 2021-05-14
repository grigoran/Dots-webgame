let lobbyPool = {
  lobbies: {},
  newLobby() {
    let id = ((Math.random() * 10000) ^ 0).toString();
    if (id in this.lobbies) return this.newLobby();
    this.lobbies[id] = new Lobby(id);
    setTimeout(this.keepAlive.bind(this), 10000, id);
    return id;
  },
  getLobby(id) {
    return this.lobbies[id];
  },
  closeLobby: function (id) {
    delete this.lobbies[id];
    console.log(`lobby ${id} closed`);
  },
  isExist(id) {
    return id in this.lobbies;
  },
  keepAlive(id) {
    if (!(id in this.lobbies)) return;
    clearTimeout(this.lobbies[id].timer);
    this.lobbies[id].timer = setTimeout(this.closeLobby.bind(this), 3000, id);
  },
};

function Lobby(id) {
  this.id = id;
  this.clients = [];
  this.connectedUsers = 0;
  this.connect = (ws) => {
    this.clients.push(ws);
    let pingTimer = setInterval(() => {
      if (ws.readyState == 1) ws.ping();
      else {
        clearInterval(pingTimer);
        lobbyPool.closeLobby(this.id);
      }
    }, 1000);
    ws.on("pong", () => lobbyPool.keepAlive(this.id));
    ws.on("close", () => {
      console.log(`client leave from lobby ${id}`);
    });
  };
  this.join = () => {
    this.connectedUsers++;
  };
  this.send = (message, ws) => {
    //when have ws argument, then send everyone exept ws
    this.clients.forEach((client) => {
      if (client.readyState != 1) return;
      if (client != ws) client.send(message);
    });
  };
  this.start = () => {
    let firstTurn = this.clients[parseInt(Math.random() * this.clients.length)];
    this.clients.forEach((client) => {
      if (client.readyState != 1) return;
      client.send("start");
      client.send(client == firstTurn ? "turn local" : "turn remote");
    });
  };
}

module.exports = lobbyPool;
