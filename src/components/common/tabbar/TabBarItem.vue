<template>
    <div class="tab-bar-item" @click="tabClick">
    
     <div v-if ="currentActive"><slot name="tab-logo-active"></slot></div>
      <div v-else class="tab-logo" ><slot name="tab-logo"></slot></div>   
     <div :class= "{active:isActive}"><slot name="tab-text"></slot></div>
    </div>
</template>

<script>
    export default {
        //组件
        components: {
            
        },
        //父传子
        props: {
            path:{
                type:String
            }
        },
        //数据
        data() {
            return {
                isActive:false
            }
        },
        //监听
        watch: {},
        //计算属性
        computed: {
          //如果是当前路由active为true
            currentActive(){
                this.isActive = this.$route.path == this.path;
                return this.$route.path == this.path
                
            }
        },
        //方法
        methods: {
            tabClick(){
                // console.log(this.$router);
                this.$router.replace(this.path);   
            }          
        },
        //生命周期
        created() {},
        mounted() {}
    }
</script>
<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
    }

    .tab-bar-item img {
        width: 30px;
        height: 30px;
    }
    .active{
        color:palegoldenrod;
    }
</style>