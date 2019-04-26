let fs=require('fs')
//路径  写入的数据  配置项(编码)  回调
fs.writeFile('./a.txt','{}','utf8',function(err){
    if(err)return console.log(err)
})
// 函数封装的时候  找不定项作参数
function myReadFile(url,a){
    return new Promise((resolve,reject)=>{
        fs.writeFile(url,a,'utf8',function(err,data){
            if(err)reject(err)
            resolve(data)
        })
    })
}
myReadFile('./a.txt','ffff')