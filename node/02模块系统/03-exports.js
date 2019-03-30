

/*

    模块最终导出的是 module.exports  ,exports和它是引用关系

    exports=module.exports


 */

let x=10;
let y=20;

// exports.x=x;
// exports.y=y;
module.exports={x,y}