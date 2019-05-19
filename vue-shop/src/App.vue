<template>
  <div id="app">
    <!-- <div id="nav"> -->
       <!-- {{$route.meta.keepAlive}} -->
     <Nav/>
     <!--需要缓存的路由视图走这里 -->
    <!-- </div> -->
    <keep-alive>
      <router-view  v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view  v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
import Nav from '@/components/Nav'
export default {
    components:{
      Nav
    }
}
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
html,body{
  height: 100%;
}
a{
  text-decoration: none;
  color: #666666;
}
.container{
  position: fixed;
  width: 100%;
  // height:100%;
  bottom: 60px;
  overflow-y: auto;
  top:0;
}
</style>
