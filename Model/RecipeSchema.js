import mongoose from "mongoose";


const RecipeSchema =mongoose.Schema({
   name:String,
   ingrediant:[],
   Procedure:String,
   Duration:String,



})
const Recipes=mongoose.model("recipes",RecipeSchema)

export default Recipes