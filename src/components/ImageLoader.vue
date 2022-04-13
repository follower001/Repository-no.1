//这是一个图片加载组件、渐进式图片
<template>
<div class="imageLoader-container">
    <!-- 这是占位图 -->
    <img v-if="!everythingDone" class="placeHolder" :src="placeHolder" />  
    <!-- 这是原图，图片有一个专属的load事件 -->
    <img 
    @load="handleLoad" 
    :src="src" 
    :style="{ opacity: originOpacity, transition:`${duration}ms` }" />
    <!-- ☆上面通过模板字符串、使用属性值 -->
</div>
</template>

<script>
export default {
        props:{
            src:{  //原图地址
                type:String,
                require:true
            },
            placeHolder:{  //占位图地址
                type:String, 
                require:true
            },
            duration:{  //原图加载过渡时间
                type:Number,
                default:2000
            }
        },
        data(){
            return{
                originLoaded:false,  //原图是否加载完成、根据这个只判断原图的opacity的值
                everythingDone:false,//是否原图已经完全显现出来 opactiy：1时、这是为了避免切换到原图之前有极小的空白时间、下面的settimeout就是为了处理该问题
            }
        },
        computed:{
            originOpacity(){
                return this.originLoaded ? 1 : 0;  //计算原图opacity的值。
            }
        },
        methods:{
            handleLoad(){
                this.originLoaded = true; //数据加载完成后改变状态。
                setTimeout(() => {       //处理更改为原图之前极短的空白问题
                   this.everythingDone = true;
                   this.$emit("load"); //向父组件抛出事件、通知一声原图已经加载完毕
                }, this.duration);
            }
        }
}
</script>

<style lang="less" scoped>
@import "~@/styles/mixin.less";
.imageLoader-container{
    width:100%;    //撑满父元素
    height: 100%;  //撑满父元素
    position: relative; 
    overflow: hidden;
    img{
        .self-fill();  //图片撑满父元素
        object-fit: cover;  //避免图片拉伸
    }
    // .origin{
    //     opacity: 0;   //把原图设为透明、目前只 出现占位符
    // }
    .placeHolder{
        filter: blur(2vw);//给占位图再加一个模糊效果
    }
}
</style>