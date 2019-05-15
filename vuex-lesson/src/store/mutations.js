export default{
    mAddcar(state,payload){
        console.log(payload)
        state.carlist=[...state.carlist,payload]
    }
}