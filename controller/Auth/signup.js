import bcrypt from 'bcryptjs';
import userModel from '../../model/Users/Users.js';
import { createError } from '../../utils/error.js'; 

export const signup = async (req, res, next) => {
  try {
    const { username, email, password, roles } = req.body;

    if (!username || !email || !password) {
      return next(createError(400, 'Username, email, and password are required'));
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return next(createError(400, 'Invalid email format'));
    }

    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return next(createError(409, 'Email already registered'));
    }

    const existingUser = await userModel.findOne({ username });
    if (existingUser) {
      return next(createError(409, 'Username already exists'));
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      username,
      email,
      password: hashedPassword,
      roles: roles || 'USER',
    });

    await newUser.save();
    res.status(201).json({ message: 'User created successfully', userId: newUser._id });
  } catch (error) {
    next(error);
  }
};
