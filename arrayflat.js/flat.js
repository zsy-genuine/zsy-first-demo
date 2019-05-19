//数组扁平化  用一个空数组把每一项放入  如果这个项是数组的话继续拆分成单个的再放入
//实现数组扁平化  map
// [1,2,3,[4,5,[1,3]]]
// let ary=[1,2,3,[4,5,[1,3]]];

let ary=[1,2,3,[3,4],[2,4]]

let res = [].concat.apply([],ary)
let res1 = [].concat(...ary)
console.log(res,res1)  //[ 1, 2, 3, 3, 4, 2, 4 ]
function flatary(ary){
    //定义一个空数组
    let newary=[];
    for(let i=0;i<ary.length;i++){
        if(Array.isArray(ary[i])){
           newary=[...newary,...flatary(ary[i])] 
        }else{
            newary.push(ary[i])
        }
        
    }
    return newary
}
console.log(flatary(ary))


let res3=ary.reduce((prev,next,index,ary)=>{
    return prev.concat(next)
},[])
console.log(res3)

//封装数组的map方法  reduce
let ary3=[1,2,4]
Array.prototype.myreduce=function(cb,prev){
    for(let i=0;i<this.length;i++){
        if(!prev){
            prev=cb(this[i],this[i+1],i,this)
        }else{
            prev=cb(prev,this[i],this[i+1],this)
            // i++;
        }
    }
    return prev
}
let result=ary3.reduce((prev,next)=>{
    return prev+next

    // return prev.concat(next)
})
// },[])
console.log(result)  //[ 1, 2, 4 ]

