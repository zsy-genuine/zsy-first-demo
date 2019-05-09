const PENDING='PENDING'
const  RESOLVED='RESOLVED'
const  REJECTED='REJECTED'
// new Promise(function(){
//     resolve()
// })

function Promise(excutor){
    let that=this;
    //存放成功回调函数的数组
    that.onResolveCb=[]
     //存放失败回调函数的数据
     that.onRejectedCb=[]
    // resolve和reject是函数
    // 初始化成功和失败的值
 
    that.value=undefined;
    that.reason=undefined;
    //用status表示promise的状态 初始化为pending状态
    that.status=PENDING;
    // 定义promise的三种状态
    function resolve(value){//value表示promise成功的值
        if(that.status===PENDING){
            that.value=value;
            that.status=RESOLVED;
            //把then里面成功的回调函数拿出来挨个执行
            that.onResolveCb.forEach(fn=>fn());
        }
    }
    function reject(reason){//reason表示promise失败的值
        if(that.status===PENDING){
            that.reason=reason;
            that.status=REJECTED;
            // 把then里面失败的回调函数拿出来挨个执行
            that.onRejectedCb.forEach(fn=>fn());

        }
    }
    excutor(resolve,reject)
}
// p1.then(data=>{},err=>{})
Promise.prototype.then=function(onFufilled,onRejected){
    let that=this;
    // 如果promise成功就走成功的回调函数，并且传入成功的原因
    if(that.status===RESOLVED){
        onFufilled(that.value)
    }
    // 如果promise失败就走失败的回调函数，并且传入失败的原因
    if(that.status===REJECTED){
        onRejected(that.reason)
    }
    if(that.status===PENDING){
        //把成功或者失败的回调函数存在对应的数组里面 that.onResolveCb[fn,fn]
        that.onResolveCb.push(()=>{
            onFufilled(that.value)
        })
        that.onRejectedCb.push(()=>{
            onFufilled(that.reason)
        })
    }
}
module.exports=Promise