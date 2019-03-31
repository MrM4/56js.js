

/*
    require和response



 */
const express=require("express");
const path=require("path");

let app=express();

app.listen(9785);

app.get("/",(req,res)=>{
    res.send("Hello express")
});

//添加网页自动发送的icon图标请求
app.get("/favicon.ico",(req,res)=>{
    //图标请求，给客户地段返回一个图片
    res.sendFile( path.join(__dirname,"images/logo.ico") );
});