

const express=require("express");

let router=express.Router();


router.get("/mm",(req,res)=>{
    res.send("访问了/mm路由");
});

router.get("/hh",(req,res)=>{
    res.send("访问了/hh路由");
});

router.get("/main",(req,res)=>{
    res.send("访问了/main路由");
});

module.exports=router;