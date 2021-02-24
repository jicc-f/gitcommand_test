<template>
  <div class="home-swiper">
    <swiper>
      <swiper-item v-for = "item in banners">
        <a><img :src = "item.image" @load = "swimageLoad()"></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from '../../../components/common/swiper'
export default {
//组件
  components:{
    Swiper,SwiperItem
  },
//父传子
  props:{
     banners:Array
  },
//数据
  data(){
    return {
      isLoad : false
    }
  },
//监听
  watch:{},
//计算属性
  computed:{},
//方法
  methods:{
    swimageLoad(){
     if(!this.isLoad){
       this.$emit('swimageLoad');
       this.isLoad = true;
     }
    }
  },
//生命周期
  created(){},
  mounted(){}
}
</script>
<style scoped>
</style>