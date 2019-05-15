import Vue from 'vue';
import Vuex from 'vuex';
import {setuser} from './api'
Vue.use(Vuex)
export default new  Vuex.Store({
   
    strict:process.env.NODE_ENV !== 'development',
    state:{
      //初始化数据要在state
      username:null
    },
     actions:{
      async getname({commit}){
        let username=await setuser()
        // console.log(username)
        commit('getname',username)
      }
    },
    mutations:{
       getname(state,payload){
         state.username=payload
       }
    }
   
})