

const express=require("express");
const path =require("path")
let router=express.Router();

router.get("/index",(req,res)=>{
    res.send("访问了index路由")
});

router.get("/teacher",(req,res,next)=>{
    res.send("访问了teacher路由")
});

router.use("/teacher",require(path.join(__dirname,"teacher")));

module.exports=router;