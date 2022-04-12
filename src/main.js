import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"  //导入全局样式
new Vue({
  render: h => h(App),
}).$mount('#app')
