

/*
    中间件 app.use()

    //对路由监听的回调函数都属于中间件
 */

const express=require("express");

const app=express();

app.listen(9875);

//在处理请求之前，先处理中间件函数，再处理请求。可以提前预处理一些事情
app.use((req,res,next)=>{
    req.name="哈哈中间件"
    next();     //第三个参数必须执行以后才能继续向后执行
});

app.get("/",(req,res)=>{
    res.send("访问了/路由"+req.name);
});

app.get("/main",(req,res)=>{
    res.send(req.name+"访问了/main路由");
});