<template>
  <div class="layout-container">
      <div class="left">
          <slot name="left"></slot>
      </div>
      <div class="main">
          <slot></slot>
      </div>
      <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.layout-container{
    width: 100%;
    height: 100%;
    display: flex;
    .left,
    .right{
        flex: 0 0 auto; //表示这个区域的宽高不能增长和压缩、必须保证它的宽度
    }
    .main{
        flex: 1 1 auto; //主区域可以增长和压缩
        overflow: hidden;
    }
}
</style>