<template>
    <div>
        <!-- <span>state里面的名字:{{username}}</span><br/>
        <span>getters里面的名字:{{mousername}}</span> -->
        <span @click="modifyUser">点击修改名字</span><br/>
        <!-- 模块下的值<span>{{$store.state.user.name}}</span> -->
        模块下的值<span>{{name}}{{rename}}</span>
        <span @click="setname()">模块改名</span>
    </div>
</template>
<script>

import { createNamespacedHelpers } from 'vuex'
// import {mapState,mapGetters,mapActions} from 'vuex'
const {mapState,mapGetters,mapActions} = createNamespacedHelpers('user')

export default {
    computed:{
        // ...mapState(['username']),
        ...mapState(['name']),
        // ...mapState('user',['name']),
        // ...mapGetters(['mousername'])
        ...mapGetters(['rename'])
    },
    methods:{
        // ...mapActions(['modifyname']),
        ...mapActions(['setname']),
        modifyUser(){
            // this.modifyname()
            // this.$store.dispatch('modifyname')
        }
    }
}
</script>
