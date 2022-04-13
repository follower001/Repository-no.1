// 这是一个联系方式组件、复用性不高
<template>
  <ul class="contact-container">
      <li>
          <a href="">
              <!-- 这里用div包含icon 主要是为了方便控制icon样式 -->
              <div class="icon">
                  <Icon type="icon-QQ" />
              </div>
              <span>735647220</span>
          </a>
          <div class="pop">
              <img src="https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500" alt="">
          </div>
      </li>
      <li>
          <a href="">
              <div class="icon">
                  <Icon type="icon-weixin" />
              </div>
              <span>19855538853</span>
          </a>
          <div class="pop">
              <img src="https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500" alt="">
          </div>
      </li>
      <li>
          <a href="">
              <div class="icon">
                  <Icon type="icon-youxiang" />
              </div>
              <span>735647220@qq.com</span>
          </a>
          <div class="pop">
              <img src="https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500" alt="">
          </div>
      </li>
      <li>
          <a href="">
              <div class="icon">
                  <Icon type="icon-github-fill" />
              </div>
              <span>follower001</span>
          </a>
          <div class="pop">
              <img src="https://img2.baidu.com/it/u=1989038259,1842360401&fm=253&fmt=auto&app=138&f=PNG?w=500&h=500" />
          </div>
      </li>
  </ul>
</template>

<script>
import Icon from "../components/Icon.vue"
export default {
    components:{
        Icon,
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.contact-container{
    color: @gray;
    list-style: none;
    padding: 20px;
    margin: 0;
    a{
        display: flex;  //设置弹性盒子、使内容元素并排
        align-items: center;   //纵向居中对齐这里面的各项元素
    }
    li{
        cursor: pointer;
        height: 30px;
        line-height: 30px;
        margin:14px 0;
        position: relative;
    }
    .icon{
       font-size: 26px;  //设置图标大小
       width: 36px;  //图标对齐
    }
    .pop{
        width: 150px;
        height: 150px;
        position: absolute;
        left: 0;
        bottom: 25px;
        border-radius: 5px;
        padding: 10px 15px;
        background: #fff;
        &.hover{
            animation: appear 1s;
        }
        &::after{   //利用伪元素制作小三角
            content: "";
            position: absolute;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            width: 8px;
            height: 8px;
            bottom:6px;
            background: #fff;
        }
        img{
            width: 100%;
            height: 100%;
        }
        @keyframes appear {
                from{
                    opacity: 0;
                    transform: rotate(90deg);
                }
                to{
                    opacity: 1;
                    transform: rotate(0);
                }
        }
    }
}
</style>