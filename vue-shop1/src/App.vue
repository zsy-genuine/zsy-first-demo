
<!-- //    <div id="app"> -->
//     <!-- <div id="nav">
//       <router-link to="/">Home</router-link> |
//       <router-link to="/about">About</router-link>
//     </div>
//     <router-view /> -->
<!-- //     <header>
//       <section>
//         <form>
//           <label for="title">ToDoList</label>
//           <input type="text" id="title" placeholder="添加ToDo">
//         </form>       
//       </section>
//     </header>
//     <section>
//       <h2>正在进行<span id="donecount"></span></h2>
//      	<ol id="todolist" class="demo-box">
// 			</ol>
// 			<h2>已经完成 <span id="donecount"></span></h2>
// 			<ul id="donelist">
// 			</ul>
//     </section>
//     <footer>
// 			Copyright &copy; 2014 todolist.cn <a href="javascript:clear();">clear</a>
// 		</footer>
//   </div>
// </template>

// <style lang="less"> -->
<!-- // #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style> -->
<template>
  <div id="todo" class="todo">
        <div class="header">
            <section>
                <form action="javascript:void(0)">
                    <label for="title">ToDoList</label>
                    <!-- <button class="addBtn" v-on:click="addTodo"></button> -->
                    <input type="text" name="title" placeholder="add todo..." required="required" autocomplete="off" v-model="title" v-on:keypress.enter="addTodo">
                </form>
            </section>
        </div>
        <section>
            <h2>正在进行<span id="todoCount" class="count">{{willDo.length}}</span></h2>
            <ol id="todoList">
                <li v-for="(item,index) in willDo">
                    <input type="checkbox" v-on:click="checkedTodo(index)" v-model="item.done">
                    <p>{{item.title}}</p>
                    <a href="javascript:void(0)" v-on:click="deleteWillTodo(index)">-</a>
                </li>
            </ol>
            <h2>已经完成<span id="doneCount" class="count">{{doneList.length}}</span></h2>
            <ol id="doneList">
                <li v-for="(item,index) in doneList">
                    <input type="checkbox" v-on:click="checkedDone(index)" v-model="item.done">
                    <p>{{item.title}}</p>
                    <a href="javascript:void(0)" v-on:click="deleteDoneTodo(index)">-</a>
                </li>
            </ol>
        </section>
        <p class="footer">Derek</p>
    </div>
</template>
<style lang="less">
      * {
    margin: 0;
    padding: 0;
}

body {
    font-size: 16px;
    background: #cdcdcd;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.header {
    height: 50px;
    background: rgba(47, 47, 47, 0.98);
}

section {
    max-width: 620px;
    margin: 0 auto;
    padding: 0 10px;
}

label {
    float: left;
    width: 100px;
    line-height: 50px;
    color: #ddd;
    font-size: 24px;
    cursor: pointer;
}

.header input {
    float: right;
    width: 60%;
    height: 24px;
    margin-top: 12px;
    text-indent: 10px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24), 0 1px 6px rgba(0, 0, 0, 0.45) inset;
    border: none;
}

.header button{
    float: right;
    width: 48px;
    height: 25px;
    margin-top: 12px;
    background-color: #07FC27;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    outline: none;
    font-weight: bolder;
}

h2 {
    position: relative;
    margin: 26px 0;
}

h2 .count {
    position: absolute;
    top: 2px;
    right: 5px;
    display: inline-block;
    padding: 0 5px;
    height: 20px;
    border-radius: 20px;
    background: #e6e6fa;
    line-height: 22px;
    text-align: center;
    color: #666;
    font-size: 14px;
}

ol {
    margin: 28px 0 32px;
}

ol,
ul {
    list-style-type: none;
}

li {
    height: 32px;
    line-height: 32px;
    background: #fff;
    position: relative;
    margin-bottom: 10px;
    padding: 0 48px;
    border-radius: 3px;
    border-left: 5px solid #629a9c;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
}

li input {
    position: absolute;
    top: 6px;
    left: 22px;
    width: 22px;
    height: 22px;
    cursor: pointer;
}

li p {
    line-height: 34px;
}

li a {
    position: absolute;
    top: 4px;
    right: 5px;
    display: inline-block;
    width: 14px;
    height: 12px;
    border-radius: 14px;
    border: 6px double #fff;
    background: #ccc;
    line-height: 12px;
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
}

#doneList li {
    border-left: 5px solid #999;
    opacity: 0.5;
}

.footer {
    font-size: 14px;
    text-align: center;
    color: #666;
}

@media only screen and (max-width: 400px){
    .header input{
        width: 52%;
    }
}
</style>
<script>
export default {
  data: {
        title: '',
        willDo: [],
        doneList: [],
    },
    beforeMount:function(){
        // 加载localstorage
        var storage=window.localStorage;
        if(storage.getItem("todo") !== null){
            this.willDo = JSON.parse(storage.getItem("todo"));
        }
        if(storage.getItem("done") !== null){
            this.doneList = JSON.parse(storage.getItem("done"));
        }
    },
    methods: {
        addTodo: function() {
            if (this.title === '') { return ''; }
            this.willDo.unshift({ title: this.title, done: false });
            this.title = '';
            this.setLocalStorage();
        },
        deleteWillTodo: function(index) {
            this.willDo.splice(index, 1);
            this.setLocalStorage();
        },
        deleteDoneTodo: function(index) {
            this.doneList.splice(index, 1);
            this.setLocalStorage();
        },
        checkedTodo:function(index){
            this.willDo[index].done = true;
            this.doneList.unshift(this.willDo[index]);
            this.willDo.splice(index,1);
            this.setLocalStorage();
        },
        checkedDone:function(index){
            this.doneList[index].done = false;
            this.willDo.unshift(this.doneList[index]);
            this.doneList.splice(index,1);
            this.setLocalStorage();
        },
        setLocalStorage:function(){
            // 存储localstorage
            var storage=window.localStorage;
            storage.setItem("todo",JSON.stringify(this.willDo));
            storage.setItem("done",JSON.stringify(this.doneList));
        }
    }
}
</script>

  