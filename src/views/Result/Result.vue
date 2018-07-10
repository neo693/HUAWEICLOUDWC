<template>
  <div class="result">
    <img src="/static/imgs/result/logo@2x.png" class="logo">
    <img src="/static/imgs/result/文案：C罗@2x.png" class="txt-wrapper">
    <img src="/static/imgs/result/氛围@2x.png" class="line">
    <img src="/static/imgs/result/华为云MLS机器学习平台@2x.png" class="intro">
    <img src="/static/imgs/result/保存图片@2x.png" class="save">
    <img src="/static/imgs/result/" alt="">
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
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
      }
</style>
