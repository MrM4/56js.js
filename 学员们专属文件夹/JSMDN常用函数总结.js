/*
  2018/08/25 更新日志:增加 六：条件操作符判断
  2018/09/04 更新日志:增加 六.5.三元运算，六.1.注意下 ，七、eval函数使用示例
*/
一.数组Array常用方法
1. 使用reduce
const arr = [{
		"code": "badge",
		"priceList": [{
			"amount": 3000
		}]
	},

	{
		"code": "DigitalPhoto",
		"priceList": [{
			"amount": 1990
		}]
	}
]

let arr2 = arr.reduce((pre, cur) => {
	pre[cur.code] = cur.priceList
	return pre
}, {})
console.log(arr2)
// 打印结果：

// { badge: [ { amount: 3000 } ],
// DigitalPhoto: [ { amount: 1990 } ] }

2. 使用map
let arrMap = [{
	name: 'aaa',
	age: 23,
	address: 'henan'
}, {
	name: 'bbbb',
	age: 26,
	address: 'hebei'
}, {
	name: 'cccc',
	age: 27,
	address: 'anhui'
}]
arrMap = arrMap.map(obj => obj.name)
console.log(arrMap) //打印结果:['aaa','bbb','ccc']

3. 使用filter(过滤)
let arrFilter = [{
	name: 'aaa',
	age: 23,
	address: 'henan'
}, {
	name: 'bbbb',
	age: 26,
	address: 'hebei'
}, {
	name: 'cccc',
	age: 27,
	address: 'anhui'
}]
arrFilter = arrFilter.filter(obj => obj.age > 23)
console.log(arrFilter) //结果：[26,27]

4. 使用sclice截取数组元素
const arr = [1, 3, 5, 7, 'aa'] //删除数组元素，也可以用sclice,
let rs = arr.sclice(0, 2)
console.log(rs) //[1,3]

5. delete方法删除数组指定元素和josn数据中的值
let user = [{
	name: 'aaa',
	age: 23,
	address: 'henan'
}, {
	name: 'bbbb',
	age: 26,
	address: 'hebei'
}, {
	name: 'cccc',
	age: 27,
	address: 'anhui'
}]
delete user[0] //user中第一条数据被删除了
delete user[1].name //use中第二条数据的name属性被删除了
console.log(user.join(',')) //将数组变为了字符串,并用,号连接，变为字符串后，用user.split(','),按，号拆分，又可将字符串变为数组

6. 数组去除重复
Array.prototype.distinct = function() {
	var arr = this,
		result = [],
		i,
		j,
		len = arr.length;
	for (i = 0; i < len; i++) {
		for (j = i + 1; j < len; j++) {
			if (arr[i] === arr[j]) {
				j = ++i;
			}
		}
		result.push(arr[i]);
	}
	return result;
}
let arr = [1, 2, 1, 2, 3]
console.log(arr.distinct()) //[1,2,3]

7. 给josn数组去除重复, 然后按照指定字段， 给数组排序
let user = [{
	name: 'aaa',
	age: 23,
	address: 'henan'
	birthday: '2011-01-01'
}, {
	name: 'bbbb',
	age: 26,
	address: 'hebei',
	birthday: '2000-03-01'
}, {
	name: 'cccc',
	age: 27,
	address: 'anhui',
	birthday: '2000-03-01'
}, {
	name: 'aaa',
	age: 23,
	address: 'henan'
	birthday: '2011-01-01'
}, {
	name: 'aaa',
	age: 23,
	address: 'henan'
	birthday: '2011-01-01'
}, {
	name: 'cccc',
	age: 27,
	address: 'anhui',
	birthday: '2000-03-01'
}]

for (var i = 0; i < user.length; i++) {
	for (var j = i + 1; j < user.length;) {
		if (user[i].name == user[j].name && user[i].birthday == user[j].birthday && user[i].address == user[j].address && user[i].birthday == user[j].birthday) {
			user.splice(j, 1) //删除数组中重复的json数据
		} else j++
	}
}
//指定数组按照生日大小排序
user.sort((p, c) => {
	return new Date(c.birthday) - new Date(p.birthday)
})
console.log(user, '数组长度:' + user.length)

