import mongoose from "mongoose";


// Schema for Staff
const moviesStaffSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String }, // e.g., director, writer, producer, etc.
}, { timestamps: true });

const MoviesStaff = mongoose.model('MoviesStaff', moviesStaffSchema);

export default MoviesStaff;