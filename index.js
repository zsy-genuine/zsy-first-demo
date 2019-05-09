let Promise=require('./p1')
console.log(Promise.toString())
let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('1')
    },)
    // resolve('1')
    // reject('2')
})
p1.then(data=>{
    console.log(data)
},err=>{
    console.log(err)
})