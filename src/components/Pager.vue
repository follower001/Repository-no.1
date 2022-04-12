// 这是一个分页组件
<template>
<!-- 这里标记一下、对于子组件的根元素、使用这种规范去命名类样式、这样父组件很好控制子组件的根元素样式 -->
<!-- 这个组件只有在总页数大于1时才会显示、总页数会在conputed中计算出来 -->
  <div class="pager-container" v-if="pageNumber > 1" >
    <!-- 首先考虑每个元素中、哪些属性是固定的、哪些是动态的 -->
    <!-- 下面取决有无类样式disabled的方法、取决于属性值，也可以写多个 -->
        <a @click="changePage(1)" :class="{disabled : current === 1}" >|&lt;&lt;</a>
        <a @click="changePage(current-1)" :class="{disabled : current === 1}" >&lt;&lt;</a>
        <a @click="changePage(n)" v-for="(n,i) in numbers" :key="i" :class="{active : n === current}" >{{n}}</a>
        <a @click="changePage(current + 1)" :class="{disabled : current === pageNumber}" >&gt;&gt;</a>
        <a @click="changePage(pageNumber)" :class="{disabled : current === pageNumber}" >&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
    props:{
      current:{  //表示当前页码
        type:Number,
        default:1
      },
      total:{    //表示总数据量
        type:Number,
        default:0
      },
      limit:{   //每一页含有最多数据量
        type:Number,
        default:10
      },
      visibleNumber:{   //可见的页码数
          type:Number,
          default:10
      }
    },
    computed:{
      pageNumber(){   //计算总页数
       return Math.ceil(this.total /this.limit);
      },
      visibleMin(){   //最小的显示页码
          let min = this.current -Math.floor(this.visibleNumber/2);
          if(min < 1){
            min = 1;
          }
          return min;
      },
      visibleMax(){   //最大的显示页码
        let max = this.visibleMin + (this.visibleNumber - 1);
        if(max > this.pageNumber){
          max = this.pageNumber;
        }
        return max;
      },
      numbers(){   //计算出所有显示的页码数、这是一个数组
          let nums = [];
          for (let i = this.visibleMin ; i <=this.visibleMax;i++){
            nums.push(i);
          }
          return nums;
      }
    },
    methods:{
      changePage(newPage){    //点击处理操纵
      if(newPage === this.current){
        return;
      }
        this.$emit("changeCurrentPage",newPage);//此处向父组件抛出事件、此处的“changeCurrentPage”和父组件中的注册事件名一致，newpage参数为子组件向父组件传递的数据（新的页码）
      }
    }
}
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.pager-container{
  
  display: flex;  //设置弹性布局  
  justify-content: center;  //横向居中
  margin:20px 0;
  a{
    cursor: pointer;
    color:@primary;
    margin: 0 6px;
    &.disabled{  //表示在a标签中、含有disable类样式的元素、
      color:@lightWords;
      cursor: not-allowed;  //改变鼠标样式为不可选取
    }
    &.active{  //含有这个样式的表示当前页
        color:@words;
        font-weight: bold; //加粗字体
        cursor: text; 
    }
  }
}

</style>