import express from "express";


import { addMovies, deleteMovies, getLatestMovies, getMovieById, getMovies, updateMovies } from "../../controller/Movies/moviesController.js";
import { addImagesToMovie, deleteMovieImage, getMovieImage, updateMovieImage } from "../../controller/Movies/addMoviesImage.js";
import { addVideoToMovie, deleteMovieVideo, getMovieVideos, updateMovieVideo } from "../../controller/Movies/addMoviesVideos.js";


const router = express.Router();



// get the two latest added movies
router.get('/latest', getLatestMovies);

//movies
router.post("/movies", addMovies);
router.get("/movies", getMovies);
router.put("/movies/:id", updateMovies);
router.delete("/movies/:id", deleteMovies);
router.get("/movies/:id", getMovieById);

// Add images to a movie
router.post('/:id/images', addImagesToMovie);
router.get('/:movieId/images', getMovieImage);
router.put('/:movieId/images/:imageId', updateMovieImage);
router.delete('/:movieId/images/:imageId', deleteMovieImage);

// Add a video to movie
router.post('/:id/videos', addVideoToMovie); 
router.get('/:movieId/videos', getMovieVideos);
router.put('/:movieId/videos/:videoId', updateMovieVideo); 
router.delete('/:movieId/videos/:videoId', deleteMovieVideo); 






export default router;