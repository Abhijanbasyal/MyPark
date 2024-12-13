import mongoose from 'mongoose';

const moviesImageSchema = new mongoose.Schema({
  title: { type: String, required: true },
  url: { type: String, required: true }
});

export default moviesImageSchema;
