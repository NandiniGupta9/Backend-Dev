import express from 'express';
import userRoute from "./router/userRoute.js"
import registrationRoute from "./router/registrationRoute.js"
import dashboard from "./router/dashboard.js"
const port=3000;
const app=express()
app.use("/api",userRoute)
app.use("/api",registrationRoute)
app.use("/api",dashboard)
app.listen(port,()=>{
    console.log("server is running on port "+ port)
})