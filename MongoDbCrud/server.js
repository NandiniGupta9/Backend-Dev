import dotenv from "dotenv";
import connectDb from "./config/db.js";
import express from "express";
import userRoutes from "./routes/userRoutes.js";


dotenv.config();
connectDb();

const app = express();
const port = process.env.PORT || 5000;



app.use("/api",userRoutes)

 app.listen(port,()=>{
    console.log("Server is running on port",port)
 })
 
