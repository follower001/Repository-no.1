//这是一个头像组件
<template>
<!-- 这里绑定属性src 绑定style为一个对象 -->
  <img class="avatar-container" :src="url" :style="{
      width:size + 'px',
      height:size + 'px'
  }" />
</template>

<script>
export default {
    props:{
        url:{
            type:String,
            require:true,
        },
        size:{
            type:Number,
            default:50,  //这里设置一个默认值
        }
    }
}
</script>

<style lang="less" scoped>
.avatar-container{
    border-radius: 50%; //图片的圆角处理
    object-fit: cover; //防止图片宽高比例不对应、导致图片拉伸。
}

</style>>
