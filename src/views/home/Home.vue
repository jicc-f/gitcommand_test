<template>
	<div class="home">
		<nav-bar>
			<span slot='center'>购物街</span>
		</nav-bar>
		<tab-control :titles="['流行','新款','精选']" @tabClick=" tabClick" class = "tabControl1"
			 ref = "tabControl1" v-show = "tbShow"></tab-control>
		<scroll class="scroll" ref="scroll" @LoadMore= "LoadMore" @scroll = "contentScroll">
			<home-swiper :banners="banners" @swimageLoad = "swimageLoad"></home-swiper>
			<home-recommend :recommends="recommends"></home-recommend>
			<tab-control :titles="['流行','新款','精选']" @tabClick=" tabClick" 
			 ref = "tabControl2"></tab-control>
			<goods :goods="goods[currentType].list"></goods>
		</scroll>
		<back-top  v-if ="btShow"  @click.native = "btClick"></back-top>
	</div>
</template>

<script>
	//导入网络请求
	import {
		getMultiData,
		getHomeGoodsData
	} from '../../network/home';
	//导入公共组件
	import NavBar from 'components/common/navbar/NavBar.vue';
	import Scroll from '../../components/common/scroll/Scroll.vue';
	import TabControl from '../../components/content/tabControl/TabControl.vue';
	import Goods from '../../components/content/goods/Goods.vue';
	import BackTop from 'components/common/backtop/BackTop.vue';
	//导入子组件
	import HomeSwiper from './childComponents/HomeSwiper.vue';
	import HomeRecommend from './childComponents/HomeRecommend.vue';



	export default {
		//组件
		components: {
			NavBar,
			Scroll,
			TabControl,
			HomeSwiper,
			HomeRecommend,
			Goods,
			BackTop

		},
		//父传子
		props: {},
		//数据
		data() {
			return {
				banners: [],
				recommends: [],
				goods: {
					'pop': {
						page: 0,
						list: []
					},
					'sell': {
						page: 0,
						list: []
					},
					'new': {
						page: 0,
						list: []
					},
				},
				//tab当前currentType
				currentType: 'pop',
				// backTop组件的显示隐藏
				btShow:false,
				//tab的固定
				tabFixed:false,
				tabOffsetTop :0,
				tbShow :false,
				//记录离开时滚动的地方
				scrollY:0

			}
		},
		//监听
		watch: {},
		//计算属性
		computed: {},
		//方法
		methods: {
			//tab控制
			tabClick(index) {
				switch (index) {
					case 0:
						this.currentType = 'pop';
						break;
					case 1:
						this.currentType = 'new';
						break;
					case 2:
						this.currentType = 'sell';
						break;
				}
				this.$refs.tabControl2.currentIndex = index;
				this.$refs.tabControl1.currentIndex = index;

			},
			//网络请
			getHomeGoodsData(type) {
				const page = this.goods[type].page + 1;
				getHomeGoodsData(type, page).then(res => {
					console.log(res);
					//将所有类型第一页数据插入goods的list中
					this.goods[type].list.push(...res.data.list);
					//请求完成page+1
					this.goods[type].page += 1;
					//下一次下拉加载
						this.$refs.scroll && this.$refs.scroll.scroll.finishPullUp();
				})
			},
			//加载更多
			LoadMore(){
				 //重新计算Scroll高度
                this.$refs.scroll.scroll.refresh();
				this.getHomeGoodsData(this.currentType);
			},
			// 回到顶部
			btClick(){
	     	this.$refs.scroll.scroll.scrollTo(0,0,0)
			},
			//监听滚动
			contentScroll(position){
            //    if(-position.y>1000){
            //        this.btShow = true;
			// 	}else{
			// 		this.btShow = false;
			// 	}
			this.btShow = -position.y>1000;
			// this.tabFixed = -position.y> this.tabOffsetTop;
			this.tbShow = -position.y> this.tabOffsetTop;

			},
			//监听轮播图的加载
			swimageLoad(){
				// 获取taboffsetTop
				this.$refs.scroll.scroll.refresh();
				this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
			    // console.log(this.tabOffsetTop);
			
				
			}
		},
		//生命周期
		created() {
			getMultiData().then(res => {
					// console.log(res);
					this.banners = res.data.banner.list;
					this.recommends = res.data.recommend.list;
				})
		},
		mounted() {
			this.$bus.$on('imageLoad', () => {
				// console.log(this.$refs.scroll.scroll.refresh);
				//图片加载一次就调用一次
			this.$refs.scroll.scroll &&	this.$refs.scroll.scroll.refresh();
			}),
			this.getHomeGoodsData('pop');
			this.getHomeGoodsData('new');
			this.getHomeGoodsData('sell');
		},
		deactivated(){
			  this.scrollY =  this.$refs.scroll.scroll.y;
			  console.log(this.$refs.scroll.scroll.y);
		},
		activated(){
			// this.$refs.scroll.scroll.scrollTo(0,this.scrollY);
		}


	}
</script>
<style scoped>
	.scroll {
		/* background: burlywood; */
		position: absolute;
		top: 44px;
		bottom: 50px;
		left: 0;
		right: 0;
		overflow: hidden;
	}
	/* tab的固定 */
	.tabFixed{
      position: fixed;
	  top: 44px;
	}
	.tabControl1{
		position: relative;
		z-index: 10;
		background: white;
	}
</style>