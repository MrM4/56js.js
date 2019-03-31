
/*
    两种请求方式

 */
const express =require("express");
const path=require("path");

let app=express();

app.listen(9785)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/index7.html"))    //发送html文件

});


//再处理POST请求的时候，我们需要使用中间件将客户端传力啊的数据格式化一下
app.use( express.urlencoded( {extended:true} ) );

//接收两种请求方式
app.all("/count",(req,res)=>{

    let data={ ...req.query,...req.body};
    console.log(data);
    res.send(`你的用户名是${data.user},你的密码是${data.pwd}`);
});