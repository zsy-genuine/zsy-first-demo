// 拓展运算符 ... 
// 作用把数组或者对象展开 去掉大括号或者中括号 
let obj = {name:'lili'}
let obj2 = {name:11}
let cobj = {...obj,...obj2}
cobj
let objj= {name:'lili',age:3}
let objj2 = {age:11}
let cobjj = {...objj,...objj2}
cobjj
let objqk = {age:3,age:11}
objqk
// 数组
let  a = [1,2,3],b = [1,2,3]
let c = [...a,...b]
// 当做拷贝 浅拷贝  深拷贝就是拷贝出来的对象(数组)是一个新的(包括对象里面的引用值)不会原来对象影响 
// 浅拷贝为什么会被原来的影响 因为拷贝出来的值包含引用值的时候引用地址没有改变 
let obc= {a:1,c:{l:3}}
let c1 = {...obc,c:{...obc.c}}
obc.a =2   
// 深拷贝的方法1 缺点undfined 函数 DATE 等不能拷贝过去
let tobj = {a:1,c:{name:'zhangsan'}}
let cloneObj = JSON.parse(JSON.stringify(tobj))
tobj.c.name = 'lisi' 
console.log(cloneObj)
// 深拷贝的方法2 递归(函数调用函数自身)
let target= {name:'lili',a:{age:3},b:[1,2],c:function(){},d:/\d/}
// 要把目标对象的key和value赋值给新的对象 
// new RegExp() new Date()
function deepClone(target){
	if(target==null)return null 
	if(target instanceof RegExp)return new RegExp(target)
	if(target instanceof Date)return new Date(target)
	if(typeof target!='object') return target
	// 如果是数组就会指向数组的构造函数  如果是对象就会指向对象的构造函数 
	let cloneObj = new target.constructor()
    for (let key in target){
		// cloneObj[key]= typeof target[key]=='object'?deepClone(target[key]):target[key]
		cloneObj[key]=deepClone(target[key])
    }
	return cloneObj
}
obj2  = {name:1}

let obj3= {}  
for(let key in obj2){
	 obj3[key] = obj2[key]
}
console.log(obj3)
let cob = deepClone(target)
console.log(cob)
// typeof instanseof  constructor Object.prototype.toString.call


