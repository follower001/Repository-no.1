import Vue from 'vue'
import App from './App.vue'
import "./styles/global.less"  //导入全局样式

// import styles from "./styles/message.module.less"
// console.log(styles);
// const div = document.createElement("div");
// div.className = styles.message;
// document.body.appendChild(div);
// div.innerText = "6966";

//得到组件生成的根dom 
function getComponentRootDom(comp,props){
    const vm = new Vue({
      render:(h) => h(comp,{props}),
    });
    vm.$mount();
    return vm.$el;
}

import Icon from "./components/Icon"

 var dom = getComponentRootDom(Icon,{type:"icon-home"})
console.log(dom);

new Vue({
  render: h => h(App),
}).$mount('#app')

