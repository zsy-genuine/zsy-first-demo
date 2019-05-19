import Vue from "vue";
import Vuex from "vuex";
import logger from "vuex/dist/logger";
Vue.use(Vuex)
import getters from './getters'
import actions from './actions'
import mutations from './mutations'
let state={
    carlist:[]
}
if(localStorage&&localStorage['carlist']){
    state.carlist=JSON.parse(localStorage['carlist'])
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    //插件集合
    plugins:[logger()]
    // logger()只用于开发模式
})