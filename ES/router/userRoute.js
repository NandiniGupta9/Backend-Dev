import express from 'express';
const router= express.Router();
import{ userData } from "../data.js";



router.get("/user",(req,res)=>{
    res.render("user", { userData});
});
//add user
router.post("/api/user",(req,res)=>{
    const {name,age} =req.body;
    let newUserData ={
        id: userData.length+1,
        name,
        age
    }
    userData.push(newUserData);
    res.redirect('/user');
    
})

//user delete
router.delete("/api/user/:id",(req,res)=>{
    const userid =req.params.id;
    const useridx =userData.findIndex((ele)=>ele.id==userid);
    if(userid== -1)
{
    return res.send("user Not Found");
}
userData.splice(useridx,1);
res.redirect("/user")
});

// edit user
router.put("/api/user/:id",(req,res)=>{
    const {name,age}=req.body;
    const id=parseInt(req.params.id);
    const useridx = userData.findIndex((ele)=> ele.id== id);

    if(useridx === -1){
        return res.send("/userNoFound");
    }
    userData[useridx] = {id,name,age};
    res.redirect("/user");
})













export default router;