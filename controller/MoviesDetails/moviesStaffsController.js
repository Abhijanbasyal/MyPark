
import MoviesStaff from "../../model/MovieDetails/moviesStaff.js";


// CRUD Operations for MoviesCharacter
export const addMoviesStaffs = async (req, res) => {
    try {
        const staff = new MoviesStaff(req.body);
        await staff.save();
        res.status(201).send(staff);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const getMoviesStaffs = async (req, res) => {
    try {
        const staff = await MoviesStaff.find();
        res.send(staff);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateMoviesStaffs = async (req, res) => {
    try {
        const staff = await MoviesStaff.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!staff) {
            return res.status(404).send();
        }
        res.send(staff);
    } catch (error) {
        res.status(400).send(error);
    }
};


export const deleteMoviesStaffs = async (req, res) => {
    try {
        const staff = await MoviesStaff.findByIdAndDelete(req.params.id);
        if (!staff) {
            return res.status(404).send();
        }
        res.send(staff);
    } catch (error) {
        res.status(500).send(error);
    }
};



