import express from 'express';
const app=express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.render("index")
});


 let userData=[
        {id:1,name:"nandini",age: "20",},
        {id:2,name:"mahak",age: "21",},
        {id:3,name:"teesha",age: "21",},
 
];
app.get("/user",(req,res)=>{
   
    res.render("user",{userData});
})
app.get("/list",(req,res)=>{
    let arr=["apple","mango","strawberry"]
    res.render("list",{arr})
})
app.post("/api/user",(req,res)=>{
    const {name,age} =req.body;
    let newUserData ={
        id: userData.length+1,
        name,
        age
    }
    userData.push(newUserData);
    res.redirect('/user');
    
})
app.get("/api/user/:id",(req,res)=>{
    const userid =req.params.id;
    const useridx =userData.findIndex((ele)=>ele.id==userid);
    if(userid== -1)
{
    return res.send("/userNotFound")
}
userData.splice(useridx,1);
res.redirect("/user")
});
app.get("/userNotFound",(req,res)=> {
    res.render("userNotFound")
})
app.listen(3000,()=>{
    console.log("server is running")
})