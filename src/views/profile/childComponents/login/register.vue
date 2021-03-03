<template>
    <div class="register">

        <h1  class="title">注册</h1>
        <div class=" item tel">
            <label for="tel">手机号<input type="text" name="tel" placeholder="请输入你的手机号" v-model.lazy="tel"></label>
        </div>
        <div class=" item  verify ">
            <label for=" verify ">验证码<input type="text" name="verify" placeholder="验证码" v-model.lazy="code"></label>
            <a href = "javascript: "   class="code"  @click="sendCode()" > {{isRun ? `${runTime}s后重新发送` :  '发送验证码'}}</a>
        </div>
        <div class=" item pwd">
            <label for="pwd">密码<input type="text" name="pwd" placeholder="请输入密码" v-model.lazy="pwd"></label>
        </div>
        <div class=" item  confirmpwd">
            <label for="confirmpwd">密码<input type="text" name="confirmpwd" placeholder="请再次输入密码" v-model.lazy="confirmpwd"></label>
        </div>
            <button class="submit">提交</button>
    </div>
</template>

<script>
import Toast from '../../../../components/common/toast/toast.vue';
  import login from '../../../../network/personal';
  import axios from 'axios'
  import md5 from 'blueimp-md5'

    export default {
        //组件
        components: {
            
        },
        //父传子
        props: {},
        //数据
        data(){
            return {
                tel: '18071189999',
                code:'',
                pwd:'123456',
                timeStamp:new Date(),
                confirmpwd:'',
                //管控验证码是否发送
                isRun: false,
                //倒计时
                runTime:10 
            }
        },
        //监听
        watch: {},
        //计算属性
        computed: {},
        //方法
        methods: {
          async sendCode(){
              //
              if(this.isRun)  return
              //正则表达式判断手机号输入
                if (!/^1[3456789]\d{9}$/.test(this.tel)){
                this.$toast.show("手机号有误", 2000)
                return
            }
            // 验证手机号是否被注册
            // let data = await  this.$api.personal.phone(this.tel);
            // if(parseInt(data.code) === 0){
            //     this.$toast.show("手机号已经被注册", 2000);
            //     return
            // }
            // // 通知服务器发送验证码
            // data = await this.$api.personal.code(this.code);
            // if(parseInt(data.code) === 1 ){
            //     this.$toast.show("网络繁忙", 2000);
            //     return
            // }
            // 开启倒计时
            this.isRun = true
           let  timer = setInterval(() => {
               if(this.runTime <=0 ){
                   clearInterval(timer)
                   this.isRun = false
                   this.runTime = 10
                   return
               }
            --this.runTime
            console.log(this.runTime)
            },1000)
            //验证码是否过期
          data = await  this.$api.personal.checkCode(this.tel,this.code);
          if(parseInt(data.code) === 1 ){
                this.$toast.show("验证码输入错误", 2000);
                return
            }
         //完成注册
        //
          data = await  this.$api.personal.register({
                 name:this.name,
                 tel:this.tel
          });

        }

        },
        //生命周期
        created() {    
        axios.post('http://www.testingedu.com.cn:8000/index.php?m=Home&c=User&a=do_login&t=0.9406837142801286', {
    username:13800138006,

    password:123456,
    verify_code:'yrvq'
  })
  .then(res =>{
      console.log(res)
  })
  .catch(err =>{
      console.log(err)
  });

        },
        mounted() {}
    }
</script>
<style scoped>
 .title{
     text-align: center;
 }
  div .item{
     margin: 20px ;
     padding-bottom: 20px;
     border-bottom: 1px solid black;
  }
 input{
     padding: 0;
     border: 0;
     margin-left: 20px;
 }
  input:focus{
      border: none;
      outline:none
  }
  .verify {
      position: relative;
  }
  .code{
      text-decoration: none;
      color: white;
      background: orangered;
      display: inline-block;
      border-radius: 5px;
      position: absolute;
      right: 0;
   padding: 0 10px;
  }
  .code-active{
      background:grey ;
  }
  .submit{
      display: block;
      padding: 5px 30px;
      background: yellowgreen;
      margin: 0 auto;
      border-radius: 8px;
  }
</style>