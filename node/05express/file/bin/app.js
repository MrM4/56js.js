

/*


 */

//引入express
let express=require("express");

//console.log(express);

//创建app应用
let app=express();
console.log(app);

//监听端口
app.listen(6589);

//监听请求，对应的给客户端返回数据      /表示跟路由
app.get("/",(request,response)=>{

    //最简单的返回
    response.send("Hello,World");
});