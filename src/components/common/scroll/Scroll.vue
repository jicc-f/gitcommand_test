<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
       <slot></slot>
   </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
//组件
  components:{},
//父传子
  props:{},
//数据
  data(){
    return {
        scroll:{}
    }
  },
//监听
  watch:{},
//计算属性
  computed:{},
//方法
  methods:{
    finishPullUp(){
    
    }
  },
//生命周期
  created(){},
  mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{
        click:true,
         probeType:0,
        pullUpLoad:true
    }),
    //滚动的位置
    this.scroll.on("scroll",(position)=>{
      //发生滚动传递Scroll事件和位置
      this.$emit("scroll",position);
      //  console.log(position);
    }),
    this.scroll.on('pullingUp',() => {
        this.$emit("LoadMore");   
    })
   
  }
}
</script>
<style scoped>
</style>