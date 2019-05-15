import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
export default new  Vuex.Store({
    // strict:false,
    // strict:process.env.NODE_ENV !== 'production',
    state:{
        count:1,
        number:2,
        username:'lili'
    },
    getters:{
        Num(state){
            return state.count+"abc"
        }
    },
    mutations:{
        //定义和commit提交过来的事件同名的函数increamens
        increamens(state,{a,b}){
        // increamens(state,payload){
            // console.log(payload)
            //通过函数修改state
            //payload{a:2,b:3}
            // let{a,b}=payload
            state.count=state.count+a+b
        },
        toMuAdd(state,payload){
            // commit('toMuAdd')定义actions里面commit传递过来的同名的函数
            state.number+=payload
        }
    },
    actions:{
      // this.$store.dispatch('ActionsAdd')
      //2定义和dispath传递过来的事件同名的函数
      ActionsAdd({commit},payload){
          //提交事件到mutations
        setTimeout(function() {
             commit('toMuAdd',payload)
        }, 1000);      
      },
    //   ActionsAdd(params){
    //       let {commit}=params
    //   }

    }
})