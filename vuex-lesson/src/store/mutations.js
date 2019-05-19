import Vue from "vue";
import *as Types from  './mutations-types'
import {stat} from "fs";

export default{
    //改变全选
    [Types.CHANGE_CHECKALL](state,payload){
        // console.log(payload)
        //每一项的选中值等于全选的选中值
        state.carlist.forEach(item=>{
             item.sele = payload
        });
        state.carlist=[...state.carlist]
    },
    [Types.ADD_CAR](state,payload){
        //判断购物车里面有没有这个商品 没有的话数量等于1 有的话在原有的数量上面加1
        let good=state.carlist.find(item=>item.id==payload.id)
        if(good){
            //把添加进去购物车的变成选中状态
            Vue.set(good,'sele',true)
            // console.log(good)
            good.count+=1;
            // console.log(state.carlist)
            //修改vuex里面的数据必须手动更新
            state.carlist=[...state.carlist]
          
        }else{
            payload.count=1;
            Vue.set(payload,'sele',true)

            //如果没有这个商品  把添加的商品放到购物车数组里面
            state.carlist=[...state.carlist,payload]            
        }
        // console.log(payload)
        // state.carlist=[...state.carlist,payload]
        
        //在缓存里面定义一个购物车列表并存放数据
        localStorage['carlist']=JSON.stringify(state.carlist)
    },
    [Types.DELETEGOOD](state,payload){
        state.carlist= state.carlist.filter(item=>item.id!=payload.id)
        // state.carlist.splice(state.carlist,1)
    },
    [Types.CHANGE_GOOD](state,payload){
        console.log(payload)
        // console.log(state)
        if(payload.num){
            //num存在证明点击的是加号或者减号，否则点击的是单选
            payload.good.count+=payload.num;
            if(payload.good.count<1){
                payload.good.count=1
            }           
          }     
    }
}

// <!-- <ul class="carlist-con">
            
// <li v-for="item in carlist" :key=item.id>
//     <input type="checkbox" class="inp" id="inp" >
//     <div>
//         <img :src="item.img" alt=""> 
//         <p>{{item.name}}</p>
//         <p>
//             <span @click="modiGood(item,1)">+</span>
           
//             {{item.count}}
//             <span @click="modiGood(item,-1)">-</span> 
       
//         </p>              
//         <p>{{item.price}}</p>
//         <button class="btn">删除</button>
//     </div> 
// </li>
// </ul> -->



//  // ...mapMutations(['addCar'),
//  modiGood(state,num){
//     this['addCar']
//      if(num){
//     //num存在证明点击的是加号或者减号，否则点击的是单选
//     state.count+=num;
//     if(state.count<1){
//     state.count=1
//     }           
//   }
// }



// .carlist-con{
//   li{
//     box-sizing: border-box;
//     padding-left:10px;
//     display: flex;
//     flex-direction: row;
//     .inp{
//       align-self: center;
//     }
//     div{
//       padding-left: 10px;
//       flex: 0 0 auto;
//       img{
//         max-width: 80%;
//         }
//     }
//   }
// }
// .btn{
//   display: inline-block;
//   outline: none;
//   appearance: none;
//   border:none;
//   border-radius: 30px;
//   width:200px;
//   height:60px;
//   line-height:60px;
//   font-size: 30px;
//   background-color: antiquewhite;

// }
