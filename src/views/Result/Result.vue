<template>
  <div class="result">
    <img src="/static/imgs/result/logo@2x.png" class="logo">
    <!-- <img src="/static/imgs/result/文案：C罗@2x.png" class="txt-wrapper"> -->
    <div class="txt-wrapper">
        <div>
          <b class="name">{{user_name}}</b>
        </div>
      
        <div>
        <b>
          天哪!你的脚法已经和
          <span class="player-name">
            {{player_name}}
          </span>
          不相上下了！
          </b> 
        </div>
        
    </div>
    <img src="/static/imgs/result/氛围@2x.png" class="line">
    <img src="/static/imgs/result/华为云MLS机器学习平台@2x.png" class="intro">
    <img src="/static/imgs/result/保存图片@2x.png" class="save" @click="savePic">
    <img src="/static/imgs/result/不服再战@2x.png" class="btn-l" @click="reStart">
    <img src="/static/imgs/result/精准预测@2x.png" class="btn-r" @click="go">
    <img :src="player_url" class="player">
  </div>
</template>
<script>
  export default {
    data(){
      return {
        player_url:'',
        user_name:'',
        player_name:''
      }
    },
    methods:{
      init(){
        //根据答案判断是哪位球星
          this.player_url='/static/imgs/result/C罗@2x.png'   
          this.player_name='C罗'
           this.user_name=this.$route.query.user_name
      },
      reStart(){
        this.$router.push({name:'Enter'})
      },
      go(){
        // 跳转华为链接
      },
      savePic(){
        // 保存图片
      }
    
    },
    created(){
      this.init()
    }

  }
</script>
<style lang="scss" scoped>
      .result{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: url('/static/imgs/result/背景@2x.png') no-repeat center fixed;
       background-size: 375px 667px;
        .logo{
          position: relative;
          left:15px;
          top:10px;
          width: 190px;
          height: 45px;
        }
        .txt-wrapper{
          position: absolute;
          left:8px;
          top:72px;
          width: 348px;
          height: 87px;
           padding-left:30px;
            padding-top: 20px;
            box-sizing: border-box;
          background: url('/static/imgs/result/文案：C罗@2x.png') no-repeat;
          .name{
            color:#BF2626;
            font-size:24px; 
            font-style: italic;
          }
          .player-name{
            color:#BF2626;
             font-size:24px; 
             font-style: italic;
             line-height: 10px;
          }
        }
        .line{
          position: absolute;
          top:59px;
          left: -70px;
        }
        .intro{
           z-index: 2;
          position: absolute;
          top:435px;
          left:24px;
          width: 312px;
          height: 108px;
        }
        .save{
           z-index: 2;
          position: absolute;
          top:437px;
          left:323px;
          width: 30px;
          height: 101px;
        }
        .btn-l{
           z-index: 2;
          position: absolute;
          top:548px;
          left:54px;
          width: 117px;
          height: 47px;
        }
        .btn-r{
          z-index: 2;
          position: absolute;
          top:548px;
          left:210px;
          width: 117px;
          height: 47px;
        }
        .player{
         width: 462px;          
          position: absolute;
          top:137px;
          left:-40px;
        }

      }
</style>
