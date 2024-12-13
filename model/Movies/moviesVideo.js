import mongoose from 'mongoose';

const moviesVideoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    url: { type: String, required: true }
  });

export default moviesVideoSchema;