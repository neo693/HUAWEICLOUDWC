<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
</style>
