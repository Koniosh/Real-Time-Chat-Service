const Chat = require('../models/chat');
const Room = require('../models/room');

// Create a new chat
exports.createChat = async (req, res) => {
  const { users, isGroupChat, roomId } = req.body;

  try {
    const room = await Room.findOne({ roomId });
    if (!room) return res.status(400).json({ message: 'Room does not exist' });

    const chat = new Chat({
      users,
      isGroupChat,
      room: room._id
    });

    await chat.save();
    res.status(201).json(chat);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all chats for a user
exports.getChats = async (req, res) => {
  const { userId } = req.params;

  try {
    const chats = await Chat.find({ users: userId }).populate('users', 'username email');
    res.status(200).json(chats);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
