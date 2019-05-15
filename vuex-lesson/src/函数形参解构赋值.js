function a({name}){
    console.log(name())
}
a({name:function(){
    return '1234'
},age:'11111'})