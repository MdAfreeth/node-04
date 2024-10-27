import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();


const ConnectionDB = async()=>{
   try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log("Mongoose Connected Sucessfully");
    
   } catch (error) {
    console.log(error);
    
   }
}

export default ConnectionDB;

