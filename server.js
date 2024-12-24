import { createServer } from "node:http";
import next from "next";
import { Server } from "socket.io";

const dev = "production";
// const hostname = "localhost";
// const port = 3000;
const hostname = 'prosperaahospitality.com';  // Your production hostname
const port = 443; // Production HTTPS port

// Initialize Next.js app
const app = next({ dev, hostname });
const handler = app.getRequestHandler();

let connectedClients = new Set();
let masterId = "";

app.prepare().then(() => {
  // Create HTTP server to handle requests
  const httpServer = createServer((req, res) => {
    handler(req, res);
  });

  // Initialize socket.io server
  const io = new Server(httpServer, {
    cors: {
      origin: 'https://prosperaahospitality.com', // Allow connections from your production domain
      methods: ['GET', 'POST'],
      credentials: true,  // Allow credentials (cookies, authorization headers, etc.)
    },
  });

  // Socket.io connection handler
  io.on("connection", (socket) => {
    connectedClients.add(socket.id);

    // Function to update the list of connected clients
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

    // Handle chat message
    socket.on("chat message", (msg) => {
      io.emit("chat message", { msg, senderId: socket.id });
    });

    // Handle private message
    socket.on("private message", ({ recipientId, message }) => {
      if (connectedClients.has(recipientId)) {
        io.to(recipientId).emit("chat message", { msg: message, senderId: socket.id });
      } else {
        socket.emit("error", { error: "Recipient not connected." });
      }
    });

    socket.emit("test message", "Hello from server");

    // Handle typing notifications
    socket.on("typing", (senderId) => {
      socket.broadcast.emit("typing", senderId);
    });

    // Handle stop typing notifications
    socket.on("stop typing", () => {
      socket.broadcast.emit("stop typing");
    });

    // Register master (set the masterId)
    socket.on("register master", () => {
      masterId = socket.id;
      console.log(`Master connected: ${masterId}`);
      socket.emit("test messagee", "You are now the Master!");
      socket.emit("master id", masterId);
      updateConnectedClients(); // Update the list to reflect the new master
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      connectedClients.delete(socket.id);
      if (masterId === socket.id) {
        masterId = ""; // Reset masterId if the master disconnects
      }
      updateConnectedClients();
      io.emit("disconnected client", socket.id);
    });
  });

  // Start the server and listen on the specified port
  httpServer
    .once("error", (err) => {
      console.error(err);
      process.exit(1);
    })
    .listen(port, () => {
      console.log(`> Ready on https://${hostname}:${port}`);
    });
});
