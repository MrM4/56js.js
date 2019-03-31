
const express=require("express");

const path=require("path");

let app =express();

/*
    express.static()
        开放静态资源库
 */
app.listen(9785)

//公开一个个文件夹，客户端可以直接的访问到里面的文件
app.use( express.static(path.join(__dirname,"static")) );

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname,"view/index8.html"));
});

// app.get("/static/css/index.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,"static/css/index.css"))
// })