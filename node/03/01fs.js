
//引入模块
const fs=require("fs");

const path=require("path");
//console.log(fs);

let filePath=path.join(__dirname,"/test/1.txt");


//读取文件内容
fs.readFile(filePath,"utf8",(err,data)=>{      //异步API
    console.log(err);   //打印错误
    //throw err;        报错
    console.log(data);  //缓冲区 <Buffer 6e 69 7a 68 65 6e 73 68 75 61 69 2c e4 bd a0 e7 9c 9f e5 b8 85>
     //utf-8存储格式中   三个字节表示一个汉字
    console.log(data.toString());  //读取的文件的内容
});
/*
    readFile参数
        (路径 ,编码（可选),回调)
        异步回调函数的第一个参数时err参数
 */



let data=fs.readFileSync(filePath,"utf-8");//同步API
console.log(data);
/*同步代码报错方法
        try{
            console.log(a);
        }catch{
            try里面的内容错了会
        }

 */
/*
        try{
            console.log(a);
        }catch(e){
            console.log("try里面的内容错误")
            console.log(e)
            //throw e
        }
*/