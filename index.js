import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectionDB from './Database/dbConfig.js'
import RecipeRouter from './Routers/RecipeRouter.js'


dotenv.config();
const app =express();
app.use(cors());

app.use(express.json())
connectionDB();


app.get('/',(req,res)=>{
    res.status(200)
    res.send("Welcome to our API")
})

app.use('/api/recipe',RecipeRouter)

const port=process.env.PORT || 4000


app.listen(port,()=>{
    console.log("Server Started Sucessfully");
    
})