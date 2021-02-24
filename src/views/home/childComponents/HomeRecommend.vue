<template>
  <div class="home-recommend">
      <div class="home-recommend-item" v-for="item in recommends" :key="item.title">
        <a>
         <div><img :src="item.image" alt="" /></div>
          <span>{{item.title}}</span>
        </a>
      </div>
  </div>
</template>

<script>
export default {
//组件
  components:{},
//父传子
  props:{
      recommends:Array
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
.home-recommend{
  display: flex;
  text-align: center;
  padding: 10px 0;
  /* border-bottom: 5px solid lightgray; */
}
.home-recommend-item{
  flex: 1;
}
.home-recommend-item img{
width: 50px;
height: 50px;
}
</style>