import express from 'express';
const app=express();
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("index")
})
app.get("/user",(req,res)=>{
    let userData={
        name:"nandini",
        age: "20",
    }
    res.render("user",{userData});0
})
app.get("/list",(req,res)=>{
    let arr=["apple","mango","strawberry"]
    res.render("list",{arr})
})
app.listen(3000,()=>{
    console.log("server is running")
})