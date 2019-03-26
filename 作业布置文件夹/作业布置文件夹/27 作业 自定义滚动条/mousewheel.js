function mousewheel(ele, cb){
  /*
    滚动方向为：e.wheelDetail   正值向前   负值向后
  */

  // 确定事件type
  var type = "mousewheel"
  if(ele.onmousewheel === undefined){
    type = "DOMMouseScroll"
  }
  
  // 真正的事件函数
  function typeFn(e){
    e = e || window.event
    // 把滚轮事件的方向 处理一致
    e.wheelDetail = e.wheelDelta / 120 || e.detail / -3
    cb.call(this, e)
  }

  // 判断是否支持 addEventListener
  if(ele.addEventListener){
    ele.addEventListener(type, typeFn)
  }else{
    ele.attachEvent("on"+type, typeFn)
  }
}