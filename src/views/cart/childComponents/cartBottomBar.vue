<template>
    <div class="cart-bottom-bar">
        <div class="selectall">
            <select-i class="selecti" :is-checked="isAllSelect" @click.native="sClick"></select-i>
            <span>全选</span>
        </div>
        <div class="add-price"><span>合计</span>{{totalPrice}}<span></span></div>
        <button class="toadd">{{totalNum}}</button>
    </div>
</template>

<script>
    import SelectI from 'components/common/icon/select.vue'
    import {
        mapGetters
    } from 'vuex'

    export default {

        //组件
        components: {
            SelectI
        },
        //父传子
        props: {},
        //数据
        data() {
            return {

            }
        },
        //监听
        watch: {},
        //计算属性
        computed: {
            ...mapGetters(['getMygoodsL', 'getMygoods']),

            //合计总价
            totalPrice() {
                return '$' + this.getMygoods.filter(item => {
                    return item.isChecked
                }).reduce((pre, item) => {
                    return pre + item.counter * parseInt(item.price);
                }, 0)
            },
            //判断是否都选中
            isAllSelect() {
                if (this.getMygoods.length === 0) {
                    return false
                }
                //判断是否全选中,全选中返回true,有一个未选中就返回false
                return this.getMygoods.filter(item => {
                    return item.isChecked
                }).length === this.getMygoods.length;
            },
            // 合计数量
            totalNum(){
              return this.getMygoods.filter(item => {
                    return item.isChecked
                }).reduce((pre, item) => {
                    return pre + item.counter 
                }, 0)
            }

        },
        //方法
        methods: {
            //全选择按钮点击
            sClick() {
                //全选中
                if (this.isAllSelect) {
                    this.getMygoods.forEach(item => {
                        item.isChecked = false      
                    });
                } else {
                   this.getMygoods.forEach(item => {
                        item.isChecked = true     
                    });

            }
            }
        },
        //生命周期
        created() {},
        mounted() {}
    }
</script>
<style scoped>
    .cart-bottom-bar {
        height: 30px;
        display: flex;
        width: 100vw;
        position: relative;
    }

    .selecti {
        height: 30px;
        width: 50px;
    }

    .selectall {
        display: flex;
    }

    .add-price {
        padding: 0 15px;
        margin: 0 15px;
    }

    .toadd {
        position: absolute;
        right: 0;
        border: none;
        display: inline-block;
        width: 80px;
    }
</style>