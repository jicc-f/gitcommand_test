export const refresh = {
    mounted() {
        this.$bus.$on('imageLoad', () => {
            // console.log(this.$refs.scroll.scroll.refresh);
            //图片加载一次就调用一次
            this.$refs.scroll && this.$refs.scroll.scroll && this.$refs.scroll.scroll.refresh();
             console.log("11111");
        })
    }
}
export const backTop = {
    // components : {   
    //     BackTop 
    // },
    data(){
        return{
            btShow : false
        }
        
    },
    methods:{
        btClick(){
            this.$refs.scroll.scroll.scrollTo(0,0,0)
         },
         listenerShowBackTop(position){
            this.btShow = -position.y >1000;
         }
    },
    created(){
        
    },
    mounted(){
        
    }
}