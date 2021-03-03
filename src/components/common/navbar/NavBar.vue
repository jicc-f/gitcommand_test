<template>
  <div class="nav-bar">
      <div class="left">
          <slot name="left"></slot>
      </div>
       <div class="center">
          <slot name="center"></slot>
      </div>
       <div class="right">
          <slot name="right"></slot>
      </div>
  </div>
</template>

<script>
export default {
//组件
  components:{},
//父传子
  props:{},
//数据
  data(){
    return {
    }
  },
//监听
  watch:{},
//计算属性
  computed:{},
//方法
  methods:{},
//生命周期
  created(){},
  mounted(){}
}
</script>
<style scoped>
.nav-bar{
    height: 44px;
    line-height: 44px;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0; */
    display: flex;
    text-align:center ;
    width: 100vw;
    /* z-index: 9; */

}
.left,.right{
  width: 50px;
  background-color: palevioletred;
}
.center{
  flex: 1;
  background-color: purple;
}
</style>