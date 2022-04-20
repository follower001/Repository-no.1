// 这是一个菜单组件
<template>
  <nav class="menu-container">
      <a :href="item.link"  v-for="item in items" :key="item.id" :class="{selected : isSelected(item)}" >
          <div class="icon">
              <Icon :type="item.icon" />
          </div>
            <span>{{item.title}}</span>
      </a>
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
                    icon:"icon-home"
                },
                {
                    id:2,
                    link:"/blog",
                    title:"文章",
                    icon:"icon-wenzhang",
                    startWith:true //只要当前路径以link开头、则为选中当前菜单
                },
                {
                    id:3,
                    link:"/about",
                    title:"关于我",
                    icon:"icon-guanyuwo"
                },
                {
                    id:4,
                    link:"/project",
                    title:"项目&效果",
                    icon:"icon-xiangmu"
                },
                {
                    id:5,
                    link:"/message",
                    title:"留言板",
                    icon:"icon-liuyanban"
                },
            ],
        }
    },
    methods:{
        isSelected(item){    //用来判断哪个a标签被选中。
        var path = item.link;
        var curPathName = location.pathname;
           if(item.startWith){
               return curPathName.startsWith(path);//获取当前页面的路径、和传入的路径参数做比较。这里"文章"需要一个模糊匹配、以什么路径开头就可以，不需要精确匹配。
           }  
            return curPathName === path;
        }
    }

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
            background: darken(@words,8%); //这是less里面的加深函数、将全局颜色再加深
        }
    }
}
</style>