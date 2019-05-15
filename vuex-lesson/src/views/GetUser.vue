<template>
    <div>
        <span>{{username1}}</span>
        <button @click="getuser">获取用户名</button>
    </div>
</template>
<script>
import {MapState, mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['username1'])
    },
    methods:{
        getuser(){
            this.$store.dispatch('getname')
        }
    }
}
</script>

