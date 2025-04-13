


const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { generateToken } = require('../utils/generateToken');

// Helper function to register a new user
const registerUser = async (username, email, password) => {
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error('Email already in use');
  
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    username,
    email,
    password: hashedPassword
  });

  await newUser.save();
  return newUser;
};

// Helper function to login a user
const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = generateToken(user._id);
  return { token, user };
};

module.exports = { registerUser, loginUser };

