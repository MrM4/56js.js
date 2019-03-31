

const express=require("express");

const app=express();

app.listen(9875);

/*
    只有监听过的路由，才能正常访问
 */

//跟路由
app.get("/",(req,res)=>{
    
    req.name="你好"
    res.send("访问了/路由"+req.name)
});

/*
//http里面  /main 不是文件夹的内容，是路由
app.get("/main",(req,res)=>{
    res.send("访问了/main路由")
});
*/

