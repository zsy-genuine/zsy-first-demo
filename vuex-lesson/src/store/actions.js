import *as Types from  './mutations-types'

const actions={  
     addCar({commit},payload){
        commit(Types.ADD_CAR,payload)
    },
    delegood({commit},payload){
        commit(Types.DELETEGOOD,payload)
    },
    changegood({commit},payload){
        commit(Types.CHANGE_GOOD,payload)
    }
}
export default actions