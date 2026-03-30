import express from "express";
const router = express();
import methodOverride from "method-override";


router.use(methodOverride("_method"));
router.use(express.urlencoded({extended:true})); 

import { userData } from "../data.js";

//user details
router.get("/user", (req, res) => {
  res.render("user", { userData });
});


//update user
router.put("/user/:id",(req,res)=>{
    const id=parseInt(req.params.id);
    const {name,age}=req.body;
    const useridx=userData.findIndex((ele)=>ele.id===id);
    console.log(useridx);
    console.log(userData[0]);
    if(useridx==-1){
        return res.send("User not Found");
    } 
    // userData[useridx].name=name;
    // userData[useridx].age=age;
    userData[useridx]={id,name,age};
    res.redirect("/api/user");
});

//register new user
router.post("/user",(req,res)=>{
     const {name,age}=req.body;
     let newUserData={
        id:userData.length+1,
        name,
        age,
     }
     userData.push(newUserData);
     res.redirect("/api/user");
})

//delete user
router.delete("/user/:id", (req, res) => {
  const userid = req.params.id;
  const useridx = userData.findIndex((ele) => ele.id == userid);
  if (useridx ==-1) {
    return res.send("User not Found");
  }
  userData.splice(useridx, 1);
  res.redirect("/api/user");
});

export default router;