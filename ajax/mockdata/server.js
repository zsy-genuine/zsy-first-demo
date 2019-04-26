let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./slider');

function read(cb) {
  fs.readFile('./good.json', 'utf8', (err, data) => {
    if (err) { //文件错误或者没长度 
      console.log(err)
      cb([])
    } else {
      cb(JSON.parse(data))
    }
  })
}

function write(data, cb) {
  fs.writeFile('./good.json', JSON.stringify(data), 'utf8', cb)
}
let offset = 5; //每一页的数据是5条
http.createServer((req, res) => {
   res.setHeader('Content-Type', 'text/plain; charset=utf-8');
   res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Origin',"*")
  res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,OPITIONS')
  if(req.method==='OPITIONS'){
       res.end()
    }
  let {
    pathname,
    query
  } = url.parse(req.url, true);
  //轮播图接口 
  if (pathname === '/slider') {
    
    return res.end(JSON.stringify(sliders))
  }
  //首页列表接口
  if (pathname === '/new') {
   
    read((data) => {
      let newlist = data.reverse().slice(0, 6);

      res.end(JSON.stringify(newlist))

    })
    return
  }
  //http://localhost:3000/list?id=dddd

  //列表页接口
  if (pathname === '/list') {
    let id = parseInt(query.id);
   
    switch (req.method) {
      //删除接口
      case 'DELETE':
        if (id) {
          read(data => {
            //把不等于传递过来的id的值变成一个新的data
            data = data.filter(item => item.id !== id)
            //把新的数据重新写会到json文件里
            write(data,() => {
              res.end(JSON.stringify({}))
            })
          })
        }
        break;
        //修改接口
        case 'PUT':
         let str ='';
         req.on('data',chunk=>{
           str+=chunk;
          })
         req.on('end',()=>{
           //good 是前端传过来的数据
           let good = JSON.parse(str);
          
           read(data=>{
            let goods = data.map(item=>{
               //如果等于改变这项的id，返回改变后的数据（good）;如果不等于直接返回原来的
               if(item.id===id){
                 return good
               }
               return item
              })
            //把改变后的值重新写入json文件
             write(goods,()=>{
               return res.end(JSON.stringify(good))
            })
           })
         })
        break;
        //添加接口
        case 'POST':
          let str1='';
          req.on('data',chunk=>{
            str1+=chunk
          })
          req.on('end',()=>{
           let adgood = JSON.parse(str1);
           read(data=>{
             //给添加的商品加一个id,如果data是空的id为1，否则id为最后一项的id加1
             adgood.id =data.length?data[data.length-1].id+1:1;
             data = [...data,adgood];
              console.log(data,'所有数据')
             write(data,()=>{
                return res.end(JSON.stringify(adgood))
             })
           })
          })
        break;
    }
    read((data) => {
      if (id) {
        let good = data.find(item => item.id === id)
        if (good) {
          res.end(JSON.stringify(good))
        } else {
          res.end(JSON.stringify({}))
        }
      } else {
        res.end(JSON.stringify(data))
      }
    })
    return
  }
  //分页接口 
  //localhost:3000/page?page=1
  if (pathname === '/page') {

    let page = parseInt(query.page);
    if (!page) {
      page = 1;
    }
    page = page - 1;

    //默认有下一页
    let hasmore = true;
    read((data) => {

      //offset 每次5条 
      let pagedata = data.slice(page * offset, page * offset + offset);
      let lastindex = page * offset + offset;
      //如果当前最后的索引大于data的长度，则表示没有数据了 
      if (lastindex > data.length) {
        hasmore = false;
      }

      res.end(JSON.stringify({
        data: pagedata,
        hasmore
      }));


    })
    return
  }
  res.end('404')
}).listen(3000, () => {
  console.log('3000启动成功')
})
