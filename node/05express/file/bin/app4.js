

/*

    指定中间件在特定的路由里面使用的方法
 */

const express=require("express");

const app=express();

app.listen(9875);

//在处理请求之前，先处理中间件函数，再处理请求。可以提前预处理一些事情

//方法一   使它只能在/index路由中使用
app.use("/index",(req,res,next)=>{
    req.name="哈哈中间件"
    next();
});

app.get("/index",(req,res)=>{
    res.send("访问了/index路由"+req.name);
});

app.get("/index/hh",(req,res)=>{
    res.send("访问了/index路由"+req.name);
});

app.get("/main",(req,res)=>{
    res.send(req.name+"访问了/main路由");
});