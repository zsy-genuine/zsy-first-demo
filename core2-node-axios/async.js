//fs 文件模块
let fs = require('fs')

//封装promise版读文件的方法
function myReadFile(url){
    return new Promise((resolve,reject)=>{
        fs.readFile(url,'utf8',function(err,data){
            if(err)reject(err)
            resolve(data)
        })
    })
}
// 先喝豆浆 再吃包子

//异步的终极解决方案 async await     es7
// async await配套使用 async后跟函数  表示函数里面有异步操作 返回值是promise 
//  await后面通常跟promise 也可以跟普通值 跟普通值会直接成功  表示promise执行的结果
async  function readFiles(){
   let data1= await myReadFile('./a.txt')
   let data2=await myReadFile('./b.txt')
   return{data1,data2}
}
readFiles().then(data=>{
    console.log(data)
})