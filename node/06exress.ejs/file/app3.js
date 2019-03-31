

/*
    sendFile()

 */
const express =require("express");
const path=require("path");

let app=express();

app.listen(9785)

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/index.html"))    //发送html文件
})

