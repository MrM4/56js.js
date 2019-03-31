
const express=require("express");
const path=require("path");
const app=express();

app.listen(5689);

/*
app.get("/user/:name",(req,res)=>{
    console.log(req.params.name);
});
*/

//跨域问题
app.get("/lol",(req,res)=>{
    res.set({
        "Access-Control-Allow-Origin":"http://localhost:63342" //解除63342域限制
    });
    console.log("success");
    res.send("请求返回了");
});