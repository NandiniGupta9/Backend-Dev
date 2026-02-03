import express from 'express';
const app=express();
app.use("/static",express.static('public'));
const port=3000;
app.get("/",(req,res)=>{
    res.send("Server is running");
})
app.listen(port,()=>{
    console.log("server is running")
});