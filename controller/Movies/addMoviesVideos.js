import Movie from "../../model/Movies/Movies.js";



// Add a new video to a movie
export const addVideoToMovie = async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.params.id);
      if (!movie) return res.status(404).json({ message: 'movie not found' });
  
      // const newVideos = req.body.videos; // Expecting an array of {title, url}
      const newVideos = { title: req.body.title, url: req.body.url }; // Expecting a single object
      movie.videoOfMovies.push(newVideos);
      await movie.save();
  
      res.status(200).json(movie);
    } catch (err) {
      next(err);
    }
  };
  
  // Get videos for a specific movie
  export const getMovieVideos = async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.params.movieId);
      if (!movie) return res.status(404).json({ message: 'movie not found' });
  
      res.status(200).json(movie.videoOfMovies); // Return the videos
    } catch (err) {
      next(err);
    }
  };
  
  
  // Update a specific video in the movie
  export const updateMovieVideo = async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.params.movieId);
      if (!movie) return res.status(404).json({ message: 'movie not found' });
  
      const video = movie.videoOfMovies.id(req.params.videoId);
      if (!video) return res.status(404).json({ message: 'Video not found' });
  
      video.title = req.body.title || video.title;
      video.url = req.body.url || video.url;
      await movie.save();
  
      res.status(200).json(movie);
    } catch (err) {
      next(err);
    }
  };
  
  
  
  // Delete a video from the movie
  export const deleteMovieVideo = async (req, res, next) => {
    try {
      const movie = await Movie.findById(req.params.movieId);
      if (!movie) return res.status(404).json({ message: 'movie not found' });
  
      // Filter out the video with the matching videoId
      movie.videoOfMovies = movie.videoOfMovies.filter(
        (video) => video._id.toString() !== req.params.videoId
      );
  
      // Save the updated movie
      await movie.save();
  
      res.status(200).json({ message: 'Video deleted successfully', movie });
    } catch (err) {
      next(err);
    }
  };
  
