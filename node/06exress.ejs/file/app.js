


/*
    Express
        * 安装
        * app应用的基础搭建（express(), .listen  get）
        * use(中间件  子路由express.Router)
        * get post all 请求对于客户端数据的接收不同点
        * req.body  req.query
        * res.send  res.sendFile
        * static 静态资源库
        * ejs模板引擎
        *跨域的服务端解决方案      "Access-Control-Allow-Origin":"http://localhost:63342"或者"*"

      补充：
        app.get("/user/:name",(req,res)=>{
             console.log(req.params.name);
        });

 */
const express=require("express");

const app=express();

const path=require("path")

app.listen(9785);

app.use("/",require(path.join(__dirname,"/routers/main")));
