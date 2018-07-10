<template>
  <div class="result">
    <img src="/static/imgs/result/logo@2x.png" class="logo">
    <img src="/static/imgs/result/文案：C罗@2x.png" class="txt-wrapper">
    <img src="/static/imgs/result/氛围@2x.png" class="line">
    <img src="/static/imgs/result/华为云MLS机器学习平台@2x.png" class="intro">
    <img src="/static/imgs/result/保存图片@2x.png" class="save">
    <img src="/static/imgs/result/不服再战@2x.png" class="btn-l">
    <img src="/static/imgs/result/精准预测@2x.png" class="btn-r">
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
          this.user_name='郭小丹'
          this.player_name='c 罗'
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
        }
        .line{
          position: absolute;
          top:59px;
          left: -70px;
        }
        .intro{
          position: absolute;
          top:435px;
          left:24px;
          width: 312px;
          height: 108px;
        }
        .save{
          position: absolute;
          top:437px;
          left:323px;
          width: 30px;
          height: 101px;
        }
        .btn-l{
          position: absolute;
          top:548px;
          left:54px;
          width: 117px;
          height: 47px;
        }
        .btn-r{
          position: absolute;
          top:548px;
          left:210px;
          width: 117px;
          height: 47px;
        }
        .player{
          width: 375px;
          height: 483px;
          position: absolute;
          top:127px;
          left:0;
        }

      }
</style>
