export default {
    namespaced:true,//命名空间 独立开辟了一个作用域
    state:{
        name:'abc'
    },
    getters:{
        rename(state){
            return state.name+"getters"
        }
    },
    actions:{
        setname({commit}){
            commit('setname','lili')
        }
    },
    mutations:{
        setname(state,payload){
            state.name=payload
        }
    }
}