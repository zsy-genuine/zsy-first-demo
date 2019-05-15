<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
     {{$store.state.number}}
     <!-- <button class="btn" @click="AddCount">+</button> -->
     <button class="btn" @click="ActionsAdd(10)">+</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

import {mapActions} from 'vuex'
export default {
  name: "home",
  // components: {
  //   HelloWorld
  // }
  methods:{
    created(){
      this.add()
    },
    ...mapActions(['ActionsAdd']),
    // ActionsAdd(){

    // }
    // AddCount(){
    //   this.ActionsAdd(10)
    //   //通过dispatch派发事件到actions
    //   // this.$store.dispatch('ActionsAdd',10)
    // }
  }
};
</script>
<style lang="less" scoped>
.about{
  font-size: 60px;
}
  .btn{
    display:block;
    width: 100px;
    height: 100px;
    line-height: 60px;
    background: yellow;
    appearance: none;
    outline: none;
    font-size: 40px;
  }
</style>
