import mongoose from "mongoose";

const rescipesSchema = mongoose.Schema({
  name: String,
  procuger: String,
  ingredients: [],
  duriation: String,
});

const rescipes = mongoose.model("rescipes", rescipesSchema);
export default rescipes;
