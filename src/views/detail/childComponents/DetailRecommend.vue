<template>
    <goods :goods = "recommendList"></goods>
</template>

<script>
import {Goods,GoodsItem } from '../../../components/content/goods/goods'
export default {
//组件
  components:{
      Goods,GoodsItem 
  },
//父传子
  props:{
      recommendList:Array
  },
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
.detail-recommend{
    width: 100vh;
}
</style>