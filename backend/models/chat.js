


const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
  isGroupChat: { type: Boolean, default: false },
  chatName: { type: String },
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  latestMessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
  room: { type: mongoose.Schema.Types.ObjectId, ref: 'Room' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('chat', chatSchema);

