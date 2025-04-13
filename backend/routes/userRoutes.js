const express = require('express');
const { getUserProfile, updateStatus } = require('../controllers/usercontroller');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:userId', authMiddleware, getUserProfile);
router.put('/:userId/status', authMiddleware, updateStatus);

module.exports = router;
