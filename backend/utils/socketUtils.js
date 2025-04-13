let userSocketMap = {};

const addUserSocket = (userId, socketId) => {
  userSocketMap[userId] = socketId;
};

const getUserSocket = (userId) => {
  return userSocketMap[userId];
};

const removeUserSocket = (userId) => {
  delete userSocketMap[userId];
};

module.exports = { addUserSocket, getUserSocket, removeUserSocket };
