import mongoose from "mongoose";

// Main Movies Schema
const moviesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MoviesCategory' }], // Multiple categories
    genres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MoviesGenre' }], // Multiple genres
    description: { type: String, required: true },
    socialMedia: {
        twitter: { type: String },
        instagram: { type: String },
        reddit: { type: String },
        youtube: { type: String },
        facebook: { type: String },
    },
    releasedOn: { type: Date },
    duration: { type: String }, // e.g., "2h 30m"
    parental: { type: String, enum: ['18+', 'PG13', 'Kids'] },
    characters: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MoviesCharacter' }], // Multiple characters
    staff: [{ type: mongoose.Schema.Types.ObjectId, ref: 'MoviesStaff' }], // Multiple staff
    imagesUrl: { type: String, required: true },
    videosUrl: { type: String, required: true },
}, { timestamps: true });

const Movie = mongoose.model('Movie', moviesSchema);

export default Movie;