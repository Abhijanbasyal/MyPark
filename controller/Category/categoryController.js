import MoviesCategory from "../../model/Category/moviesCategory.js";

// CRUD Operations for MoviesCategory
export const addCategory = async (req, res) => {
    try {
        const category = new MoviesCategory(req.body);
        await category.save();
        res.status(201).send(category);
    } catch (error) {
        next(error);
    }
};


export const getCategory = async (req, res) => {
    try {
        const categories = await MoviesCategory.find();
        res.send(categories);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateCategory = async (req, res) => {
    try {
        const category = await MoviesCategory.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!category) {
            return res.status(404).send();
        }
        res.send(category);
    } catch (error) {
        next(error);
    }
};




export const deleteCategory = async (req, res) => {
    try {
        const category = await MoviesCategory.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).send();
        }
        res.send(category);
    } catch (error) {
        next(error);
    }
};




