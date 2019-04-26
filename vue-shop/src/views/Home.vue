<template>
<div class="home">
  <!-- <Banner :swiperSlides='banners'></Banner> -->
  <div class="container">
    <div class="spinner" v-if="showLoading">
      <Loading></Loading>
     
    </div>
    <template v-else>
    <Banner :swiperSlides='sliders'></Banner>
     <!-- {{homelist}} -->
    <div>
      <ul>
        <li v-for="item in homelist" :key="item.id">
          <img :src="item.img" alt="">
          <p>{{item.name}}</p>
          <p> {{item.info}}</p>
          <p>{{item.price}}</p>
        </li>
      </ul>
    </div>
    </template>
  </div>
 
<!-- {{sliders}} -->
<!-- <ul>
  <li v-for="(item,index) in sliders" :key="index">
    <img src="item" alt="">
  </li>
</ul> -->
<!-- <Msg :abc="val"></Msg> -->
<!-- 3.用标签的形式引入 -->
<!-- < img alt="Vue logo" src="../assets/logo.png" /> -->
<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import Msg from '@/components/Msg.vue'   //1、引入
import Banner from '../components/Banner'   //1、引入
import Loading from '../components/Loading'  

import{getHomeAll} from '../api' //解构赋值出来getBanner的方法
export default {
  name: "home",
  components:{
    Banner,
    Loading
    //  Msg:Msg//2.注册
  },
  data(){
    return{
      sliders:[],
      homelist:[],
      showLoading:true
      // banners:[1,2,3]
    }
  },
   created(){
  //   // getBanner().then(res=>{
  //   //   // console.log(data)
  //   //   let{data}=res;
  //   //   this.sliders=data
  //   // })
  //   this.getslider()
  // //  let {data:sliders}= await getBanner();
  // //  this.sliders=sliders;
  // //  let {data:homelist}= await getHomeList();
  // //  this.homelist=homelist;
  // this.getlist()

  this.getAll()
  },
  methods:{
    // //轮播
    // async getslider(){
    //    let {data:sliders}= await getBanner();
    //    this.sliders=sliders;
    // },
    // //列表
    //  async getlist(){
    //   let {data:homelist}= await getHomeList();
    //   this.homelist=homelist;
    // },

    async getAll(){
      let [{data:sliders},{data:homelist}] =await getHomeAll()
      this.sliders=sliders;
      this.homelist=homelist;
      // console.log(sliders,homelist)
      //数据都拿到了
      this.showLoading=false
    }
  }
};
</script>
<style lang="less">
  .home-list {
  ul {
    padding: 0 15px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    li {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 20px;
      border-bottom: 1px solid #eee;
      img {
        max-width: 90%;
        height: auto;
      }
    }
  }
}
</style>


