<template>
  <div class="back-top">
    &gt;
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
.back-top{
    padding: 8px;
    background: lemonchiffon;
    border: 1px solid black;
    border-radius: 50%;
/* 定位 */
    position: fixed;
    right: 25px;
    bottom: 80px;
    z-index: 10;
/* 旋转 */
transform: rotate(-90deg);
}
</style>