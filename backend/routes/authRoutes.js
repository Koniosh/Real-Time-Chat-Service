
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  // Import auth controller
const { validateRequest } = require('../middlewares/validateRequest');  // Import request validation middleware
const { loginValidation, registerValidation } = require('../utils/validators');  // Import validation functions

// Register route
router.post('/register', registerValidation, validateRequest, authController.register);

// Login route
router.post('/login', loginValidation, validateRequest, authController.login);

// Token verification route (protected)
router.get('/verify', authController.verifyToken);

module.exports = router;
