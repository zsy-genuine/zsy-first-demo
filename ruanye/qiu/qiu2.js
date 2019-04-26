function move(ele,target,){
   return new Promise((resolve,reject)=>{
	    let m =0;
       let timer = setInterval(function(){
	if(m>=target){
		ele.style.left=target+'px';
		// 目标运动结束
		clearInterval(timer)
		resolve(1)
	  }else{
		 m+=5
	     ele.style.left= m+'px'
	  }
	},13)
 })
}
async function m(){
	await move(qiu1,300)
	await move(qiu2,300)
	await move(qiu3,300)
}
m().then(data=>{
	alert('球都走完了')
})
move(qiu1,300).then(data=>{
   move(qiu2,300).then(data=>{
	   move(qiu3,300)
   })
})

move(qiu1,300).then(data=>{
   return move(qiu2,300)
}).then(data=>{
	return move(qiu3,300)
})
// async await  then return 
// function a(){
// 	return {name:'kangwen'}
// }
// a() = {name:'kangwen'} 


