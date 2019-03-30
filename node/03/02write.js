
/*
    writeFile
 */

const fs=require("fs");
const path=require("path");
let fp= path.join( __dirname,"test/2.txt");

//写入文件
//异步API
fs.writeFile(fp,"你真帅",{ encoding:"utf-8",flag:"a"},(err)=>{console.log(err)})

//同步API
fs.writeFileSync(fp,"你真漂亮")



//fs.appendFile()