import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"  //导入全局样式
import router from "./router"
import showMessage from './Utils/showMessage'
window.showMessage = showMessage;

const vm = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

