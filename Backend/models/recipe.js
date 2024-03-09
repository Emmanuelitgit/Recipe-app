import mongoose from "mongoose";

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  id: String,
  name: String,
  image: String,
  rating: String,
  ingredients: [String],
  time: String,
  difficulty: String,
  calories: String,
  color: String,
  description: String,
  steps: [String],
}, {timestamps:true});


export const Recipe = mongoose.model('Recipe', recipeSchema);

