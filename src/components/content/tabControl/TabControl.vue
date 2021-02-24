<template>
  <div class="tab-control">
    <div  v-for="(item,index) in titles" @click="tabClick(index)" class="tc-item" :key="item">
      <span :class="{active: currentIndex == index}">{{item}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    //组件
    components: {},
    //父传子
    props: {
      titles: Array
    },
    //数据
    data() {
      return {
        currentIndex:0
      }
    },
    //监听
    watch: {},
    //计算属性
    computed: {
      
      
    },
    //方法
    methods: {
      tabClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index);

      }
    },
    //生命周期
    created() {},
    mounted() {}
  }
</script>
<style scoped>
  .tab-control {
    display: flex;
    text-align: center;
  }
.tc-item{
  flex: 1;
}
.tc-item span {
    display: inline-block;
    padding: 10px 0;

  }

  .active {
    border-bottom: 1px solid pink;
  }
</style>