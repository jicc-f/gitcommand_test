<template>
  <div class="detail-goods-info">
   
   <div v-for = "(item,index) in detailInfo.detailImage" :key="index">
      <p>{{item.key}}</p>
      <img v-for = "(listi,index) in item.list" :src="listi" :key = "index" @load="imageLoad"/> 
   </div>
  </div>
</template>

<script>
export default {
//组件
  components:{},
//父传子
  props:{
    detailInfo:Object
  },
//数据
  data(){
    return {
      imagesLength : 0,
      counter:0
    }
  },
//监听
  watch:{
      // detailInfo(){
      //      this.imagesLength = this.detailInfo.detailImage[0].list.length;
      // }
  },
//计算属性
  computed:{},
//方法
  methods:{
    imageLoad(){
      this.$emit("dgimageLoad");
      // if(++counter === this.detailInfo.detailImage[0].list.length){
      //    this.$emit("dgimageLoad");
      // }

           
    }
  },
//生命周期
  created(){},
  mounted(){}
}
</script>
<style scoped>
img{
  width: 100%;
 
}
</style>