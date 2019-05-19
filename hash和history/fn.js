//  1函数里面返回函数 2回调作为参数
//两个箭头以及以上叫高阶函数
//typeof  constroctor  instanceof  
// Object.prototype.tostring.call


// 1函数里面返回函数

function _toString(str){
    return Object.prototype.toString.call(str).slice(8,-1)
    // [object array]
}
// function istype(type){
//    return function(str){
//     //    console.log(1)
//        return _toString(str)==type
//    }
// }
let istype=type=>str=> _toString(str)==type;
    

let util={}
let type=['String','Array','Object','Number','Null']
type.forEach(method=>{
    debugger;
    util[`is${method}`]=istype(method)
    console.log(method)
})
console.log(util.isArray([]))  //true
console.log(util.isString([]))   //false
console.log(util.isNull(undefined))   //false

util.isArray=istype('Array')
util.isString=istype('String')
// util.isArray
// let isString=istype('String')
// let isArray=istype('Array')
// console.log(isString('abc'))  //true
// console.log(isArray('abc'))   //true
