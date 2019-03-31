

/*
    子路由功能
 */

const express=require("express");

const app=express();

app.listen(9875);

app.get("/index/zhuque",(req,res)=>{
    res.send("访问了zhuque路由");
});

app.get("/index/mm",(req,res)=>{
    res.send("访问了mm路由");
});
