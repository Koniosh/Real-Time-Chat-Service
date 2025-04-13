// backend/routes/messageRoutes.js
const express = require('express');
const router = express.Router();
const {
  sendMessage,
  getMessageHistory, // ✅ Must match your controller export
} = require('../controllers/messageController');

// Send a message
router.post('/', sendMessage);

// Get message history for a chat
router.get('/:chatId', getMessageHistory);

module.exports = router;
