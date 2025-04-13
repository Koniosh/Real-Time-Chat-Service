const Message = require('../models/message');
const Chat = require('../models/chat');

// Send a message
exports.sendMessage = async (req, res) => {
  const { chatId, senderId, content } = req.body;

  try {
    const newMessage = new Message({
      chat: chatId,
      sender: senderId,
      content
    });

    await newMessage.save();

    const chat = await Chat.findByIdAndUpdate(chatId, { latestMessage: newMessage._id }, { new: true });
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get message history for a chat
exports.getMessageHistory = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await Message.find({ chat: chatId }).populate('sender', 'username');
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
