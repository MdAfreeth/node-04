import RecipeSchema from '../Model/RecipeSchema.js'

// Create Method Post
export const createRecipe = async (req, res) => {
  try {
    const newRecipe = new RecipeSchema(req.body);
    await newRecipe.save();
    res.status(200)
      .json({ message: "Recipe Added Sucessfully", data: newRecipe })

  } catch (error) {
    res.status(500)
      .json({ Message: error.message })

  }

}

// get method
export const getallrecipe = async (req, res) => {
  try {
    const getnewRecipe = await RecipeSchema.find();
    res.status(200)
      .json({ message: "Get Recipe Sucessfully", data: getnewRecipe })
  } catch (error) {
    res.status(500)
      .json({ Message: "Internal server Error in GetRecipeall Recipe", data: error })

  }
}

// find by Id

export const getRecipebyId = async (req, res) => {
  try {
    const RecipeId = req.params.id;
    const Recipe = await RecipeSchema.findById(RecipeId)
    if (!Recipe) {
      return res.status(404)
        .json({ message: "Recipe does not Found" })
    }
    res.status(200)
      .json({ message: "Reterived list Sucessfully ", data: Recipe })
  }


  catch (error) {
    res
      .status(500)
      .json({ message: error.message })

  }
}

export const UpdateRecipe = async(req,res)=>{
  try {
    const RecipeId = req.params.id;
    const {name,ingrediant,procedure,Duration}=req.body;
    const final = await RecipeSchema.findByIdAndUpdate(
      {_id:RecipeId},
      {name,ingrediant,procedure,Duration},
      {new:true},
      
    );

      if(final.matchedCount===0){
        return
       res.status(400)
       .json({Message:"Recipe Not FOund"})
      }
      res.status(200)
      .json({message:"Recipe Updated SucessFully",data:final})
    
  } catch (error) {
    res
    .status(500)
    .json({ message: error.message })
  }
}

export const deleteRecipe =async(req,res)=>{
  try {
    const RecipeId =req.params.id;
    const result= await RecipeSchema.findByIdAndDelete({_id:RecipeId})
    if(!result){
      return
      res.status(404)
      .json({message:"Recipe not Found"})
    }
    const recipe=await RecipeSchema.find();
    res.status(200)
    .json({message:"Recipe Delted Sucuessfully", data:recipe})
    
  } catch (error) {
    
    res
    .status(500)
    .json({ message: error.message })
  }

}