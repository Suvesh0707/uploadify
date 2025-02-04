dotenv.config({path:"./.env"})
import connectDB from "./db/index.js"
import dotenv from "dotenv"
import app from "./app.js"


connectDB()
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`app is listening at port: ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log("MongoDB connection failed !!", error)
})

