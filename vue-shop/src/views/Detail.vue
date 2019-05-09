<template>
  <div class="con">
    <head-title :showArrow='true'> 详情页</head-title>
    <!-- 详情页
    {{deId}} -->
    <img :src="single.img" alt="">
    <p>{{single.name}}</p>
    <p> {{single.info}}</p>
    <p>{{single.price}}$</p>
  </div>
</template>
<script>
import {getDetail} from '../api'
import HeadTitle from '../components/HeadTitle.vue'
  export default{
    name:'detail',
    components:{
      HeadTitle
    },
    data(){
      return {
        single: {
          img:null,
          name:null,
          info:null,
          price:null
        }
      }
    },
    created(){
      this.Detail()
    },
    computed:{
      deId(){
        return this.$route.query.id
        // this.$route.params.id
        // console.log(id)
      }
    },
    methods:{
     
      // 发送详情请求
      async Detail(){
        let {data} = await  getDetail(this.deId)
        // let {data} = await getDetail(3000)
        this.single=data;
        console.log(this.single);
        if(JSON.stringify(this.single)=='{}'){
          this.$router.push('/about')
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .con{
    position:fixed;
    width: 100%;
    height: 100%;
    z-index: 30;
    background: #fff;
    overflow-y: auto;
  }
 
</style>
