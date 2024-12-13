import mongoose from 'mongoose';

const moviesCategorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    }
}, { timestamps: true });

const MoviesCategory = mongoose.model('MoviesCategory', moviesCategorySchema);

export default MoviesCategory;
