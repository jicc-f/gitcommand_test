<template>
  <div class="">
     <tab-bar>
       <tab-bar-item  path = '/home'>
        <img slot="tab-logo" src="~assets/img/tabbar/home.jpg">
        <img slot="tab-logo-active" src="~assets/img/tabbar/home-active.jpg">
        <span slot="tab-text">首页</span>
       </tab-bar-item>
       <tab-bar-item  path="/category">
         <img slot="tab-logo" src="~assets/img/tabbar/category.jpg">
         <img slot="tab-logo-active" src="~assets/img/tabbar/category-active.jpg">
         <span slot="tab-text">分类</span>
     </tab-bar-item>
      <tab-bar-item  path="/cart">
         <img slot="tab-logo" src="~assets/img/tabbar/cart.jpg">
         <img slot="tab-logo-active" src="~assets/img/tabbar/cart-active.jpg">
        <span slot="tab-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item  path="/profile">
         <img slot="tab-logo" src="~assets/img/tabbar/profile.jpg">
         <img slot="tab-logo-active" src="~assets/img/tabbar/profile-active.jpg">
        <span slot="tab-text">个人</span>
     </tab-bar-item>
     </tab-bar>
  </div>
</template>

<script>
import {TabBar,TabBarItem} from 'components/common/tabbar'
export default {
//组件
  components:{
      TabBar,TabBarItem
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
</style>