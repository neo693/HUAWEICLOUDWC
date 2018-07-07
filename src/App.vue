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
  @font-face
  {
    font-family: myFont;
    src: url('/static/FZLTHJW.TTF')
  }
#app {
@import "./assets/css/normalize.css";
  font-family: 'myFont';
  width: 100vw;
  height: 100vh;
  background: url('/static/imgs/底色@2x.png') no-repeat fixed center;
  background-size:100% 100%;
}
</style>
