<template>
  <div class="goods">
      <goods-item v-for="(item,index) in goods"  :goods-item = "item"  :key="index"></goods-item>
  </div>
</template>
<script>
import goodsItem from './GoodsItem.vue'
export default {
//组件
  components:{
       goodsItem
  },
//父传子
  props:{
      goods:Array
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
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100vw;
}
</style>