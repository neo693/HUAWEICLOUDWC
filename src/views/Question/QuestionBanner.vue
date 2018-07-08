<template>
  <div>
    <img :src="personImgSrc" alt="">
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
    position: fixed;
    top: -58px;
  }
</style>
