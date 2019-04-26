//fs自带的promise 10.2.8以上版本才有
let fs=require('fs');
let fsPromise=fs.promises;
fsPromise.readFile('./a.txt','utf8').then(data=>{
    console.log(data)
});
fsPromise.writeFile('./a.txt','1234','utf8').then(data=>{
    console.log('写入成功')
})

// function myWriteFile(url){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(url,'utf8',function(err,data){
//             if(err)reject(err)
//             resolve(data)
//         })
//     })
// }