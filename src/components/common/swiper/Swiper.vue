<template>
    <div id="hy-swiper">
        <div class="swiper" @touchstart='touchStart' @touchomve="touchMove" @touchend="touchEnd">
            <slot></slot>
        </div>
        <slot name="indicator">
        </slot>
        <div class="indicator">
            <slot name="indicator" v-if="showIndicator && slideCount>1">
                <div v-for="(item,index) in slideCount" class="indi-item" :class="{active: index === currentIndex-1}" :key="index"></div>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Swiper",
        props:{
            interval:{
                type: Number,
                default:3000
            },
            animDuration:{
                type: Number,
                default: 300
            },
            moveRatio:{
                type:Number,
                default:0.25
            },
            showIndicator:{
                type:Boolean,
                default:true
            },
        },
        data:function () {
return{
    slideCount:0 ,//元素个数
    totalWidth:0,//Swiper宽度
    swiperStyle:{},//swiper样式
    currentIndex:1,//当期index
    scrolling:false,//是否在滚动
        }
        },
        mounted:function () {
            // 1.操作Dom,在前后添加slide
       setTimeout(()=>{
           this.handleDom();

           // 2.开启定时器
           this.startTimer()
       },100)
        },
        methods:{

            //定时器操作

            startTimer:function () {
            this.playTimer = window.setInterval(()=>{
                this.currentIndex++;
                this.scrollContent(-this.currentIndex * this.totalWidth);
            },this.interval)
            },
            stopTimer:function () {
             window.clearInterval(this.playTimer);
            },
            //滚动到正确位置
            scrollContent:function (currentPosition) {
                //设置正在滚动
             this.scrolling = true;
             // 1.开始滚动动画
                this.swiperStyle.transition = 'transform' + this.animDuration +'ms';
                this.setTransform(currentPosition)
                // 2.判断滚动到的位置
                    this.checkPosition();
                // 3.完成滚动
                this.scrolling = false
            },
            checkPosition:function () {
               window.setTimeout(()=>{
                   // 1.校验正确位置
                       this.swiperStyle.transition ="0ms";
                       if(this.currentIndex >= this.slideCount + 1){
                           this.currentIndex = 1;
                           this.setTransform(-this.currentIndex * this.totalWidth);
                       }else if(this.currentIndex <= 0) {
                           this.currentIndex = this.slideCount;
                           this.setTransform(-this.currentIndex * this.totalWidth);
                       }
                           this.$emit('transitionEnd',this.currentIndex-1);
                       },this.animDuration)
               },
            setTransform:function (position) {
          this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
          this.swiperStyle['-webkit-transform'] = `translate3d(${position}px),0,0`;
          this.swiperStyle['-ms-transform'] = `translate3d(${position}px),0,0`;
            },

            handleDom:function () {
             let swiperEl = document.querySelector('.swiper');
             let   slidesEls  = swiperEl.getElementsByClassName('slide');

             this.slideCount = slidesEls.length;

             if(this.slideCount > 1){
                 let cloneFirst = slidesEls[0].cloneNode(true);
                 let  cloneLast = slidesEls[this.slideCount -1].cloneNode(true);
                 swiperEl.insertBefore(cloneLast,slidesEls[0]);
                 swiperEl.appendChild(cloneFirst);
                 this.totalWidth = swiperEl.offsetWidth;
                 this.swiperStyle = swiperEl.style;

             }
             this.setTransform(-this.totalWidth);
            },
            touchStart: function (e) {
            if (this.scrolling)return ;
            this.stopTimer();
            this.startX = e.touches[0].pageX;

            },
            touchMove:function (e) {
                this.currentX = e.touches[0].pageX;
                this.distance = this.currentX - this.startX;
                let currentPosition = -this.currentIndex * this.totalWidth;
                let moveDistance =this.distance + currentPosition;
                this.setTransform(moveDistance);


            },
            touchEnd:function (e) {
             let  currentMove = Math.abs(this.distance);
             if (this.distance === 0){
                 return
             }else  if(this.distance > 0 && currentMove>this.totalWidth * this.moveRatio){
                 this.currentIndex--
             }else  if(this.distance < 0 && currentMove>this.totalWidth*this.moveRatio){
                 this.currentIndex++
             }
             this.scrollContent(-this.currentIndex * this.totalWidth);
             this.startTimer();


            },
            previous:function () {
           this.changeItem(-1);
            },
            next:function () {
                this.changeItem(1);

            },
            changeItem:function (num) {
          this.stopTimer();
          this.currentIndex += num;
          this.scrollContent(-this.currentIndex * this.totalWidth);
          this.startTimer()

            }


    }}
</script>

3<style scoped>
#hy-swiper{
    overflow: hidden;
    position: relative;
}
    .swiper{
        display: flex;
    }
    .indicator{
        display: flex;
        justify-content: center;
        position: absolute;
        width: 100%;
        bottom: 8px;
    }
    .indi-item{
        box-sizing: border-box;
        width: 8px;
        height: 8px;
        border-radius: 4px;
        background-color: #fff;
        line-height: 8px;
        text-align: center;
        font-size: 12px;
        margin:  0 5px;
    }
    .indi-item.active{
        background-color: rgba(212,62,46,1.0);
    }
</style>