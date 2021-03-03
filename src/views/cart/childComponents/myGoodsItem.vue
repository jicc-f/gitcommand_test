<template>
	<div class="my-goods">
		<select-i class="select-i" @click.native="sClick" :is-checked="itemInfo.isChecked"></select-i>
		<div class="goods-info">
			<div class = "left">
			<img :src="itemInfo.image" />
			</div>
			<div class="right">
				<p class="title">{{itemInfo.desc}}</p>
				<span class="price">￥ {{itemInfo.price}}</span>
				<div class="counter"><button  @click ="addCounter">+</button> <span>{{itemInfo.counter}}</span> <button @click = "reduceCounter">-</button></div>
			</div>
		</div>

	</div>
</template>

<script>
 import {
    mapGetters
  } from 'vuex';
	import SelectI from 'components/common/icon/select.vue'
	export default {
		//组件
		components: {
			SelectI
		},
		//父传子
		props: {
			itemInfo: Object
		},
		//数据
		data() {
			return {}
		},
		//监听
		watch: {},
		//计算属性
		computed: {
			  ...mapGetters(['getMygoods', 'getMygoodsL'])
		},
		//方法
		methods: {
			sClick() {
				this.itemInfo.isChecked = ! this.itemInfo.isChecked;
			},
			addCounter(){
				this.itemInfo.counter += 1
			
			},
			reduceCounter(){
				this.itemInfo.counter -= 1
			}

		},
		//生命周期
		created() {},
		mounted() {}
	}
</script>
<style scoped>
	.my-goods,
	.goods-info {
		display: flex;
	}

	.my-goods {
		width: 100vw;
		height: 100px;
	}

	.goods-info {
		width: 90%;
		height: 100px;
	}

	.left {
		width: 30%;
		height: 100px;
	}

	.left img {
		width: 100%;
		height: 100%;
	}

	.right {
		position: relative;
		width: 65%;
		padding: 0 10px;
		height: 100px;
	}
	.title {
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.counter {
		position: absolute;
		right: 0;
		bottom: 0;
	}
	.price{
		position: absolute;
		left: 0;
		bottom: 0;
	}
</style>