// Promise 承诺 es6规范 类 
// 1.作用 处理异步的一种手段（解决回调地狱的问题）
// 有一个立即执行的执行器叫做excutor 
// 执行器有2个参数 resolve 和reject resolve和reject都是函数 
// 调用resolve传一个值表示成功 resolve('值') 值可以是任意值 reject 可以传一个值表示失败 reject('值') 值可以是任意值 
//Promise 有三种状态 等待pending 成功 reslove  失败 reject 初始化的状态是pending  
// promise的状态只能由pending变成成功/失败状态 一旦成功就不能失败 一旦失败就不能成功  支付宝 支付 
// promise 都有一个then方法 then规定是异步的（微任务）
// promise.then()  执行之后返回的是一个新的promise (重点)
// then方法里面有2个参数 都是函数 一个是成功的回调 一个是失败的回调
// 如果有报错 会直接走失败 可以用catch 统一处理失败
// axios 基于promise封的 
//流程化更清晰 
// 在后续的promise里面如果返回的是普通值 会直接成功
let p1 = new Promise((reslove,reject)=>{
  reject(2)
})
let p2 = new Promise((resolve,reject)=>{
	resolve(1)
	//  reject('成功')
   // resolve('成功')
  // throw new Error('失败')
})
p2.then(data=>{//data表示成功的值
    return 1
 }).then(data=>{
	console.log(data)
}).catch(e=>{
	console.log(e)
})
Promise.resolve('a').then(data=>{
	console.log(data)
})

// Promise.resolve() 和 Promise.reject() 直接成功和失败 
// Promise.all() Prisme.race() 后面都跟的是promise数组  all表示都成功之后才会执行成功的回调  race谁跑的快执行谁不管成功还是失败
Promise.all([p1,p2]).then(data=>{
	console.log(data)
},err=>{
	console.log(err)
})
Promise.race([p1,p2]).then(data=>{
	console.log(data)
},err=>{
	console.log(err)
})
// es7规范  async await （成对出现的）
// async 表示函数里面有异步操作  async返回的是一个promise  await 后面通常跟着promise await后面的promise会依次执行 如果有一个失败 后面的就不会执行了 
