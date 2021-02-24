<template>
  <div class="cart">
    <nav-bar>
      <div class="" slot="center">购物车({{getMygoodsL}})</div>
    </nav-bar>
    <scroll class = "content">
     <my-goods></my-goods>
     </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
//导入mapGetters
import{mapGetters} from 'vuex'
//导入公共组件
import NavBar from '../../components/common/navbar/NavBar.vue';
import Scroll from 'components/common/scroll/Scroll.vue';
//导入子组件
import  MyGoods  from './childComponents/myGoods.vue'
import  CartBottomBar from './childComponents/cartBottomBar.vue'



export default {
//组件
  components:{
    NavBar,MyGoods,Scroll,CartBottomBar
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
  computed:{
//把getters转化成计算属性
...mapGetters(['getMygoodsL','getMygoods'])
  },
//方法
  methods:{},
//生命周期
  created(){},
  mounted(){}
}
</script>
<style scoped>
.cart{
  height: 100vh;
}
.content{
  height: calc(100% - 44px - 50px - 30px);
  overflow: hidden;
}
</style>