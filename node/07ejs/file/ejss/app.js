/*

 */

const express=require("express");
const app=express();

app.listen(9527);

//使用set加载模板引擎
app.set("view engine","ejs");

app.get("/",(req,res)=>{

    //假设这是从数据库拿到的老师的信息
    //我们现在要把这些老师信息渲染到前端页面
    let data={
            teachers:[
                {name:"阿飞",age:"18",sex:1},
                {name:"朱雀",age:"28",sex:0},
                {name:"心艾",age:"28",sex:0},
                {name:"岩心",age:"48",sex:0},
                {name:"朝歌",age:"58",sex:1},
                {name:"银时",age:"28",sex:1},
            ]
    }

    /*
        调用模板引擎，处理完成之后，自动发送给客户端
        模板路径可以是绝对路径，但是我们一般建议使用相对路径
        render默认会去view文件夹里去找模板引擎文件
    */
    res.render("index",data);
});

