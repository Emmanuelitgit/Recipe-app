import express from "express";
import { getRecipes, getRecipe } from "../controllers/recipe.js";

const router = express.Router()

router.get("/recipe-list", getRecipes);
router.get("/recipe/:id", getRecipe);

export default router;