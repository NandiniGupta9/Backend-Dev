import express, { Router } from "express";
const router = express();
router.set("view engine", "ejs");
router.set("views", "./views");
import methodOverride from "method-override";
router.use(methodOverride("_method"));

import { userData } from "../data.js";

router.use(express.urlencoded({extended:true}));
//home page
router.get("/", (req, res) => {
  res.render("index");
});

//edit page
router.get("/editpage/:id", (req, res) => {
  const id=req.params.id;
  console.log(id);
  const user=userData.find((ele)=>ele.id==id);

  res.render("edit",{userData:[user]});
});

export default router;