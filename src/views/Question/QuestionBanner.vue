<template>
  <div>
    <img :src="personImgSrc" alt="">
    <!--比较特殊的一张图-->
    <img src="/static/imgs/QuestionBanner/3-B3.png" alt="" v-if="$route.name=='Question3'&&selected=='B'">
    <img :src="ballImgSrc" alt="">
  </div>
</template>

<script>
    export default {
      name: "QuestionBanner",
      props: ['selected'],
      computed: {
        personImgSrc() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner/${this.$route.name.slice(-1)}-${this.selected}.png`
        },
        ballImgSrc() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner/${this.$route.name.slice(-1)}-${this.selected}2.png`
        }
      }
    }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    position: absolute;
    top: -58px;
  }
</style>
