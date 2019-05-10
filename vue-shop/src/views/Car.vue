<template>
    <div class="container">
      <!-- <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      <p>1</p>
      这是购物车页面 -->
      <head-title>购物车</head-title>
      <div>
        <label for="checkAll">
          <span>全选</span>
          <input type="checkbox" id="checkAll" class="inp" v-model="checkAll"> 
        </label>
      </div>
      <ul class="carlist-con">
        <li v-for="good in carlist" :key="good.id">
            <!-- <label for="inp"> -->
                <input type="checkbox" class="inp" id="inp" v-model="good.sele" @change="modiGood(good)">
              <!-- </label> -->
            <div>
              <img :src="good.img" alt="">
              <p>{{good.name}}</p>
              <p> 
                <span @click="modiGood(good,1)">+</span>
                {{good.count}}
                <span @click="modiGood(good,-1)">-</span>               
              </p>
              <p>{{good.price}}$</p>
              <button class="btn" @click.stop="deleGood(good)">删除</button>
            </div>
    
        </li>
      </ul>
       <div>总价：{{totalPrice}}</div>
      <!-- {{carlist}} -->
  </div>
</template>
<script>
import {getCarList,deleCarGood,changeCount} from '../api'
import HeadTitle from '../components/HeadTitle.vue'
export default {
  name:'car',
  components:{
      HeadTitle
  },
  computed:{
    checkAll:{
      // return this.carlist.every(item=>item.sele==true)
      get(){
        return this.carlist.every(item=>item.sele==true)
        // return !this.carlist.some(item=>item.sele==false)
        //判断选中的有多少个   把选中的放到一个数组里面 判断选中的数组长度是否是所有商品的数组长度
        // let newary = this.carlist.filter(item=>item.sele==true)
        // return newary.length==this.carlist.length;
      },
      set(val){//checkall改变后的值
        // console.log(val)
        this.carlist.forEach(item => {item.sele=val});
      }
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
    this.getlist();
    // if(localStorage['carlist']){
    //   this.carlist=JSON.parse(localStorage['carlist'])
    // }   
  },
  methods:{
    //获取购物车列表
    async getlist(){
      console.log(await getCarList());
      // return
      let {data}=await getCarList()
      // console.log(await getCarList())
      this.carlist=data;
      // this.carlist.forEach(item=>{
      //   this.$set(item,'sele',true)
      //   // Vue.set(item,'sele',true)
      // })
    },
    //购物车删除功能
    async deleGood(good){
      //点击发送删除请求
     await deleCarGood(good.id);
     //请求成功之后前端做删除(需要后端删除之后前端再去做删除)
      // 条件成立的新数组
      this.carlist = this.carlist.filter(item=>item.id!=good.id)
      // this.carlist.splice(index,1)
    },
    //商品参数改变事件
    async modiGood(good,num){
      if(num){
        //num存在证明点击的是加号或者减号，否则点击的是单选
         good.count+=num;
        if(good.count<1){
          good.count=1
        }
        //  console.log(good.count)
      }
      // good=JSON.stringify(good);
      // console.log(good);
      //数量改变之后发送请求
      await changeCount(good)
    }
  }
}
</script>
<style lang="less" scoped>
 .inp{
   flex: 0 auto;
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
.carlist-con{
  li{
    box-sizing: border-box;
    padding-left:10px;
    display: flex;
    flex-direction: row;
    .inp{
      align-self: center;
    }
    div{
      padding-left: 10px;
      flex: 0 0 auto;
      img{
        max-width: 80%;
        }
    }
  }
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
