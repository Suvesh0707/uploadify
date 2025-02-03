import dotenv from 'dotenv'
import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
dotenv.config({ path: './.env' })



const connectDB = async () =>{
    try {
       const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
       console.log("MONGODB Connected Successfully")
        
    } catch (error) {
        console.error("MongoDB Connection Error", error)
        process.exit(1)
    }
}

export default connectDB