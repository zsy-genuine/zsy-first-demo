function move(ele,target,callback){
 let m =0;
  let timer = setInterval(function(){
	if(m>=target){
		ele.style.left=target+'px';
		// 目标运动结束
		clearInterval(timer)
		callback() 
	}else{
		 m+=5
	     ele.style.left= m+'px'
	  }
	},13)
}
// move(ele,target,callback)
move(qiu1,300,function(){
	move(qiu2,300,function(){
		move(qiu3,300,function(){})      
	})
})
// 回调地狱  




// function move(qiu1,100,callback){
//    //运动逻辑.....
//   callback()
// }
// // move('qiu1',100,callback)