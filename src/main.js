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
// function getComponentRootDom(comp,props){
//     const vm = new Vue({
//       render:(h) => h(comp,{props}),
//     });
//     vm.$mount();
//     return vm.$el;
// }

// import Icon from "./components/Icon"
// var dom = getComponentRootDom(Icon,{type:"icon-home"});
// console.log(dom);


//向实例注入成员
// Vue.prototype.sayHello = function () {
//   console.log("hello");
// }

//ref 获取真实的dom元素，如果在组件中添加ref，会得到子组件实例（即可以改变子组件的数据）


const vm = new Vue({
  render: h => h(App),
}).$mount('#app')

console.log(vm);
