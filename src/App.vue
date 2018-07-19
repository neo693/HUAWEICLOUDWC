<template>
  <div id="app">
    <router-view :key="key"/>
    <img src="/static/imgs/result/音乐@2x.png" class="music-btn" v-if="show_bg_music" @click="pauseMusicAll">
     <img src="/static/imgs/result/禁止播放态@2x.png" class="music-btn" v-else @click="palyMusicAll">
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
    palyMusicAll() {
      if (this.$route.name.indexOf('Question') == -1) {
        this.palyMusic()
      } else {
        this.$store.commit('common/CHANGE_MUSIC_STATE', true)
        document.querySelector('#video_bg2').play()
      }
    },
    pauseMusicAll() {
      if (this.$route.name.indexOf('Question') == -1) {
        this.pauseMusic()
      } else {
        this.$store.commit('common/CHANGE_MUSIC_STATE', false)
        document.querySelector('#video_bg2').pause()
      }
    }
  },
  computed:{
    ...mapState('common',['show_bg_music']),
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
    src: url('/static/pmzd.ttf')
  }
  @font-face {
    font-family:originFont;
    src:url('/static/FZLTHJW.TTF')
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
    overflow: hidden
  }
  #app .music-btn{
    position: fixed;
    right: 10px;
    top:14px;
    width: 33px;
    height: 33px;
    z-index:99;
  }
</style>
