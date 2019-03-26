/*


    导入文件
        通过require 来帮助我们引入其他的文件
        引入自己写的文件必须从.目录开始，即使在同一目录，也不能直接写文件名

        require的返回值，就是模块的exports

        在nodejs里面，每个单独的js文件就是一个模块
        在某个模块里面，引入其他模块的时候，相当于是在局部作用域运行了其他模块的代码
 */
//require();

/*

    exports 默认值是一个空对象

*/

// console.log(require);
let x=require("./02.js");
console.log(x);