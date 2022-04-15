// 这是一个侧边栏组件、负责包含Menu和Contact
<template>
  <div class="siteAside-container">
    <div class="avatar">
      <Avatar
        url="https://img1.baidu.com/it/u=3551597664,3303688532&fm=253&fmt=auto&app=120&f=JPEG?w=706&h=500"
        :size="100"
      />
    </div>
     <span>XXX的个人博客</span>
    <Menu />
    <Contact />
  </div>
</template>

<script>
import Avatar from "./Avatar.vue";
import Menu from "./Menu.vue";
import Contact from "./Contact.vue";
export default {
  components: {
    Avatar,
    Menu,
    Contact,
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.siteAside-container {
    span{
        padding: 10px 0;
        color: @gray;
        display: flex;
        justify-content: center;
    }
  width: 100%;
  height: 100%;
  background: @dark;
  .avatar {
    display: flex;
    justify-content: center;  //该属性用于设置弹性盒子子元素在横轴方向上的对齐方式：居中
    align-items: center; //该属性用于设置弹性盒子子元素在纵轴方向上的对齐方式：居中
  }
}
</style>