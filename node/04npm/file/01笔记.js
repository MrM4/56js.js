

/*
    npm (Node Package Manager)


    npm 初始化     npm init

    npm init -y     自动应答



    包安装
    npm install express(packageName)     express 依赖
            安装的时候需要带上一些参数   --save/ -s  当前项目所依赖的包 生产环境--项目上线之后，还需要依赖的

     npm i cnpm -g(全局安装) 安装淘宝镜像   一劳永逸

                -dev /-D 当前项目所依赖的包 开发环境--只在开发过程中依赖，项目上线之后就不用了

     install缩写 i


     包卸载
        npm uninstall 包名
            卸载的时候，请带上安装时候的参数

      更新
        npm update express -s /包名@版本号

      上传到npm服务器
        npm publish

       删除上传的包

        npm unpublish --force


        npm list
            展示当前安装的包

     分享项目时node_modules可以删除

     项目上线时node_modules不能删

 */