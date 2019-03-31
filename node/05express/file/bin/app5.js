

const express=require("express");

const app=express();

app.listen(9875);

//在处理请求之前，先处理中间件函数，再处理请求。可以提前预处理一些事情

//在中间件比较长的时候，我们会把中间件提出来（其实为了代码可读性）
app.use("/index",require("../middle/index"));

app.get("/index",(req,res)=>{
    res.send("访问了/index路由"+req.name);
});

app.get("/main",(req,res)=>{
    res.send(req.name+"访问了/main路由");
});