import Movie from "../../model/Movies/Movies.js";


// Add images to a Movie
export const addImagesToMovie = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }

        // Add a new image with title and URL
        const newImage = { title: req.body.title, url: req.body.url }; // Expecting a single object
        movie.imageSlider.push(newImage); // Add the image object to the imageSlider array

        // Save the updated movie
        await movie.save();

        res.status(200).json(newImage); // Send back the newly added image
    } catch (err) {
        next(err);
    }
};



// Get images for a specific movie
export const getMovieImage = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });

        res.status(200).json(movie.imageSlider); // Return the images
    } catch (err) {
        next(err);
    }
};

// Update a specific image in the movie
export const updateMovieImage = async (req, res, next) => {
    try {
        const movie = await Movie.findById(req.params.movieId);
        if (!movie) return res.status(404).json({ message: 'Movie not found' });

        const image = movie.imageSlider.id(req.params.imageId);
        if (!image) return res.status(404).json({ message: 'Image not found' });

        image.title = req.body.title || image.title;
        image.url = req.body.url || image.url;
        await movie.save();

        res.status(200).json(movie);
    } catch (err) {
        next(err);
    }
};

// Delete an image from the movie   
export const deleteMovieImage = async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.params.movieId);
      if (!movie) return res.status(404).json({ message: 'movie not found' });
  
      // Filter out the image with the matching imageId
      movie.imageSlider = movie.imageSlider.filter(
        (image) => image._id.toString() !== req.params.imageId
      );
  
      // Save the updated movie
      await movie.save();
  
      res.status(200).json({ message: 'Image deleted successfully', movie });
    } catch (err) {
      next(err);
    }
  };
  


  