// 这是一个菜单组件
<template>
  <nav class="menu-container">
      <router-link :exact="item.exact" :to="item.link"  v-for="item in items" :key="item.id" active-class="selected" exact-active-class="" >
          <div class="icon">
              <Icon :type="item.icon" />
          </div>
            <span>{{item.title}}</span>
      </router-link>
  </nav>
</template>

<script>
import Icon from "./Icon.vue"
export default {    
    components:{
        Icon,
    },
    data(){
        return{
            items:[
                {   id:1,
                    link:"/",
                    title:"首页",
                    icon:"icon-home",
                    exact:true
                },
                {
                    id:2,
                    link:"/blog",
                    title:"文章",
                    icon:"icon-wenzhang",
                    exact:false //激活状态是否要精确匹配
                },
                {
                    id:3,
                    link:"/about",
                    title:"关于我",
                    icon:"icon-guanyuwo",
                    exact:true
                },
                {
                    id:4,
                    link:"/project",
                    title:"项目&效果",
                    icon:"icon-xiangmu",
                    exact:true
                },
                {
                    id:5,
                    link:"/message",
                    title:"留言板",
                    icon:"icon-liuyanban",
                    exact:true
                },
            ],
        }
    },
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
@import "//at.alicdn.com/t/font_3273192_l5nggblpqjc.css";
.menu-container{
    color: @gray;
    a{
        display: block;
        padding: 0 40px;
        display: flex;
        align-items: center;
        height: 45px;
        .icon{
            width: 24px;
            font-size: 18px;
        }
        &:hover{
            color: aliceblue;
        }
        &.selected{
            background: darken(@words,1%); //这是less里面的加深函数、将全局颜色再加深
        }
    }
}
</style>