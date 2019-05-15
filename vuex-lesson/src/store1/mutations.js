import *as Types from  './mutations-types'

// Types={SET_USER:"SET_USER"}
// [Types.SET_USER]()
const mutations={
    // setname(state,payload){
    [Types.SET_USER](state,payload){

        state.username=payload
    },
    increamens(state,{a,b}){
        state.count=state.count+a+b
    },
    toMuAdd(state,payload){
        state.number+=payload
    },
    getname(state,payload){
        state.username1=payload
    }

}
export default mutations