module.exports = (socket, io) => {
    socket.on('user_online', (userId) => {
      socket.join(userId);
      io.emit('user_status', { userId, status: 'online' });
    });
  
    socket.on('user_offline', (userId) => {
      socket.leave(userId);
      io.emit('user_status', { userId, status: 'offline' });
    });
  };
  