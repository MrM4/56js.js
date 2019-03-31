
/*
    GET请求
 */

const express =require("express");
const path=require("path");

let app=express();

app.listen(9785)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/index4.ejss"))    //发送html文件

})

app.get("/count",(req,res)=>{

    /*
        通常在获取客户端发送的数据时候，用到的几个api
            req.query
                存储客户端GET请求发送过来的数据

            req.body
     */
    console.log(req.query);
    res.send(`你的用户名是${req.query.user},你的密码是${req.query.password}`);
})
