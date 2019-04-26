//设置默认请求的域名（带着端口号）
//http://132.232.89.22:8080/slider
//http://132.232.89.22:8080/hot

axios.defaults.baseURL='http://132.232.89.22:8081'
//整个请求返回的是一个promise
//响应拦截器  拦截所有后端响应后来的结果  
axios.interceptors.response.use(res=>{
    return res.data
},err=>{
    Promise.reject(err)
})
// anync function getbaner(){
//     return axios.get('/slider')
// }
axios.get('/slider?name=1&age=2').then(res=>{
    //data是请求成功之后后端返回的数据
    console.log(res)
})
axios.get('/hot').then(res=>{
    //data是请求成功之后后端返回的数据
    console.log(res)
})
// http://132.232.89.22:3000/list?id=4    id不同 返回值不同
let id =4;
axios.get(`http://132.232.89.22:3000/list?id=${id}` ).then(data=>{
    console.log(data)
})
// axios.post('http://132.232.89.22:3000/list',{}).then(data=>{
//     console.log(data,'post')
// })
//根据id来删除数据
let delid=24
async function delegood(){
    await axios.delete(`http://132.232.89.22:3000/list?id=${delid}`)
}
console.log(delegood())

// axios.delete(`http://132.232.89.22:3000/list?id=${delid}`).then(data=>{
//     console.log(data)
// })
axios.put()  //和post完全相同  resultful风格   resultful  api
// put表示数据修改  post表示新增   delete表示删除  get表示获取
// 接口文档
//url /list
//参数 Object   Array[{name:dd},{img:a.img}]
// name 商品名称 必填  String
// img  商品图片 选填   String
// info  商品简介  必填  String
// price  商品价格  必填   Number
// 接口数据实例[{name:'d',img:'a.img',info:'简介',price:333},{name:'d',img:'a.img',info:'简介',price:333}]



//res={congig:...,data:这里对应的才是我要的数据，headers;...}
//res.data