8. push 方法向数组中增加一条数据(shift, pop, unshift, 用的不多)
arr.push('xiaoming')

9. concat连接两个数组
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2))

10. 判断是否是数组
Array.isArray([1, 2, 3]) //true

11. 判断数组中是否包含元素includes
var array1 = [1, 2, 3];
console.log(array1.includes(2))

12. forEach循环遍历数组, 也可以使用for遍历， 参考文档

二、 常用字符串操作

1. 字符串截取substr, substring
const str = "abcdefghij";
console.log("(1,2): " + str.substr(1, 2)) // (1,2): bc

2. 去除前后空格trim
const orig = '   aaa  ';
console.log(orig.trim()) // 'aaa'

3. match方法， 全局忽略大小写匹配包含的字符
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);
console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']

4. replace 替换字符串中的字符
var re = /apples/gi;
var str = "Apples are round, and apples are juicy.";
var newstr = str.replace(re, "oranges");
// oranges are round, and oranges are juicy.
console.log(newstr);

5. str.split(',') //字符串按照自己指定的符号拆分，注意，返回的是数组[a,b,c]

6. str.toLowerCase(), str.toUpwerCase() //字符串转换为大小写ABC=>abc

7. 字符串链接 'a' + 'b' == 'ab', 'a'.concat('b') == 'ab'

8. str.includes('aa') 方法用于判断一个字符串是否包含在另一个字符串中， 根据情况返回 true 或 false

7. 找出一个字符串的位置, 'aaccBB'.indexOf('c') //结果是2,字符串索引从0开始

三、 日期Date操作

1. 获取当前时间
var date = new Date() //date = new Date(‘2019-09-09’)当前时间
const time = date.getTime() //返回毫秒值
const year = date.getFullYear() //年月日
const month = date.getMonth() + 1
const date = date.getDate() //日
const hours = date.getHours()
const minutes = date.getMinutes() //分
const seconds = date.getSeconds() //秒 或者毫秒time/1000
const week = date.getDay() //获取是星期几

四、 条件语句
1.
switch...
case ....default, do ...
	while,
	while,
	if ..else,
if ...
else if ..else

2. return语句终止函数的执行， 并返回一个指定的值给函数调用者

3. break终止while循环和for循环

4. 使用for..of,
for..in 遍历数组、 json
//遍历json
var obj = {
	a: 1,
	b: 2,
	c: 3
}
for (var key in obj) {
	console.log("obj." + key + " = " + obj[key]); //用"+"号拼接
	console.log(`obj.${key} 对应的值: ${obj[key]}`) // `为ESC下的键
}
//遍历数组for..of
let arr = [10, 20, 30];
for (const value of arr) {
	console.log(value);
}
//遍历数组for..in
for (const i in arr) {
	console.log(arr[i]);
}
//遍历数组for循环
for (let k = 0; k < arr.length; k++) {
	console.log(arr[k]);
}
五、 常用对象操作
1. JSON.parse(josnStr) //JSON字符串转为json对象 '{name:1}'=>{name:1}
2. JSON.stringify() //json对象转为JSON字符串 {name:1}=>'{name:1}'
3. Math.round(5.9) //返回四舍五入后的整数
4. Math.floor(45.95) //45
5. Math.ceil(7.004); // 8
6. parseInt('90.89') //将字符串转换为Number数字
7. Number('90.1089').toFixed(2) //四舍五入保留2位小数
8. isNaN(5) //5不是数字吗=>false,isNaN('5') '5'=>true,‘5’是字符串
7. 对象继承 Object.assign()
const o = {
	a: 1,
	b: 2,
	c: 3
}
const t2 = Object.assign({
	c: 4,
	d: 5
}, o);
console.log(t2.c); //c=>3 继承会覆盖原有属性的值，注意继承的顺序
8. Object.keys() //获取json对象的键,并返回数组对象
9. Object.values() //获取json对象的值,并返回数组对象
10.e val() 函数会将传入的字符串当做 JavaScript 代码进行执行。
eval(new String("2 + 2")); // 返回了包含"2 + 2"的字符串对象
eval("2 + 2"); //4
11. js正则表达式
RegExp 构造函数创建了一个正则表达式对象， 用于将文本与一个模式匹配
a.验证邮箱格式
const regEmail = /^\s*\w+(?:\.{0,1}[\w-]+)*@[a-zA-Z0-9]+(?:[-.][a-zA-Z0-9]+)*\.[a-zA-Z]+\s*$/
if (!regEmail.test('35410@qq.com')) {
	throw error('邮箱格式不对')
}
12. js中的apply(), call(), bind(), callback() //不常用，但有人用，我一个痘没用过

