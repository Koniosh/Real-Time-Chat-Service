const express = require('express');
const router = express.Router();
const {
  sendMessage,
  getMessageHistory, 
} = require('../controllers/messageController');

// Send a message
router.post('/', sendMessage);

// Get message history for a chat
router.get('/:chatId', getMessageHistory);

module.exports = router;
