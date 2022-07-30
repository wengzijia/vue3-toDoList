<template>
  <input type="text" placeholder="请输入任务名称" v-model="value" @input="input" @keydown.enter="enter">
</template>

<script>
import { defineComponent,ref } from "vue";
export default defineComponent({
  name: "navHeader",
  setup(props,ctx) {
    let value = ref('')
    let input = ()=>{
      // 去掉空格
      value.value = value.value.replace(/\s+/g, "")
    }
    // 回车任务
    const enter = ()=>{
      if(value.value.replace(/\s+/g, "")){
        // 把输入框的内容传递给父组件
        ctx.emit('add',value.value)
        // 清空输入框
        value.value = ''
        // console.log(value.value);
      }
    }
    return {
        value,enter,input
    }
  },
});
</script>

<style lang="scss" scoped>
    input{
        margin-bottom: 10px;
    }
</style>