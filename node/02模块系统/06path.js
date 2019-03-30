

/*
    path    原生模块
        path模块提供用于处理文件路径和目录路径的实用工具。

    __dirname   E:\zhuque.js\node\02模块系统


    __filename  E:\zhuque.js\node\02模块系统\06path.js

    let m=path.join('c','m')    c/m
 */

const path=require('path');
let x=path.extname("index.html")
console.log(x)
console.log(__dirname)

console.log(__filename);
let m=path.join('c','m')
console.log(m)

let n=path.resolve("a/g","b","c")      // /b 会返回根目录继续查找b   E:\b\c
console.log(n);



