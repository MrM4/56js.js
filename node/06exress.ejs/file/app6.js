
/*
    POST请求
 */

const express =require("express");
const path=require("path");

let app=express();

app.listen(9785)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/index6.html"))    //发送html文件

});


//再处理POST请求的时候，我们需要使用中间件将客户端传输来的数据格式化一下
app.use( express.urlencoded( {extended:true} ) )
app.post("/count",(req,res)=>{

    /*
        通常在获取客户端发送的数据时候，用到的几个api
            req.query
                存储客户端GET请求发送过来的数据
                不适用于POST请求

            req.body
                这个不能直接的拿到POST请求传过来的数据
                需要先使用express.urlencoded()中间件
     */
    console.log(req.body);
    res.send(`你的用户名是${req.body.user},你的密码是${req.body.password}`);
});