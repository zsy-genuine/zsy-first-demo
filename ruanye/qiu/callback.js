// 省 市 区 县
ajax(
	{
	  url:'省的接口地址',
	  sucecess:function(data){
		   let res1 = data[1] //北京 
		  ajax({
			 url:'市的接口',
			 data:res1, 
			 sucecess:function(data){
				data //区
			 }
		  }) 
	  }	
	}
)
ajax(
	{
	  url:'省的接口地址',
	  sucecess:function(data){
		   let res1 = data[1] //北京 
		 getqu(res1)
	  }
	}
)
function getqu(beijing){
    ajax({
			 url:'市的接口',
			 data:beijing, 
			 sucecess:function(data){
				data //区
			 }
		  }) 
}