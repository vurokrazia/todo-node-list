/* eslint-disable no-useless-catch */

const User = require('../../models/User');


const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    return await User.find({});
  } catch (error) {
    throw error;
  }
};

const getUserById = async (userId) => {
  try {
    return await User.findById(userId);
  } catch (error) {
    throw error;
  }
};

const updateUser = async (userId, updateData) => {
  try {
    return await User.findByIdAndUpdate(userId, updateData, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (userId) => {
  try {
    return await User.findByIdAndDelete(userId);
  } catch (error) {
    throw error;
  }
};

const findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  findUserByEmail,
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};
