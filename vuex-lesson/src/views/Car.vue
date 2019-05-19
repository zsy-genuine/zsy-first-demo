<template>
    <div>
        购物车页面
        <!-- {{carlist}} -->
        <div>
        <label for="checkall">
          <span>全选</span>
          <!-- {{checkAllValue}} -->
          <input type="checkbox" id="checkall" v-model="checkAll" class="inp"> 
        </label>
      </div>
       
         <ul>
           <li v-for="good in carlist" :key="good.id" class="caritem">
        
               <input type="checkbox" class="inp" v-model="good.sele" id="inp">
            
              <img :src="good.img" alt=""> 
               <p>
                  <button @click="modiGood(good,1)">+</button>          
                {{good.count}}
                <button @click="modiGood(good,-1)">-</button>     
              </p>  
              <p>{{good.name}}</p> 
              <p>{{good.price}}</p>
               <button class="btn"  @click.stop="deleGood(good)">删除</button>
           </li>
         </ul>
         <!-- {{$store.state.carlist}} -->    
         <div>总价：{{totalPrice}}</div>    
    </div>
</template>
<script>
import {mapState,mapMutations, mapGetters} from 'vuex'
import * as Types from  '../store/mutations-types.js'
export default {
    computed: {
        ...mapState(['carlist']),
     
        ...mapGetters(['totalPrice','checkAllValue']),
        checkAll:{
          get(){
            return this.checkAllValue
          },
          set(val){
            // console.log(val)
            this[Types.CHANGE_CHECKALL](val)
          }
        }
    },
    methods:{
        ...mapMutations([Types.CHANGE_CHECKALL]),
        // ...mapMutations(['addCar'),
      //  modiGood(state,num){
      //     // this['addCar']
      //      if(num){
      //     //num存在证明点击的是加号或者减号，否则点击的是单选
      //     state.count+=num;
      //     if(state.count<1){
      //     state.count=1
      //     }           
      //   }       
      // },
      modiGood(good,num){
        this.$store.dispatch('changegood',{good,num})
      },
      deleGood(good){
          this.$store.dispatch('delegood',good)
        }
    }
}
</script>
<style  lang="less" scoped>
.caritem{
  display: flex;
  flex-direction: row;
  justify-content: center;
}

li p button{
   margin-right: 50px;
   margin-left: 50px;
}
#inp{
  margin-left: -300px;
  margin-right: 100px;
}
 .inp{
   align-self:center;
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
.btn{
  margin-left: 100px;
  display: inline-block;
  outline: none;
  appearance: none;
  border:none;
  border-radius: 30px;
  width:120px;
  height:40px;
  line-height:40px;
  font-size: 30px;
  background-color: antiquewhite;
}

</style>

