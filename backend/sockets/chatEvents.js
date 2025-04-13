module.exports = (socket, io) => {
    socket.on('send_message', (data) => {
      io.to(data.chatId).emit('new_message', data);
    });
  
    socket.on('typing', (data) => {
      socket.to(data.chatId).emit('typing', data);
    });
  
    socket.on('message_seen', (data) => {
      socket.to(data.chatId).emit('seen', data);
    });
  };
  