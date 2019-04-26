//vue原理
//Object.defineProperty进行数据劫持  es5
let obj={name:1}
//参数是obj  key  options
Object.defineProperty(obj,'name',{
	get(){//获取值
		return value
	},
	set(val){//设置值，每次值改变的时候都会触发set方法，val就是改变后的值
		console.log('值更新了')
		value =val;
	}
})
obj.name='hello'
