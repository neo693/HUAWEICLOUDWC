<template>
  <div id="app">
    <router-view :key="key"/>
    <img src="/static/imgs/result/音乐@2x.png" class="music-btn" v-if="show_bg_music" @click="pauseMusic">
     <img src="/static/imgs/result/禁止播放态@2x.png" class="music-btn" v-else @click="palyMusic">
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
        show_bg_music:true
    }
  },
  methods:{
    palyMusic(){

       document.getElementById('audio').play()
       this.show_bg_music=true
    },
    pauseMusic(){

       document.getElementById('audio').pause()
       this.show_bg_music=false
    }
  },
  computed:{
    key:function() {
      return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
  }
}
</script>

<style>
  @import "./assets/css/normalize.css";
  @font-face {
    font-family: myFont;
    src: url('/static/FZLTHJW.TTF')
  }

  #app {
    font-family: 'myFont';
    width: 375px;
    height: 100%;
    margin: 0 auto;
  }
  body {
    width: 100vw;
    height: 100vh;
    background-image: url('/static/imgs/底色@2x.png');
    background-position: center -58px;
    background-size: cover;
    overflow: hidden;
  }
  #app .music-btn{
    position: fixed;
    right: 10px;
    top:14px;
    width: 33px;
    height: 33px;
    z-index:9;
  }
</style>