六、 条件判断操作符

1. 判断true, false
注:
	false、 0、 NaN、 undefind、 null、 ''
	都是false, 即没有值
	例如:
		// a != false 且 a != 0 且a != null
		if (a != false && a != 0 && a != NaN && a != undefind && a != null && a != '') 可以简写为
	if（ !a）
	a 有值的话, 可以写为
	if (a) {}
	2. 使用 || （或者）
	const a = 'ab'
	// 如果c != false&& c !=0&& c != NaN && c != undefind&& c != null && c != '' 的话,
	// 返回c的值；否则，则返回a的值
	let b = c || a //结果 b = ab,c没有值
	if (b || c) { //如果b有值，或者c有值，执行console;此处c没有值，但b有值，也会执行console
		console.log(b)
	}

	3. 使用 && 进行逐级判断
	let user = {
		name: ['zhang', 'li', 'liao'],
		address: '',
		email: '2343@qq.com',
		cousrse: 'pragram'
	}
	//如果user的属性值都为空，或者user={}的话，结果都包含haha,即默认值显示
	const mobile = user.mobile || '110' // 因为没有mobile属性，直接写user.mobile，会返回 undefind 加了 || 110,则返回 110，即默认值
	const cousrse = user && user.cousrse //course ='pragram'
	const address = user && user.address || 'haha' //结果 res = 'haha'
	const email = user && user.email || 'haha@qq.com' //结果 email ='2343@qq.com'
	const name = user && user.name && user.name.length > 0 ? user.name : ['haha'] //结果name =['zhang','li','liao'],若果name为[],则结果为['haha']

	4. 使用 && 、 || 综合使用
	//如果user2.name存在，且user.name 的值存在user.name != false&& user.name !=0&& user.name != NaN && user.name != undefind&& user.name != null && user.name != '' 的话,执行console
	if (user2.name && user.name) {
		console.log('a')
	}
	//如果 user&&user.name 或者 user2&&use2.name 或者user3&&use3.name 有值的话，执行console
	if ((user && user.name) || (user2 && use2.name) || (user3 && use3.name)) {
		console.log('a')
	}
	5. 三元运算:
		let a = 3
	let c = a == 3 ? 'c' : a //c=>c
	let b = a == 2 ? 'a' : a == 1 ? 'b' : 'c' //if...else if...else
	console.log(b) //b=>c
	七、 eval函数使用示例
	1. 正则表达式中使用
	var name = 'aaa'
	eval(`/${name}/ig`) //ig,全局匹配，忽略大小写，`/${name}/ig`模版语法，字符串类型，eval将字符串当作函数执行
	2. 使用eval执行指定函数, 一般为动态调用function封装
	var val = 1,
		val2 = 2,
		val3 = 3,
		v1 = 'a',
		v2 = 'b',
		v3 = 'c';

	eval(`test${val}(val)`); //....test1....1
	eval(`test${val2}()`); //....test2....
	eval(`test${val3}(v1,v2,v3)`); //....test3....0:a , 1:b , 2:c

	function test1(val) {
		console.log('....test1....' + val);
	}

	function test2() {
		console.log('....test2....');
	}

	function test3() {
		let str = ''
		for (let i in arguments) { //arguments为隐式参数，类型为数组
			str += i + ':' + arguments[i] + ' '
		}
		console.log('....test3....' + str);
	}