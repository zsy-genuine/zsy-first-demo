// export let setuser = ()=>{
//     return new Promise((resolve,reject)=>{
//         resolve('lilei')
//     })
// }



import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000'
//获取列表接口
//interceptors拦截器
//响应拦截器
axios.interceptors.response.use(res=>{
    return res.data
},err=>{
    Promise.reject(err)
})

export let getList =()=>{
    return axios.get(`/list?page=0`)
}