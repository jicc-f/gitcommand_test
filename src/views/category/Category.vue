<template>
  <div class="category">
  <nav-bar>
      <div class="" slot="center">分类</div>
    </nav-bar>
  
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue';

export default {
//组件
  components:{
    NavBar
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
  created(){
    
  },
  mounted(){}
}
</script>
<style scoped>
</style>