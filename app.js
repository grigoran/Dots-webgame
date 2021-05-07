const express = require("express");
const WebSocket = require("ws");
const http = require("http");
let lobby = require("./modules/lobby-pool");

const app = express();
const server = http.createServer(app);
const webSocketServer = new WebSocket.Server({ server });

app.use("/", express.static(__dirname + "/public/"));

app.use("/id/:id", (req, res, next) => {
  let id = req.params["id"];
  if (id && lobby.isExist(id)) next();
  else res.redirect("/");
});
app.use("/id/:id", express.static(__dirname + "/public/lobby.html"));

webSocketServer.on("connection", (ws, req) => {
  ws.on("message", (message) => {
    let id = "";
    let command = message.split(" ");
    if (command[0] == "newGame") {
      id = lobby.newLobby();
      ws.send(id);
      console.log(`lobby ${id} created`);
    } else {
      id = req.url.match(/\d/g).join(""); //just all numbers in address
      if (!lobby.isExist(id)) {
        ws.close();
        return;
      }
      console.log(`incoming massage from lobby ${id}: ${message}`);
    }
    if (command[0] == "join") {
      let nowLobby = lobby.getLobby(id);
      if (nowLobby.clients.length < 2) {
        nowLobby.join(ws);
        ws.send("connected");
        if (nowLobby.clients.length == 2) nowLobby.send("start");
      } else {
        ws.send("full");
        ws.close();
      }
    }
    if (command[0] == "color") lobby.getLobby(id).send(message, ws);
    if (command[0] == "nick") lobby.getLobby(id).send(message, ws);
    if (command[0] == "place") lobby.getLobby(id).send(message, ws);
  });
});

server.listen(8080, () => console.log("listen port 8080"));
