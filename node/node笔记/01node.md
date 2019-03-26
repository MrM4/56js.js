#### NodeJs  是什么
​        基于chrome  V8引擎的解析JavaScript的运行环境
​    编写node采用JavaScript代码，实际node在处理各种I/O操作，

​    高并发

​    Nodejs优点：处理请求      单线程

​    I/O 密集型      Nodejs更适合
​    CPU 密集型

​    服务器请求不大，可以承担后端任务
​    请求大，nodejs可以用来分发请求然后交给后端程序处理

​    Node 更偏向于应用

#### 常用黑窗口命令行操作
​    cd      进入目录       cd../   cd.\desk\

​    dir     展示当前目录下所有的文件夹和文件
​    ls      linux命令  cmd没有    展示当前目录下所有的文件夹和文件

​    cls     清屏
​    clear   Linux命令  cmd没有
​    ctrl+l  光标置顶

​    del ./1.tex     删除文件
​    
​    rm -rf/  删除系统所有文件 不能恢复

​    上下方向键可以切换历史命令记录

#### 关于Node运行js

​        nodejs  没有我们所了解的js里面的DOM和BOM（alert ,confirm,prompt）

#### node命令


​       node +文件名 执行文件

​       node 环境下的顶层对象    global  c

​       node +回车         进入REPL交互解析器         退出Ctrl+C*2

#### 作业： 安装node

​       熟练使用基础命令命令行
​       测试node 版本号 运行js文件 交互式解析器
​       了解基础node操作
*/
console.log(global);
console.log("haha")