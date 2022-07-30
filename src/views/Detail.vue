<template>
    <div>
        <h1>这是detail组件</h1>
        <!-- 前面msg是子组件接受的,后面msg是传递的数据 -->
        <!-- @send是子组件分发过来   send是父组件(自己) -->
        <Child :msg='msg' @send='send'></Child>
    </div>
</template>

<script>
import { defineComponent,ref } from 'vue'
import Child from '../components/child/Child.vue'
export default defineComponent({
    name:'Detail',
    components:{
        Child
    },
    setup(){
        let msg = ref('这是父组件的数据')
        let send = (val)=>{
            console.log(val);
        }
        return {
            msg,send
        }
    }
})
</script>

<style lang="scss" scoped>

</style>