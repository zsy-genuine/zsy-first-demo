<template>
    <div>
        <span>{{msg}}</span>
        <span>我来自传值{{abc}}</span>
    </div>
    <!-- msg.vue子组件 -->
</template>
<script>
export default{
    props:{
        abc:{
            default:()=>([1,2,3])
        }
    },
    data(){
        return{
            msg:'我是msg组件'
        }
    }
}
</script>