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
import { getPage} from "../api";
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
  width:200px;
  height:60px;
  line-height:60px;
}
</style>

