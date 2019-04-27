<template>
  <div>

    <!-- <div class="container"> -->
      <!-- 这是购物车页面 -->
      <div>
        <label for="checkAll">
          <span>全选</span>
          <input type="checkbox" id="checkAll" class="inp" :checked="checkAll"> 
        </label>
      </div>
       <div>总价：{{totalPrice}}</div>
      <ul class="carlist-con">
        <li v-for="good in carlist" :key="good.id">
            <!-- <label for="inp"> -->
                <input type="checkbox" class="inp" id="inp" v-model="good.sele">
              <!-- </label> -->
            <div>
              <img :src="good.img" alt="">
              <p>{{good.name}}</p>
              <p> {{good.count}}</p>
              <p>{{good.price}}$</p>
            </div>
    
        </li>
      </ul>
    
      <!-- {{carlist}} -->
    <!-- </div> -->
  </div>
</template>
<script>
export default {
  name:'car',
  computed:{
    checkAll(){
      return this.carlist.every(item=>item.sele==true)
    },
    totalPrice(){
      return this.carlist.filter(item=>item.sele==true).reduce((prev,next)=>{
        return prev+next.count*next.price
      },0)
    }
  },
  data(){
    return{
      carlist:[]
    }
  },
  created(){
    if(localStorage['carlist']){
      this.carlist=JSON.parse(localStorage['carlist'])
    }
    
  }
}
</script>
<style lang="less" scoped>
 .inp{
   appearance: none;
   outline: none;
   width: 40px;
   height: 40px;
   border: 1px solid green;
   border-radius: 20%;
   position: relative;
  }
.inp:checked.inp::before{
  position: absolute;
  content: "✔";
  width: 20px;
  height: 20px;
  top: 10px;
  left: 10px;
  color: green;
}
// .carlist-con{
//   li{
//     display: flex;
//     label{
//       align-items: center;
//     }
//   }
// }
.carlist-con{
  li{
    padding: 1 10px;
    display: flex;
    .inp{
      align-self: center;
    }
    div{
      padding-left: 10px;
    }
  }
}
</style>
