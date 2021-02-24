<template>
  <div class="detail">
    <nav-bar class="topnav">
      <div slot="left" @click="back"><span class="back"> &lt;</span></div>
      <div slot="center" class="title"><span v-for="item in titles" class="title-item" :key="item">{{item}}</span></div>
    </nav-bar>
    <scroll class="scroll" ref="scroll"  @scroll = "contentScroll">
      <!-- {{$store.state.mygoods.length}} -->
      <detail-swiper :topImags='topImags' @dsimageLoad="dsimageLoad"></detail-swiper>
      <detail-base-info :base="base"></detail-base-info>
      <detail-shop :shop="shop"></detail-shop>
      <detail-goods-info :detail-info="detailInfo" @dgimageLoad="dgimageLoad"></detail-goods-info>
      <detail-params-info :item-params="itemParams"></detail-params-info>
      <detail-comment :commentInfo='commentInfo'></detail-comment>
      <detail-recommend :recommendList="recommendList"></detail-recommend>
    </scroll>
	
    <detail-bottom-bar @joinCart = "joinCart"></detail-bottom-bar>
		<back-top  v-if ="btShow"  @click.native = "btClick"></back-top>
  </div>
</template>

<script>
  //导入网络请求
  import {
    getDetailData,
    Base,
    Shop
  } from '../../network/detail';
  import {
    getRecommendData
  } from '../../network/recommend';
  //导入公共组件
  import NavBar from '../../components/common/navbar/NavBar.vue';
  import Scroll from '../../components/common/scroll/Scroll.vue';
	import BackTop from 'components/common/backtop/BackTop.vue';


  //导入子组件
  import DetailSwiper from './childComponents/DetailSwiper.vue';
  import DetailBaseInfo from './childComponents/DetailBaseInfo.vue'
  import DetailShop from './childComponents/DetailShop.vue'
  import DetailGoodsInfo from './childComponents/DetailGoodsInfo.vue'
  import DetailParamsInfo from './childComponents/DetailParamsInfo.vue'
  import DetailComment from './childComponents/DetailComment.vue'
  import DetailRecommend from './childComponents/DetailRecommend.vue'
  import DetailBottomBar from './childComponents/DetailBottomBar.vue'
  //导入混入内容
  import {refresh,backTop} from '../../common/mixin'
  export default {
    name: 'detail',
    //组件
    components: {
      NavBar,
      Scroll,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      DetailGoodsInfo,
      DetailParamsInfo,
      DetailComment,
      DetailRecommend,
      DetailBottomBar,
      BackTop 
    },
    //父传子
    props: {},
    //数据
    data() {
      return {
        iid: this.$route.params.iid,
        titles: ['商品', '详情', '推荐', '精选'],
        //轮播图数据
        topImags: [],
        base: {},
        shop: {},
        detailInfo: {},
        itemParams: {},
        commentInfo: {},
        recommendList: [],
       


      }
    },
    //监听
    watch: {},
    //计算属性
    computed: {},
    //方法
    methods: {
      //返回上一个路由页面
      back() {
        this.$router.go(-1);
      },
      //监听轮播图
      dsimageLoad() {
        this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh()
      },
      //监听goodimg
      dgimageLoad() {
        this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
        //  console.log("11111");
      },
      contentScroll(position){
            this.listenerShowBackTop(position);
            // console.log(position);
      },
      //加入购物车
     joinCart(){
        const goods = {
        }
        goods.image = this.topImags[0]; 
        goods.title = this.base.title;
        goods.desc = this.base.desc;
        goods.price= this.base.lowNowPrice;
        goods.iid = this.iid;
        goods.counter = 0;
        // this.$store.commit("joinCart",goods);        
        this.$store.dispatch("joinCart",goods).then(res => {
          this.$toast.show(res, 2000)
        }); 
      }

    },
    //生命周期
    created() {
      getDetailData(this.iid).then(res => {
          // console.log(res);
          const data = res.result;
          this.topImags = data.itemInfo.topImages;
          this.base = new Base(data.itemInfo, data.columns, data.shopInfo.services);
          this.shop = new Shop(data.shopInfo);
          this.detailInfo = data.detailInfo;
          this.itemParams = data.itemParams;
          //取出评价
          if (data.rate.cRate != 0) {
            this.commentInfo = data.rate.list[0]
          }



        }),
        getRecommendData().then(
          res => {
            // console.log (res.data.list);
            this.recommendList.push(...res.data.list)
          }
        )
    },
    mounted() {
      // this.$bus.$on('dimageLoad', () => {
      //     this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
      //   })
      }
    ,
    //混入内容
    mixins:[refresh, backTop]
    }
</script>
<style scoped>
  .detail {
    height: 100vh;
    overflow: hidden;
    position: relative;
    z-index: 9;
  }

  .title {
    display: flex;
  }

  .title-item {
    flex: 1;
  }

  .topnav {
    z-index: 11;
    position: relative;
    background: white;
  }

  /* .back{
 transform: rotate(90deg)
} */
  .scroll {
    position: absolute;
    top: 44px;
    background: white;
    bottom: 44px;
    z-index: 10;
  }
</style>