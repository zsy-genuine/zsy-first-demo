<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
        <img :src="slide" alt="">
        <!-- I'm Slide {{ slide }} -->
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        }
        // swiperSlides: [1, 2, 3, 4, 5]
      }
    }
  }
</script>
<style lang="less" scoped>
    .swiper-slide{
        img{
        max-width:100%;
        }
    }
</style>
