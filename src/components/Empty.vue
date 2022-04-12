// 这是一个空白组件、当页面无数据时展示。
<template>
  <div class="empty-container">
      <Icon type="icon-empty" />
      <!-- 这里也可以之间显示传递过来的属性值 -->
      <p>{{text}}</p> 
  </div>
</template>

<script>
import Icon from "../components/Icon.vue"
export default {
    components:{
        Icon,
    },
        props:{
            text:{  
                type:String,
                default:"无数据",
            }
        }
}
</script>

<style lang="less" scoped>
@import "//at.alicdn.com/t/font_3273192_l5nggblpqjc.css";
@import "~@/styles/mixin.less";  //导入混合样式
@import "~@/styles/var.less"; //导入全局颜色
.empty-container{  
    .self-center();   //使用混合样式
    color:@gray;
    text-align: center; //文字居中
}
.icon-container{
    font-size: 72px; //调整图标大小
}

</style>