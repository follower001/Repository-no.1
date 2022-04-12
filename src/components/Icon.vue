// 这是一个图标组件
<template>
    <!-- 这里第一个class的值必须是iconfont、第二个绑定class的值决定了图标类型 -->
  <i class="iconfont icon-container" :class="type"></i>
</template>
// 这里的绑定class的值可以为字符串、数组或对象都可以。
<script>
export default {
    props:{
        type:{
            type:String,
            require:true
        }
    }
}
</script>

<style scoped>
/* 首先导入矢量库的代码 */
@import "//at.alicdn.com/t/font_3273192_l5nggblpqjc.css";

</style>