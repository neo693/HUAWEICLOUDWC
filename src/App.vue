<template>
  <div id="app">
    <router-view :key="key"/>
    <img src="/static/imgs/result/音乐@2x.png" class="music-btn" v-if="show_bg_music" @click="pause">
     <img src="/static/imgs/result/禁止播放态@2x.png" class="music-btn" v-else @click="paly">
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  name: 'App',
  data(){
    return {
        
    }
  },
  methods:{
    ...mapActions('common',['palyMusic','pauseMusic']),
    pause(){
      this.pauseMusic()
    },
    paly(){
      this.palyMusic
    }
  },
  computed:{
    ...mapState('common',['show_bg_music']),
    key:function() {
      return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
    }
  },
  mounted(){
    console.log(this.show_bg_music,'ee')
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
