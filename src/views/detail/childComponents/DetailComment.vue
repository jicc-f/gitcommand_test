<template>
  <div class="detail-comment" v-if="Object.keys(commentInfo).length !== 0" >
      <div class="comment-header">
          <span class="">用户评价</span>
          <span class="more" @click = "moreClick">更多</span>
      </div>
      <div class="comment-content">
          <div class="user">
              <img :src="commentInfo.user.avatar">
              <span>{{commentInfo.user.uname}}</span>
          </div>
          <div class="content">
              <p>{{commentInfo.content}}</p>
              <span class="time">{{commentInfo.created|showDate}}</span>
              <span>{{commentInfo.style}}</span>
          </div>
          <div class="show-img">
              <img  v-for = "(item,index) in commentInfo.images"  :src="item" :key= "index" >
          </div>
      </div>
  </div>
</template>

<script>
import {dateFormat} from '../../../common/util';
export default {
//组件
  components:{},
//父传子
  props:{
      commentInfo:Object
  },
//数据
  data(){
    return {
    }
  },
//监听
  watch:{},
//计算属性
  computed:{
      
  },
//方法
  methods:{
      moreClick(){
          this.$router.push('/comment')
      }
  },
//生命周期
  created(){},
  mounted(){},
  filters :{
      showDate(value){
         let date = new Date(value*1000)
        return dateFormat("YYYY-mm-dd HH:MM", date);
      }
  }
}
</script>
<style scoped>
.user img{
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-right: 15px;
}
.show-img  img{
    width: 80px;
    height: 80px;
    margin-right: 15px;
}
.comment-header {
    position: relative;
    height: 50px;
    line-height: 50px;
}
.comment-content .content{
    padding-bottom: 15px;
}
.comment-header .more{
    position: absolute;
    right: 0;
}
.comment-content .user{
    line-height: 35px;
}
.time{
    padding: 0 15px;
    display: inline-block;
}
</style>