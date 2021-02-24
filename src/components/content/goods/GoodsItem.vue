<template>
  <div class="goods-item" @click="itemClick()">
    <img  :src = "showImage" alt = "" @load="imageLoad"  />
    <div class="goods-info">
      <p class="des">{{goodsItem.title}}</p>
    <span class="sell">收藏{{goodsItem.sale}}</span> <span class="collect">销量{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
//组件
  components:{},
//父传子
  props:{
    goodsItem : Object
  },
//数据
  data(){
    return {
      iid:null
    }
  },
//监听
  watch:{},
//计算属性
  computed:{
    showImage(){
      return this.goodsItem.image || this.goodsItem.show.img;
    }
  },
//方法
  methods:{
    imageLoad(){
      this.$bus.$emit('imageLoad')
      // if(this.$route.path.indexOf("home") ){
      //      this.$bus.$emit('himageLoad')
      // }else if(this.$route.path.indexOf("detail")){
      //     this.$bus.$emit('dimageLoad')
      // }else{
      //     this.$bus.$emit('imageLoad')
      // }
      
      },
    itemClick(){
      this.iid = this.goodsItem.iid;
      this.$router.push('/detail/'+this.iid);
      
    }
  },
//生命周期
  created(){},
  mounted(){},
  filters:{
    // 指定截取4位,会引起体验不好
    // amountToFixed(amount,num = 4){
    // const numlen = amount + '';
    // return  numlen.slice(0,num)
    // }
  }
}
</script>
<style scoped>
.goods-item {
 width:45%;
 margin: 10px 0;
 /* height: 50px; */
}
.goods-item img{
  width: 100%;
  height: 200px;
}
.goods-info{
 position: relative;
 height: 50px;
}
.des{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
  padding: 5px 0;
}
.sell{
  position:absolute;
  left: 0;
}
.collect{
 position: absolute;
 right: 0;
}
/* .collect::before{
  width: 50px;
  height: 10px;
  content: '';
  display: inline-block;
  background: url('../../../assets/img/collect.jpg');
} */
</style>