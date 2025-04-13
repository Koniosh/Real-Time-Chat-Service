const Message = require('../models/message');
const Chat = require('../models/chat');

// Send a message
const sendMessage = async (chatId, senderId, content) => {
  const newMessage = new Message({
    chat: chatId,
    sender: senderId,
    content
  });

  await newMessage.save();

  const chat = await Chat.findByIdAndUpdate(chatId, { latestMessage: newMessage._id }, { new: true });
  return newMessage;
};

// Get message history for a chat
const getMessageHistory = async (chatId) => {
  const messages = await Message.find({ chat: chatId }).populate('sender', 'username');
  return messages;
};

module.exports = { sendMessage, getMessageHistory };
