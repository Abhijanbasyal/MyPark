import mongoose from "mongoose";



// Schema for Characters
const moviesCharacterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    role: { type: String }, // e.g., protagonist, antagonist, etc.
    description: { type: String },
}, { timestamps: true });

const MoviesCharacter = mongoose.model('MoviesCharacter', moviesCharacterSchema);

export default MoviesCharacter;