<template>
  <div class="select" >
    <img src="../../../assets/img/icon/select.png" class="select" :class="{isCheck :isChecked }" @click="sClick"> 
  </div>
</template>
<script>
export default {
//组件
  components:{},
//父传子
  props:{
    isChecked:{
      type:Boolean,
    }
    
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
      this.sCheck = !this.sCheck
    }
  },
//生命周期
  created(){},
  mounted(){}
}
</script>
<style scoped>
.select{
  position: relative;
}
.select img{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  transform: translate(0,-50%);
  left: 0;
  border-radius: 50%;
}
.isCheck{
   background: red;
}

</style>