<template>
  <div>
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
  export default{
    name:'detail',
    data(){
      return {
        single: {}
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