
import Movie from "../../model/Movies/Movies.js";


// CRUD Operations for Movies
export const addMovies = async (req, res) => {
    try {
        const movie = new Movie(req.body);
        await movie.save();
        res.status(201).send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const getMovies = async (req, res) => {
    try {
        const movies = await Movie.find().populate('categories genres characters staff');
        res.send(movies);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateMovies = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!movie) {
            return res.status(404).send();
        }
        res.send(movie);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const deleteMovies = async (req, res) => {
    try {
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if (!movie) {
            return res.status(404).send();
        }
        res.send(movie);
    } catch (error) {
        res.status(500).send(error);
    }
};


  
  
  
  // Get the total number of movies
  export const getTotalMovies = async (req, res, next) => {
    try {
      const totalMovies = await Movie.countDocuments();
      res.status(200).json({ totalMovies });
    } catch (err) {
      next(err);
    }
  };
  
  
  
  // Get the two latest added movies
  export const getLatestMovies = async (req, res, next) => {
    try {
      const latestMovies = await Movie.find()
        .sort({ createdAt: -1 }) // Sort by createdAt in descending order (newest first)
        .limit(2); // Limit the result to 2 movies
  
      res.status(200).json(latestMovies); // Send the two latest movies
    } catch (err) {
      next(err);
    }
  };
  
  
