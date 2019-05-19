//发布订阅
let obj={
    cbs:[],
    datas:[],
    on(cb){//用来订阅
        this.cbs.push(cb)
    },
    emit(data){//用来发布
        this.datas.push(data)
        this.cbs.forEach(fn=>fn(this.datas))
    }
}
obj.on(function(datas){
    if(datas.length==2){
        console.log('上学')
    }
})
//喝粥  吃包子--->  上学
setTimeout(()=>{
    obj.emit('吃包子')
},1000)
setTimeout(()=>{
    obj.emit('喝粥')
},1000)
