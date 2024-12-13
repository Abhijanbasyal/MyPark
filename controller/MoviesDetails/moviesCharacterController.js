
import MoviesCharacter from "../../model/MovieDetails/moviesCharacter.js";

// CRUD Operations for MoviesCharacter
export const addMoviesCharacterCharacter = async (req, res) => {
    try {
        const character = new MoviesCharacter(req.body);
        await character.save();
        res.status(201).send(character);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const getMoviesCharacter = async (req, res) => {
   try {
        const characters = await MoviesCharacter.find();
        res.send(characters);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateMoviesCharacter = async (req, res) => {
    try {
        const character = await MoviesCharacter.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!character) {
            return res.status(404).send();
        }
        res.send(character);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const deleteMoviesCharacter = async (req, res) => {
    try {
        const character = await MoviesCharacter.findByIdAndDelete(req.params.id);
        if (!character) {
            return res.status(404).send();
        }
        res.send(character);
    } catch (error) {
        res.status(500).send(error);
    }
};


  
  