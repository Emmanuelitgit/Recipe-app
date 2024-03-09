import mongoose from "mongoose";
import {Recipe} from "../models/recipe.js";
import { User } from "../models/user.js";

export const getRecipes = async (req, res) => {
    try {
        const recipeList = await Recipe.find();

        if (!recipeList) {
            return res.status(404).json({ message: "Data not found" });
        }
        return res.status(200).json(recipeList);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};

export const getRecipe = async (req, res) => {
    try {

        const {id} = req.params

        const recipe = await Recipe.findById(id);

        if (!recipe) {
            return res.status(404).json({ message: "Data not found" });
        }
        return res.status(200).json(recipe);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal server error" });
    }
};
