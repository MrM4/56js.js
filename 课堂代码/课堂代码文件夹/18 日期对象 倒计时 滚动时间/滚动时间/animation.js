
   
    /*animation(box,{
        width: "200px",
        height: "400px"
    },1000,function(){console.log("动画执行完毕")})*/

    function animation(ele,data,time,fn){
    //存储初始属性值
    let startValue = {} 

    //存储变化属性值 
    let changeValue = {} 

    // 获取起始时间
    let startTime = new Date() 

    // 获取初始属性值 之获取所有属性 所有ele的样式
    let startStyle = getStyle(ele)

    //遍历 目标值 根据属性 拿到初始样式的初始值  总路程 = 目标值-初始值  算出总路程
    for(let key in data){
        //key => width height

        //存 如width 的200  解决px问题 val => 初始值
        let val = parseFloat(startStyle[key])

        //解决 top left等默认没有值,.显示NaN的情况 如果是NaN 那就等于0
        val = isNaN(val)? 0 : val; 
        //把初始值存入初始值对象 得到startValue={width:200,height:200}
        startValue[key] = val;
        //总路程 等于 目标值 - 初始值   得到changeValue = {width:200-10,height:200-10}
        changeValue[key] = parseFloat(data[key]) - startValue[key];
    }

    //上面逻辑 计算出 总路程对象  初始时间  只需要执行计算 现在时间 获得变化时间 即可获得属性变化值

    change()
    function change(){
        //获取变化时间 = 现在时间 - 初始时间
        let nowTime = new Date - startTime;

        // t1 用于判断 变化时间是否等于 目标时间 如果等于 则到达目标
        let t1 = nowTime/time 

        //如果运行时间超过目标时间 则强制等于目标时间(时间并不会巧合到100%对等)
        if(t1 >= 1){
            t1 = 1
        }else{
            //如果没有超过目标时间,则继续回调
            //当前函数执行完毕 再进行下一次的执行
            requestAnimationFrame(change) 
        }

        //目的:计算 变化属性并赋值  总路程(总路程对象中) * 变化时间 (已经得出)/总时间(已知)
        //总路程 在总路程对象中 ,需要取出  所以for in遍历
        for(let key in changeValue){
            //val1 变化属性值 
            let val1 = t1*changeValue[key] + startValue[key]

            //变化属性值 给元素样式赋值
            ele.style[key] = val1 + "px"
        }
        //最后判断 t1 是否为 1表示函数确实结束
        if(t1 === 1){
            fn()
        }
    }
}

function getStyle(ele){
    return ele.currentStyle || getComputedStyle(ele)
}

