

/*
    request
        在node里面向其他服务器端发起请求的模块

 */

const request=require("request");

request({
    method:"GET",
    url:"http://www.baidu.com",
    },(err,res,body)=>{
    console.log(body);
    fs.writeFile()
})