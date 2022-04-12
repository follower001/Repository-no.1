<template>
  <div class="test-container" id="app">
  <!-- <Avatar url="https://img1.baidu.com/it/u=1147217842,409372213&fm=253&fmt=auto&app=138&f=JPEG?w=510&h=340" 
  :size="50" /> -->
  <!-- <Icon type="icon-home" /> -->
  <!-- <Pager :current="current" :total="total"  @changeCurrentPage="changePage" /> -->
  <Empty text="啥也没有" />
  </div>
</template>

<script>
import Avatar from "./components/Avatar.vue"
import Icon from "./components/Icon.vue"
import Pager from "./components/Pager.vue"
import Empty from "./components/Empty.vue"
export default {
  name:"App",
    components:{
      Avatar,
      Icon,
      Pager,
      Empty,
    },
    data(){
      return {
        current:1,
        total:302,
      }
    },
    methods:{
      changePage(newPage){
        console.log("更改页码");
          this.current = newPage;
      }
    }
}
</script>

<style>
.test-container{
  position: relative;
  width:500px;
  height:400px;
  border: 1px solid;
  margin: 0 auto;
}
</style>
