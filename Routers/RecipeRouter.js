import express from 'express'
import { createRecipe, getallrecipe, getRecipebyId,UpdateRecipe,deleteRecipe }from '../Controllers/RecipeController.js'

const router =express.Router();

router.post('/create',createRecipe)
router.get('/getallrecipe',getallrecipe)
router.get('/getallrecipe/:id',getRecipebyId)
router.put('/UpdateRecipe/:id',UpdateRecipe)
router.delete('/deleteRecipe/:id',deleteRecipe)



export default router;