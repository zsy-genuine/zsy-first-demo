//回调函数作为参数  预置参数
// 有一个西瓜 一次吃一口 2口吃完
function after(count,cb){
    //每调用一次数量-1
    let ary=[]
    return function(data){
        ary.push(data)
        if(--count==0){
            cb(ary)
        }
    }
}

eat=after(2,function(){
    console.log('吃完了',ary)
})
eat('1')
eat('2')