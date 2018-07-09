<template>
  <div>
    <!--不管三七二十一，上来就是四张图，够了-->
    <img :src="ImgSrc1" alt="">
    <img :src="ImgSrc2" alt="">
    <img :src="ImgSrc3" alt="">
    <img :src="ImgSrc4" alt="">
  </div>
</template>

<script>
    export default {
      name: "QuestionBanner",
      props: ['selected'],
      computed: {
        ImgSrc1() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner${this.$route.query.type}/${this.$route.name.slice(-1)}-${this.selected}.png`
        },
        ImgSrc2() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner${this.$route.query.type}/${this.$route.name.slice(-1)}-${this.selected}2.png`
        },
        ImgSrc3() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner${this.$route.query.type}/${this.$route.name.slice(-1)}-${this.selected}3.png`
        },
        ImgSrc4() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner${this.$route.query.type}/${this.$route.name.slice(-1)}-${this.selected}4.png`
        }
      }
    }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    position: absolute;
    top: -58px;
    z-index: 1;
  }
</style>
