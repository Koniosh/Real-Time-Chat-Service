const { Server } = require('socket.io');
const path = require('path');

// Use absolute paths for reliability
const registerChatEvents = require(path.join(__dirname, '../sockets/chatEvents'));
const registerPresenceEvents = require(path.join(__dirname, '../sockets/presenceEvents'));
const registerRoomEvents = require(path.join(__dirname, '../sockets/roomEvents'));

let io;

const initSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
    }
  });

  io.on('connection', (socket) => {
    console.log(`New socket connected: ${socket.id}`);
    
    // Attach individual event groups
    registerChatEvents(socket, io);
    registerPresenceEvents(socket, io);
    registerRoomEvents(socket, io);
  });

  global.io = io; // Optional: make io globally accessible
};

module.exports = initSocket;
