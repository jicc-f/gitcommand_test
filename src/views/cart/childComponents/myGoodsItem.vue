<template>
  <div class="my-goods">
     <select-i class = "select-i" @click.native = "sClick" :is-checked = "itemInfo.isChecked"></select-i>
      <div class="goods-info">
        <div class="left">
          <img :src="itemInfo.image">
        </div>
        <div class="right">
          <p class="title">{{itemInfo.desc}}</p>
          <span class="price">￥ {{itemInfo.price}}</span>
          <span class="counter">X{{itemInfo.counter}}</span>
        </div>
      </div>
  </div>
</template>

<script>
import SelectI from 'components/common/icon/select.vue'
export default {
//组件
  components:{
        SelectI
  },
//父传子
  props:{
      itemInfo : Object
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
  methods:{
      sClick(){
        //myGoods的点击
          this.itemInfo.isChecked = !this.itemInfo.isChecked ;
      }
  },
//生命周期
  created(){},
  mounted(){}
}
</script>
<style scoped>
  .my-goods,
  .goods-info {
    display: flex;
  }
  .my-goods{
    width: 100vw;
    height: 100px;
    padding: 10px 0;
  }
  .goods-info{
    width: 90%;
  }
  .select-i{
    width: 10%;
  }
  .left {
    width: 30%;
  }
  .left img {
    width: 100%;
    height: 100%;
  }
  .right {
    position: relative;
    width: 70%;
  }
  .counter {
    position: absolute;
    right: 0;
    font-size: 25px;
  }
  .title{
    white-space: nowrap;
    text-overflow: ellipsis;
     overflow: hidden;
  }
</style>