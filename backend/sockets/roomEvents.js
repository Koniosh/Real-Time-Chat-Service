module.exports = (socket, io) => {
    socket.on('join_room', (roomId) => {
      socket.join(roomId);
      io.to(roomId).emit('room_status', { roomId, status: 'joined' });
    });
  
    socket.on('leave_room', (roomId) => {
      socket.leave(roomId);
      io.to(roomId).emit('room_status', { roomId, status: 'left' });
    });
  };
  