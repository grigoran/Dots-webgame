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
  this.join = (ws) => {
    this.clients.push(ws);
    setInterval(() => {
      ws.ping();
    }, 1000);
    ws.on("pong", () => lobbyPool.keepAlive(this.id));
  };
  this.send = (message, ws) => {
    //when have ws argument, then send everyone exept ws
    this.clients.forEach((client) => {
      if (client != ws) client.send(message);
    });
  };
}

module.exports = lobbyPool;
