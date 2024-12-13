import express from "express";
import { addCategory, deleteCategory, getCategory, updateCategory } from "../../controller/Category/categoryController.js";

const router = express.Router();



//categories
router.post("/categories", addCategory);
router.get("/categories", getCategory);
router.put("/categories/:id", updateCategory);
router.delete("/categories/:id", deleteCategory);


export default router;