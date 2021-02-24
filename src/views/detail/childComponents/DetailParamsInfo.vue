<template>
  <div class="detail-params-info" v-if = "itemParams.rule">
      <table v-for = "(item,index) in itemParams.rule.tables" :key = "index" class="sizes">
          <tr v-for =  "(tr,index) in item" :key = "index">
             <td v-for = "(td,index) in tr" :key = "index">{{td}}</td>
          </tr>
      </table>    
     <table >
       <tr v-for = "(item,index) in itemParams.info.set" :key = "item.key" class="params" >
           <td class="params-key">{{item.key}}</td>
           <td>{{item.value}}</td>
          </tr>
     </table>

  </div>
</template>

<script>
export default {
//组件
  components:{},
//父传子
  props:{
      itemParams: Object
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
.detail-params-info{
  padding: 15px 0;
}
.sizes{
  width: 100%;
  border-collapse: collapse;
  padding-bottom: 15px;
  border-bottom: 3px solid  black;
}
.sizes td{
  padding: 15px;
}
.params{
  width: 100%;
}
.params td{
  padding: 15px 5px;
}
.params-key{
  width: 50px;
}
</style>