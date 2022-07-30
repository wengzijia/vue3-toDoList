<template>
<div>
    <NavHeader></NavHeader>
    <NavMain></NavMain>
    <NavFooter></NavFooter>
    <button @click="goto">跳转</button>
    {{name}}-{{num}}-{{obj.msg}}
</div>
</template>

<script>
    import NavHeader from "@/components/navHeader/NavHeader.vue"
    import NavMain from "@/components/navMain/NavMain.vue"
    import NavFooter from "@/components/navFooter/NavFooter.vue"
    import { computed, defineComponent,ref,reactive, onMounted } from "vue"
    import {useStore} from "vuex"
    import {useRouter,useRoute} from "vue-router"
    export default defineComponent({
      name:'Home',
      components:{
        NavHeader,NavMain,NavFooter
      },
      setup(){
        const store = useStore()
        // router是全局路由对象
        const router = useRouter()
        // route是当前路由对象(用来获取参数)
        const route = useRoute()
        // query传递过来的参数都是字符串类型(JSON.parse转为对象使用)
        // console.log(route.query);
        console.log(route.params);
        let list = computed(()=>{
          return store.state.list
        })
        let name = ref('')
        let num = ref()
        let obj = ref({})
        // console.log(obj)
        onMounted(()=>{
          name.value = route.params.name
          num.value = route.params.num * 1
          obj.value = JSON.parse(route.params.obj)
          console.log(obj);
        })
        let goto = ()=>{
          // 跳转路由
          // push函数里面可以传入跳转的路径
          // back:回退到上一页
          // forward:去到下一页
          // go(整数) 整数代表前进  负数代表后退
          router.push('/test')
        }
        return{
          store,
          router,
          list,
          name,num,obj,
          goto
        }
      }
    })
</script>

<style lang="scss" scoped>

</style>