
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');  
const { validateRequest } = require('../middlewares/validateRequest'); 
const { loginValidation, registerValidation } = require('../utils/validators'); 

// Register route
router.post('/register', registerValidation, validateRequest, authController.register);

// Login route
router.post('/login', loginValidation, validateRequest, authController.login);

// Token verification route (protected)
router.get('/verify', authController.verifyToken);

module.exports = router;
