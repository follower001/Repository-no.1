import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from "./routes"

Vue.use(VueRouter);//使用vue插件

const router = new VueRouter({
      //配置  不同的访问路径匹配不同的组件
      routes,
      mode:"history"
})

export default router;