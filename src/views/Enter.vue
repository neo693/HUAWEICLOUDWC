<template>
  <div class="enter">
    <img src="/static/imgs/标题@2x.png" alt="title" class="title">
    <img src="/static/imgs/群組 1@2x.png" alt="man" class="man1 animated slideInLeft ">
    <img src="/static/imgs/开启测试之旅@2x.png" alt="start" class="start" @click="start">
    <img src="/static/imgs/打开声音@2x.png" alt="music" class="music">
  </div>
</template>
<script>
  export default {
    data(){
      return {

      }
    },
    methods:{
      start(){
        this.$router.push({name:'Character'})
      }
    }
  }
</script>
<style scoped lang="scss">
    .enter{
      width:100%;
      height: 100%;
      position: relative;
      background: url('/static/imgs/line2@2x.png') no-repeat center 154px;
      .title{
        display: block;
        position:absolute;
        top:12px;
        margin: auto;
        left:0;
        right: 0;
      }
      .man1{
        position: absolute;
        display: block;
        top:182px;
        width: 360px;
        height: 340px;
        left:18px;
        right: 0;
        margin: auto;
      }
      .start{
        position: absolute;
        display: block;
        top:510px;
        margin: auto;
        left:0;
        right: 0;
        width: 184px;
        height: 68px;
      }
      .music{
        position: absolute;
        display: block;
        top:576px;
        margin: auto;
        left:0;
        right: 0;
        width: 118px;
        height: 23px;
      }
    }
</style>
