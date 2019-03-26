

/*

    let a=10;
    let b=a;    //赋值

 */
/*
    等号右边是对象
    那么两边的关系是引用关系，任意一边的属性变化就会引起对方的变化

 */

let a={};
let b=a;    //引用关系

/*
    b.name="fei"

    console.log(a.name)=>"fei"

 */