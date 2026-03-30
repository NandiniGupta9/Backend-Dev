import express from "express";
const app = express();
import methodOverride from "method-override";

app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", "./views");
import userRoute from "./Router/userRoute.js";
import pageRoute from "./Router/pages.js";

app.use("/", pageRoute);
app.use("/api", userRoute);
app.use(express.urlencoded({extended:true}));



//get fruit list
app.get("/list", (req, res) => {
  let arr = ["Apple", "Mango", "Orange"];
  res.render("list", { arr });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});