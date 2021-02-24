<template>
  <div class="detail-shop">
      <div class="shop-baseinfo">
          <img :src="shop.logo" alt="">
           <div><span>{{shop.name}}</span></div>
      </div>
      <div class="shop-info">
         <div class="left">
              <div class="sellall">
              <p>总销量</p>
               <p>{{shop.cSells}}</p>
          </div>
          <div class=" goodsell">
              <p>总宝贝</p>
            <p>{{shop.goodsCount}}</p>
          </div>
         </div>
       <div class="right">
           <li  v-for="(item,index) in shop.score" :key="index">
               <span>{{item.name}}</span>
               <span  class="leave" :class = "{'betterscore':item.isBetter,'noramlscore':!item.isBetter }">{{item.isBetter ? '高' :'低'}}</span>
               <span class="score">{{item.score}}</span>
           </li>
           </div> 
     </div>
     <div class="enter-shop">
       <button>进店逛逛</button>
     </div>
  </div>
</template>

<script>
export default {
//组件
  components:{},
//父传子
  props:{
      shop:Object
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
.shop-baseinfo{
    height: 50px;
    line-height: 50px;
    display: flex;
    padding: 10px;
}
.shop-baseinfo img{
    width: 50px;
    height: 50px;
    border-radius:50% ;
    margin-right: 15px;
}
.shop-info{
    display: flex;
}
.shop-info .left{
    display: flex;
    border-right: 1px solid black;
  padding: 0 15px;
}
.left  .goodsell{
   padding:  0  30px;
 
}
.left  p{
    margin:0;
    padding: 5px 0;
}
.right{
    list-style: none;
    padding: 0 8px;
}
.right li{
    padding: 5px 0;
}
.right span {
    display: inline-block;
    margin: 0 5px;
}
.betterscore{
  background: red;
}
.noramlscore{
  background: green;
}
.enter-shop{
  padding: 10px;
  text-align: center;
}
</style>