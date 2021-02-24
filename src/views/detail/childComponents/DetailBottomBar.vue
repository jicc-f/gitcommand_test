<template>
  <div class="detail-bottom-bar">
    <div class="service">
       <span>客服</span>
    </div>
    <div class="shop">
       <span>店铺</span>
    </div>
    <div class="collect">
       <span>收藏</span>
    </div>
    <div class="join-cart"  @click="joinCart">
      <span>加入购物车</span>
    </div>
    <div class="buy" >
      <span>购买</span>
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
  methods:{
    joinCart(){
      this.$emit("joinCart")
    }
  },
//生命周期
  created(){},
  mounted(){}
}
</script>
<style scoped>
.detail-bottom-bar{
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  /* position: relative; */
  height: 44px;
  line-height: 44px;

  background: white;
  display: flex;
}
.detail-bottom-bar div {
  padding: 0 15px;
}
.detail-bottom-bar .join-cart,.detail-bottom-bar .buy{
 flex: 1;
}
.detail-bottom-bar .join-cart{
  background-color: yellow;
}
.detail-bottom-bar .buy{
  background-color: violet;
}
</style>