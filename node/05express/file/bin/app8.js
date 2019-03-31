

const express=require("express");

const app=express();

app.listen(9875);

//使用use调用子路由
app.use("/index",require("../routers/teacher"));


/*
app.get("/index/mm",(req,res)=>{
    res.send("访问了/mm路由");
});

app.get("/index/hh",(req,res)=>{
    res.send("访问了/hh路由");
});

app.get("/index/main",(req,res)=>{
    res.send("访问了/main路由");
});
*/