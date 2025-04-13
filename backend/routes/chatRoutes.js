const express = require('express');
const { createChat, getChats } = require('../controllers/chatController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createChat);
router.get('/:userId', authMiddleware, getChats);

module.exports = router;
