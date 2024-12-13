import express from "express";

import { addGenre, deleteGenre, getGenre, updateGenre } from "../../controller/Movies/genreController.js";
import { addMoviesCharacterCharacter, deleteMoviesCharacter, getMoviesCharacter, updateMoviesCharacter } from "../../controller/MoviesDetails/moviesCharacterController.js";
import { addMoviesStaffs, deleteMoviesStaffs, getMoviesStaffs, updateMoviesStaffs } from "../../controller/MoviesDetails/moviesStaffsController.js";

const router = express.Router();

//genres
router.post("/genres", addGenre);
router.get("/genres", getGenre);
router.put("/genres/:id", updateGenre);
router.delete("/genres/:id", deleteGenre);


//characters
router.post("/characters", addMoviesCharacterCharacter);
router.get("/characters", getMoviesCharacter);
router.put("/characters/:id", updateMoviesCharacter);
router.delete("/characters/:id", deleteMoviesCharacter);

//staffs
router.post("/staff", addMoviesStaffs);
router.get("/staff", getMoviesStaffs);
router.put("/staff/:id", updateMoviesStaffs);
router.delete("/staff/:id", deleteMoviesStaffs);


export default router;