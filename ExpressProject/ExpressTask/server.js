const express=require('express');
const app=express();

//get route 
app.get("/users/:id/profile",(req,res)=>{
const userid=req.params.id;
 const tab=req.query.tab;
 const lang=req.query.lang;
 res.json({
  userid:userid,
  selectedtab:tab,
  language:lang

 });

});
app.listen(3000,()=>{
console.log('server is runnning o local host 3000');});