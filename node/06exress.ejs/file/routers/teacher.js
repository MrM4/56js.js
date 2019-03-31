

const express=require("express");

let router=express.Router();

router.get("/text",(req,res)=>{
    res.send("访问了teacher下面的text页面")
});

router.get("/web",(req,res)=>{
    res.send("访问了teacher下面的web页面")
});

module.exports=router;
