import {setuser} from '../api'
import *as Types from  './mutations-types'
console.log(Types)
// Types={SET_USER:"SET_USER"}


const actions={
    async modifyname({commit}){
        let name=await setuser()
        // commit('setname',name)
        commit(Types.SET_USER,name)
    },
    ActionsAdd({commit},payload){
        //提交事件到mutations
      setTimeout(function() {
           commit('toMuAdd',payload)
      }, 1000);      
    },
    async getname({commit}){
        let username1=await setuser()
        // console.log(username)
        commit('getname',username1)
    }
}
export default actions