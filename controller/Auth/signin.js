import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import userModel from '../../model/Users/Users.js';
import { createError } from '../../utils/error.js';




export const signin = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    // Validate input
    if (!username || !password) {
      return next(createError(400, 'Username and password are required'));
    }

    // Check if user exists
    const user = await userModel.findOne({ username });
    if (!user) {
      return next(createError(404, 'User not found'));
    }

    // Validate password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return next(createError(401, 'Invalid credentials'));
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user._id, roles: user.roles }, // Payload
      process.env.SECRET_KEY_JWT, // Secret key
      { expiresIn: '1h' } // Token expiration
    );

    // Set the token as an HTTP-only cookie
    res.cookie('access_token', token, {
      httpOnly: true, 
    });

    // Respond with success
    res.status(200).json({
      message: 'Sign in successful',
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        roles: user.roles,
      },
    });
  } catch (error) {
    next(error);
  }
};
