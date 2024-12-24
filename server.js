import { createServer } from "node:http";
import next from "next";

import { Server } from "socket.io";


const dev = process.env.NODE_ENV !== "production";
const hostname = "localhost";
const port = 3000;
// when using middleware `hostname` and `port` must be provided below
const app = next({ dev, hostname, port });
const handler = app.getRequestHandler();

let connectedClients = new Set();
let masterId = "";

app.prepare().then(() => {

  const httpServer = createServer((req, res) => {
    handler(req, res);
  });

  const io = new Server(httpServer);

  io.on("connection", (socket) => {

    connectedClients.add(socket.id);

    const updateConnectedClients = () => {
      io.emit(
        "connected clients",
        Array.from(connectedClients).map((id) => ({
          id,
          isMaster: id === masterId,
        }))
      );
    };
  
    updateConnectedClients();
  
    socket.on("chat message", (msg) => {
      io.emit("chat message", { msg, senderId: socket.id });
    });
  
    socket.on("private message", ({ recipientId, message }) => {
      if (connectedClients.has(recipientId)) {
        io.to(recipientId).emit("chat message", { msg: message, senderId: socket.id });
      } else {
        socket.emit("error", { error: "Recipient not connected." });
      }
    });
  
    socket.emit("test message", "Hello from server");
  
    socket.on("typing", (senderId) => {
      socket.broadcast.emit("typing", senderId);
    });
  
    socket.on("stop typing", () => {
      socket.broadcast.emit("stop typing");
    });
  
    socket.on("register master", () => {
      masterId = socket.id;
      console.log(`Master connected: ${masterId}`);
      socket.emit("test messagee", "You are now the Master!");
      socket.emit("master id", masterId);
      updateConnectedClients(); // Update the list to reflect the new master
    });
  
    socket.on("disconnect", () => {
      connectedClients.delete(socket.id);
      if (masterId === socket.id) {
        masterId = ""; // Reset masterId if the master disconnects
      }
      updateConnectedClients();
      io.emit("disconnected client", socket.id);
    });

  });

  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});