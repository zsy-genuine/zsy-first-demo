let obj={
	name:'lili',
	age:{obj:4},
	scholl:'bj',
	a:{b:1}
}
//判断是否是对象的方法
function isObject(target){
	return typeof target=='object'&&typeof target!=null

}
function observer(target){
	if(typeof target=='object'&&typeof target!=null){
		//defineReactive自己定义一个数据劫持的方法
		for(let key in target){
			defineReactive(target,key,target[key])
		}
	}
}
function defineReactive(obj,key,value){
	//如果值继续是对象的话  也需要监听
	observer(value)//深度劫持
	Object.defineProperty(obj,key,{
		get(){
			return value
		},
		set(val){
			observer(val)
			console.log('值更新了');
			value=val;
		}
	})
}
observer(obj)  //监听obj
//obj.name='lilei'
//obj.age.age=4
//start on curentfile运行当前文件
// stop all/stop current 停止运行 

obj.a={b:4} //新赋值的对象不会被劫持
obj.a.b=3  
//computed 计算属性里面的get和set 就是defineProperty的get和set
obj.xxx='abc'
//要劫持的属性要对象本身有的，后定义的属性并不会被劫持  vue提供了一个方法 实例上的方法 Vue.set()
//数组的方法不能通过defineProperty来检测更新   所以vue重写了数组的方法  push  pop  shift...
let oldpush=Array.prototype.push;  //把数组的方法存在oldpush上
Array.prototype.push=function(...arg){}

//1.写个页面 多个input框  对应一个对象的不同key  实现双向绑定
//2.h5版电子简历   (51放假回来)5页
