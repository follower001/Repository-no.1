<template>
  <div class="test-container" id="app">
    <Layout>
      <template #left>
          <div class="aside">
             <SiteAside />
          </div>
      </template>
      <template #default>
        <RouterView />
      </template>
    </Layout>
  </div>
</template>

<script>
import SiteAside from "./components/SiteAside.vue"
import Layout from "./components/Layout.vue"
export default {
  name:"App",
    components:{
      SiteAside,
      Layout,
    },
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
