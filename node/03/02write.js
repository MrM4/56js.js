
/*
    writeFile
 */

const fs=require("fs");
const path=require("path");

let filePath=path.join(__dirname,"test/2.txt");

//写入文件
fs.writeFile(filePath,"你真帅",{flag:"a"},()=>{})

fs.writeFileSync()