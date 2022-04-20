// 这是一个联系方式组件、复用性不高
<template>
  <ul class="contact-container">
      <li>
          <a href="">
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
    padding: 15px;
    margin: 0;
    a{
        display: flex;  //设置弹性盒子、使内容元素并排
        align-items: center;   //纵向居中对齐这里面的各项元素
        cursor: pointer;  
    }
    li{
        height: 30px;
        line-height: 30px;
        margin:14px 0;
        position: relative;
        // @keyframes appear {
        //     from{
        //         transform: scaleY(0);
        //     }
        //     to{
        //         transform: scaleY(1);
        //     }
        // }
        &:hover{
            .pop{
            //    animation: appear 0.5s forwards;  //这里的动画过渡效果可以用keyframes  也可以之间使用transition。
            transform: scaleY(1);
            transition: 0.3s;
            }
        }
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
        bottom: 30px;
        border-radius: 5px;
        padding: 10px 15px;
        background: #fff;
        transform: scaleY(0);
        transform-origin: center bottom; //设置变形原点、横向在中间、纵向在下面
        &::after{   //利用伪元素制作小三角
            content: "";
            position: absolute;
            left: 50%;
            transform: translate(-50%) rotate(45deg);
            width: 8px;
            height: 8px;
            bottom:-4px;
            background: rgb(255, 255, 255);
        }
        img{
            width: 100%;
            height: 100%;
        }
        
        
    }
}
</style>