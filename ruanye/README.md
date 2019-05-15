# vuex-lesson
#vuex  核心是store仓库 组件状态管理 
例子：用户名  所有组件都要用到用户名的时候 可以使用vuex 
-- 安装vuex  npm install vuex 
1. vuex数据流流程(单向数据流 )
vuex   view(视图层)-->action(事件或者动作去修改state)-->state 映射到--->view(视图层)
2. 建立vuex文件 
和main.js同级 建立一个store.js 
3. 书写流程 
export default  后面只能跟函数或者对象 
1）导出  export default  new Vuex.Store
2) 在main.js 引入  import store from './store ' 注意 前面的store名字不能变 
3） 挂载在new Vue的实例上面  
```
new Vue({
  store,
  ....
  })
``` 
##vuex里面的各个属性  vuex当做全局组件 
1. strict 是否启用严格模式，一般开发环境会默认使用严格模式
判断是否是开发环境的变  process.env.NODE_ENV 
<!-- development 开发环境  production 生产环境-->
```
strict:process.env.NODE_ENV=='development'
```
在严格模式下 只允许通过mutations去修改state 
2. state 相当于组件的data state的取值 通过this.$store.state.变量名  
```
state:{count:1 }
取值：this.$store.state.count 
``` 
3. getters vuex的计算属性 computed 用来计算state  
```
 getters:{
	  Num(state){
        return state.count+"abc"
	  }	
	}
取值：this.$store.getters.Num
```
actions  mutations 相当于组件的methods(方法函数)
4. mutations 只能处理同步  
组件-->commit -->mutations-->state-->组件
1)组件调用:this.$store.commit('自定义事件名')
```
this.$store.commit('increatment')
```
通过commit调用会把事件传给mutations

2)mutations 定义commit传过来的同名函数,第一个参数是state 
```
mutations:{
  increatment(state){

  }
}
```
3) mutations 里面的函数可以修改state 
```
  increatment(state){
     state.count+=1
  }
```
