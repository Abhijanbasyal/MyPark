import MoviesGenre from "../../model/MovieDetails/moviesGenre.js";


// CRUD Operations for Genre
export const addGenre = async (req, res) => {
    try {
        const genre = new MoviesGenre(req.body);
        await genre.save();
        res.status(201).send(genre);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const getGenre = async (req, res) => {
    try {
        const genres = await MoviesGenre.find();
        res.send(genres);
    } catch (error) {
        res.status(500).send(error);
    }
};


export const updateGenre = async (req, res) => {
    try {
        const genre = await MoviesGenre.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!genre) {
            return res.status(404).send();
        }
        res.send(genre);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteGenre = async (req, res) => {
    try {
        const genre = await MoviesGenre.findByIdAndDelete(req.params.id);
        if (!genre) {
            return res.status(404).send();
        }
        res.send(genre);
    } catch (error) {
        res.status(500).send(error);
    }
};




