<template>
    <div>
        <button @click="start">开始任务</button>
    </div>
</template>

<script>
import { defineComponent,ref,reactive,onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";

    export default defineComponent({
        name:'Start',
        setup(){
            let router = useRouter()
            let name = ref('翁')
            let num = ref(10)
            let obj = reactive({
                msg:"hello world"
            })
            onMounted(()=>{
                //组件挂载的过程
                //数据dom...
                //发请求
                //数据初始化的操作接收路由传递的参数
                console.log('onMounted')
            })
            onUnmounted(()=>{
                // 组件卸载生命周期
                console.log('onUnmounted');
            })
            let start = ()=>{
                // push 如果是传的对象的形式 就可以传递参数
                // query传参
                // push里面还可以传入name  name是路由名字
                // query传参path和name都可以,参数是携带在地址栏,刷新不会丢失
                // params 通过name跳转才能拿到参数(route.params),参数是不在地址栏,刷新会丢失
                router.push({
                    // path:'/home',
                    name:'Home',
                    // query:{
                    //     name:name.value,
                    //     num:num.value,
                    //     obj:JSON.stringify(obj),
                    // }
                    params:{
                        name:name.value,
                        num:num.value,
                        obj:JSON.stringify(obj),
                    }
                })
            }
            return {
                name,num,obj,
                start
            }
        }
    })
</script>

<style lang="scss" scoped>

</style>