const initSocket = (server) => {
    const io = require('socket.io')(server);
  
    io.on('connection', (socket) => {
      console.log(`New connection: ${socket.id}`);
      require('./chatEvents')(socket, io);
      require('./presenceEvents')(socket, io);
      require('./roomEvents')(socket, io);
      require('./notificationEvents')(socket, io);
    });
  };
  
  module.exports = initSocket;
  