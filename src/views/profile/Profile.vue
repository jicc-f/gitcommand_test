<template>
  <div class="profile">
  <profile-top-nav></profile-top-nav>
  <span class="iconfont  iconhuanfu"></span>
  <span class="iconfont  iconshezhi"></span>
  </div>
</template>

<script>
import profileTopNav from './childComponents/profileTopNav.vue'
export default {
//组件
  components:{
    profileTopNav
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
@import "~assets/font/iconfont.css"
</style>