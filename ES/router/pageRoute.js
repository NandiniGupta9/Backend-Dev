import express from 'express';
const router= express.Router();



//render index page
router.get("/",(req,res)=>{
    res.render("index")
});
//render edit page
router.get("/editpage/:id",(req,res)=>{
    const id=req.params.id;
    const user=userData.find((ele)=>ele.id==id);
    console.log(user);
    
    res.render("edit",{userData:[user]});
});
//get user
router.get("/user",(req,res)=>{
   
    res.render("user",{userData});
});
export default router;