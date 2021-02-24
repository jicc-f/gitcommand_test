<template>
  <div class="base-info">
      <p class="title">{{base.title}}</p>
      <div class="price">
          <span class="nowprice">{{base.lowNowPrice}}</span>
          <span class="oldprice">{{base.oldPrice}}</span>
         <span class="discount">{{base.discount}}</span>
      </div>
    <div class="sell-info">
         <span v-for="item in base.columns" :key="item">{{item}}</span>
  
    </div>
    <div class="delivery-info"  v-if ="base.services"> 
     <div v-for = "index in base.services.length - 1" :key="index" class="item">
       <img v-if = "base.services[index-1].icon" :src="base.services[index-1].icon" alt="" >
       <span>{{base.services[index-1].name}}</span>
     </div>
    </div>
  </div>
</template>

<script>
export default {
//组件
  components:{},
//父传子
  props:{
      base:Object
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
  mounted(){},

filters:{
    priceFixed(price){
        return price.toFixed(2);
    }
}
}
</script>
<style scoped>
.base-info{
 padding:10px  ;
}
.title{
    margin: 0;
    padding:8px 0 ;
}
.nowprice{
    font-size: 20px;
    color:palevioletred;
}
.oldprice{
    text-decoration: line-through;
    margin: 0 10px;
}
.discount{
    display: inline-block;
    padding: 3px;
    background: palevioletred;
}
.sell-info,.delivery-info{
    display: flex;
    text-align: center;
    padding: 5px 0;
    justify-content: space-between;
}

/* .sell-info span{
    flex: 1;
} */
.delivery-info .item img{
width: 10px;
height: 10px;;
}
</style>
