

const fs=require("fs");

const path=require("path");
//console.log(fs);

let filePath=path.join(__dirname,"/test/1.txt");
//读取文件内容
fs.readFile(filePath,(err,data)=>{      //异步API
    console.log(err);   //打印错误
    console.log(data.toString());  //读取的文件的内容
});
/*
    readFile
        参数：路径   编码（可选）  回调
 */
let data=fs.readFileSync(filePath,"utf-8");//同步API
console.log(data)