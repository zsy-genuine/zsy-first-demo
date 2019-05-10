<template>
  <div class="about">
    <!-- 这是列表页 -->
    <div class="container" @scroll="sLoadM" ref="eleScr">
      <ul class="con-items">
        <!-- <router-link v-for="item in pageList" :key="item.id" tag='li' :to="{name:'detail',params:{id:item.id}}"> -->
        <router-link v-for="item in pageList" :key="item.id" tag='li' :to="{name:'detail',query:{id:item.id}}">        
             <img :src="item.img" alt="">
              <p>{{item.name}}</p>
              <p> {{item.info}}</p>
              <p>{{item.price}}$</p>
              <button class="btn" @click.stop="addCar(item)">添加到购物车</button>
        </router-link>
      </ul>
      <div class="btnbox">
        <button class="btn" @click="loadMore" >{{hasMore?'点击加载更多':'没有更多了'}}</button>
      </div>
      
    </div>
    <!-- <div> 
      <ul>
        <li v-for="item in homelist" :key="item.id">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p> {{item.info}}</p>
          <p>{{item.price}}</p>
        </li>
      </ul>
    </div> -->
  </div>
</template>
<script>
import { getPage,addGood} from "../api";
import { constants } from 'fs';
export default {
    name:'about',
    data(){
      return{
        page:0,
        pageList:[],
        hasMore:true
      }
    },
    created(){
      this.getList()
    },
    methods:{
      async getList(){
       let {data:{hasMore,pagedata}}= await getPage(this.page);
       console.log(hasMore,pagedata);
      //  要把原来的数据和重写请求的数据放在一起这样才是所有的数据
      //  this.pageList=this.pageList.concat(pagedata);
       this.pageList=[...this.pageList,...pagedata]
       this.hasMore=hasMore
       },
       //滚动加载更多
       sLoadM(){
         //函数节流 /函数防抖  我规定在一段时间内只触发一次
         clearTimeout(this.timer);
         let timer=setTimeout(() => {
           //  console.dir(this.$refs.eleScr)
            let {clientHeight,scrollTop,scrollHeight}=this.$refs.eleScr;
            console.log(clientHeight,scrollTop)
            if(scrollTop+clientHeight+20>scrollHeight){
              //  alert('到底部了')
              //加载更多
              this.loadMore()
            }
         },13);
        
       },
       //加载更多
       loadMore(){
         this.page++; //页面加一        
      // 如果hasMore为false表示没有更多了 就不在执行请求
         if(!this.hasMore)return
         this.getList()
       },
        //添加到购物车
       async addCar(good){
          // // 从缓存里面取出购物车数组，如果没有，自己定义一个空的
          // // console.log(localStorage['carlist']);
          // // return          
          //   let carlist=localStorage['carlist']?JSON.parse(localStorage['carlist']):[];
          //   //如果购物车已经存在了，数量加1  没有的话，数量为1   我们自己定义一个数量的变量叫做count
      
          //   let caritem=carlist.find(item=>item.id==good.id);
          //   caritem?caritem.count+=1:good.count=1;
          //   //如果购物车里有这一项了就不再往数组里面添加了
          //   // sele 设置了一个是否选中的值
          //   if(!caritem){
          //     carlist=[...carlist,good];
          //     good.sele=true;
          //   }else{
          //       caritem.sele=true;
          //   }
            
          //   //新的购物车数组在重新扔到缓存里面
          //   localStorage['carlist']=JSON.stringify(carlist);

          //提交请求到后端
          // console.log(good);
          // good=JSON.stringify(good)
          let {code,msg}=await addGood(good);
          // console.log(r)
          if(code==200){
            alert('添加成功')
          }else{
            alert('网络错误，请稍后再试')
          }
        }
    }
}
</script>
<style lang="less" scoped>
.con-items{
  box-sizing:border-box;
  padding:0 20px;
  li{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
  }
}
.btnbox{
  text-align:center;
}
.btn{
  display: inline-block;
  outline: none;
  appearance: none;
  border:none;
  border-radius: 30px;
  width:200px;
  height:60px;
  line-height:60px;
  font-size: 30px;
  background-color: antiquewhite;

}

</style>

