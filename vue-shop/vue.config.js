// vue-cli3.0配置跨域
module.exports={
    //devServer  wepack下的服务器插件
    devServer:{
        proxy:'http://localhost:3000'
        // proxy:{
        //     '/':{
        //         target:'http://localhost:3000',
        //         ws:false,
        //         changeOrigin:true,
        //         pathRewrite:{
        //             '^/':''
        //         }
        //     }
        // }
    }
}
// proxy代理
// proxy:{
    // '/'是我要代理的路径
    // target目标地址 访问  /的时候等于访问http://localhost:3000
    // changeOrigin 是否改变域名
    // pathRewrite  路径重写
    // ws  是否代写
    // '/':{
    //     target:'http://localhost:3000',
    //     changeOrigin:true,
    //     pathRewrite:{
    //         '^/':'/'
    //     }
    // }

// }