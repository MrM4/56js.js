
/*
    unlink     删除文件     不能删除文件夹

    readdir     读取文件夹目录信息

    rename      重命名,文件移动

    rmdir   删除文件夹   只能删除空文件夹
 */

const fs = require("fs");
const path=require("path")

let fp=path.join(__dirname,"/test");

//异步
//fs.unlink(fp,(err)=>{if(err)throw err});

//同步
//fs.unlinkSync(fp);


fs.readdir(fp,(err,info)=>{
    if(err){throw err};
    console.log(info);
})

/*

*/

let oldpath=path.join(__dirname,"/test/2.txt")
let newpath=path.join(__dirname,"/test/03.txt")
fs.rename(oldpath,newpath,(err)=>{if(err)throw err});