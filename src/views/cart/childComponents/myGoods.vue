<template>
  <div>
   <my-goods-item v-for = "(item,index) in getMygoods" :item-info = "item" :key="index"></my-goods-item>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import myGoodsItem from './myGoodsItem.vue'
  export default {
    //组件
    components: {
    
     myGoodsItem
    },
    //父传子
    props: {
      mygoods: Array
    },
    //数据
    data() {
      return {}
    },
    //监听
    watch: {},
    //计算属性
    computed: {
      ...mapGetters(['getMygoods', 'getMygoodsL'])
    },
    //方法
    methods: {
      sClick(){
      
      },
    
    },
    //生命周期
    created() {},
    mounted() {}
  }
</script>
<style scoped>
  
</style>