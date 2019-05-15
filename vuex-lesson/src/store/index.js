import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)
import actions from './actions'
import mutations from './mutations'
let state={
    carlist:[]
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
})