<template>
    <div>
        <h1>这是child组件</h1>
        <h2>父组件传递过来的数据:{{msg}}</h2>
        <button @click="send">传值给父组件</button>
    </div>
</template>

<script>
import { defineComponent,onMounted,ref } from "vue";

export default defineComponent ({
    name:'Child',
    // 接受父组件传递过来的参数
    // props接受的数据也不能直接改
    props:{
        msg:{
            // 数据类型校验
            type:String,
            // 是否必传 默认是false
            // required:true,
            // 设置默认值
            // default:'默认值'
        }
    },
    // props是接受父组件传递过来的数据
    // ctx是触发父组件的事件
    setup(props,ctx){
        let childMsg = ref('我是子组件的数据')
        let childNum = ref(10)
        let send = ()=>{
            // 而是通过cxt.emit分发事件
            // emit第一个参数是事件名称 第二个是传递的数据
            ctx.emit('send',childMsg.value)
        }
        // 分发事件不一定单击触发,挂载周期也能触发
        onMounted(()=>{
            // 一个参数传参
            ctx.emit('send',childMsg.value)
            // 数据传参
            ctx.emit('send',[childMsg.value,childNum.value])
            // 对象传参
            ctx.emit('send',{
                msg:childMsg.value,
                num:childNum.value
            })
        })
        return{
            childMsg,send
        }
    }
})
</script>

<style lang="scss" scoped>

</style>