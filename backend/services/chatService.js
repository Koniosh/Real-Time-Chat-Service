const Chat = require('../models/chat');
const Room = require('../models/room');

// Create a new chat
const createChat = async (users, isGroupChat, roomId) => {
  const room = await Room.findOne({ roomId });
  if (!room) throw new Error('Room does not exist');

  const chat = new Chat({
    users,
    isGroupChat,
    room: room._id
  });

  await chat.save();
  return chat;
};

// Get all chats for a user
const getChats = async (userId) => {
  const chats = await Chat.find({ users: userId }).populate('users', 'username email');
  return chats;
};

module.exports = { createChat, getChats };
