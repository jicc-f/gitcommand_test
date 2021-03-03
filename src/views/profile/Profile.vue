<template>
  <div class="profile">
    <profile-top-nav></profile-top-nav>
    <!-- <span class="iconfont  iconhuanfu"></span>
  <span class="iconfont  iconshezhi"></span> -->
    <span @click="registerClick" >注册</span>


    
    
  </div>
 
</template>

<script>
  import profileTopNav from './childComponents/profileTopNav.vue'
  export default {
    //组件
    components: {
      profileTopNav
    },
    //父传子
    props: {},
    //数据
    data() {
      return {
        
      }
    },
    //监听
    watch: {},
    //计算属性
    computed: {},
    //方法
    methods: {

      registerClick() {
        this.$router.replace('/register');
        
      },
      telCheck(e){
        // console.log(e)
      }
    },
    //生命周
    created() {
      
    },
    mounted() {}
  }
</script>
<style scoped>
  @import "~assets/font/iconfont.css";

  .iconfont {
    font-size: 50px;
  }

  .login,
  .more {
    margin: 0 auto;
    width: 500px;
  }

  .user-pwd {
    margin: 20px 0;
  }

  .reset {
    margin-right: 40px;
  }

   div{
    margin-bottom: 30px;
  }

  .enter {
    text-align: center;
  }

  .zc {
    padding: 20px 0;
  }
  input{
    border:none;
    display: inline-block;
    padding: 10px 0;
    border-bottom:3px solid black;
    margin-left: 20px;
  }
  .getcode{
    position: relative;
    top: 10px;
    left: 20px ;
  }
 
</style>