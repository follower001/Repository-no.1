<template>
  <div class="test-container" id="app">
  <!-- <Avatar url="https://img1.baidu.com/it/u=1147217842,409372213&fm=253&fmt=auto&app=138&f=JPEG?w=510&h=340" 
  :size="50" /> -->
  <!-- <Icon type="icon-home" /> -->
  <!-- <Pager :current="current" :total="total"  @changeCurrentPage="changePage" /> -->
  <!-- <Empty text="啥也没有" /> -->
  <!-- <ImageLoader src="https://img2.baidu.com/it/u=2651516248,1893985744&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
    placeHolder="https://img2.baidu.com/it/u=3054625082,925648916&fm=253&fmt=auto&app=138&f=JPEG?w=767&h=500" 
    @load="handleLoaded" 
    :duration="3000" /> -->
    <!-- <Contact /> -->
    <!-- <Menu /> -->
    <SiteAside />
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

<style>
/* .test-container{
  position: relative;
  width:400px;
  height:400px;
  border: 1px solid;
  margin: 0 auto;
  padding-top: 200px;
  background: #000;
} */
.test-container{
  width: 400px;
  height: 600px;
  border: 2px solid red;
  /* background: #000; */
  margin: 0 auto;
}
</style>
