<template>
  <div class="test-container" id="app">
    <Layout>
      <template #left>
          <div class="aside">
             <SiteAside />
          </div>
      </template>
      <template #default>
        主区域
      </template>
    </Layout>
  </div>
</template>

<script>
// import Avatar from "./components/Avatar.vue"
// import Icon from "./components/Icon.vue"
// import Pager from "./components/Pager.vue"
// import Empty from "./components/Empty.vue"
// import ImageLoader from "./components/ImageLoader.vue"
// import Contact from "./components/Contact.vue"
// import Menu from "./components/Menu.vue"
import SiteAside from "./components/SiteAside.vue"
import Layout from "./components/Layout.vue"
export default {
  name:"App",
    components:{
      // Avatar,
      // Icon,
      // Pager,
      // Empty,
      // ImageLoader,
      // Contact,
      // Menu,
      SiteAside,
      Layout,

    },
    data(){
      return {
        current:1,
        total:302,
      }
    },
    methods:{
      changePage(newPage){    //分页组件处理点击事件
        console.log("更改页码");
          this.current = newPage;
      },
      handleLoaded(){
          console.log("图片加载完成！")
      }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.test-container{
 .self-fill(fixed);
  }
 .aside{
   width: 250px;
   height: 100%;
}

</style>
