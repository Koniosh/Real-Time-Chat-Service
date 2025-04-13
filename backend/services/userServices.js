const User = require('../models/user');

// Get user profile by ID
const getUserProfile = async (userId) => {
  const user = await User.findById(userId);
  if (!user) throw new Error('User not found');
  return user;
};

// Update user status
const updateUserStatus = async (userId, status) => {
  const user = await User.findByIdAndUpdate(userId, { status }, { new: true });
  if (!user) throw new Error('User not found');
  return user;
};

module.exports = { getUserProfile, updateUserStatus };
