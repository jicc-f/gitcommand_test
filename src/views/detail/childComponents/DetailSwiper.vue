<template>
      <swiper class = "detail-swiper">
          <swiper-item v-for = "item in topImags" :key ="item">
              <a>
                  <img :src = "item" alt = "" @load = "imageLoad"/>
              </a>
          </swiper-item>
      </swiper>
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
    topImags:Array
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
    imageLoad(){
      this.$emit("dsimageLoad")
    }
  },
//生命周期
  created(){},
  mounted(){}
}
</script>
<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>