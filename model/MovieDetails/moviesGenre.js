
import mongoose from "mongoose";

// Schema for Movie Genres
const moviesGenreSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
}, { timestamps: true });

const MoviesGenre = mongoose.model('MoviesGenre', moviesGenreSchema);

export default MoviesGenre;