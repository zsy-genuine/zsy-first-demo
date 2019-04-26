// Failed to load http://localhost:3000/slider: No 'Access-Control-Allow-Origin' header is present on the requested resource.
// Origin 'null' is therefore not allowed access.
//跨域 cors  跨域资源共享   cors  跨域就是后端针对前端请求的不同设置不同的响应头

// 模块的引入用require
let http = require('http');
let url =require('url');
let banners =require('./banner')
http.createServer((req,res)=>{
    //防止中文乱码  设置响应头
    //设置哪个域名允许跨域
    res.setHeader('Access-Control-Allow-Origin',"*")
    res.setHeader('Content-Type', 'text/plain; charset=utf-8')
    let {pathname,query}=url.parse(req.url,true)
    //轮播图接口
    if(pathname==='/slider'){
        // res.end(JSON.stringify(banners))
        res.end(JSON.stringify({
            code:200,
            banners
        }))
        return
    }
    if(pathname === '/hot'){
        res.end(JSON.stringify({
            code:200,
            data:{name:'lili'}
        }))
        return
    }   
}).listen(3000)
//http://localhost:3000/slider