<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
import TabBarItem from './TabBarItem.vue'
export default {
//组件
  components:{
    TabBarItem   
  },
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
.tab-bar{
    background: red;
    height: 50px;
    position: fixed;
    bottom: 0;
    width: 100%;
    display: flex;
    /* z-index: 9; */
}

</style>