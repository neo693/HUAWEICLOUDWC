<template>
  <div class="title-wrap">
    <img :src="imgSrc" alt="" :class="{teshu: $route.query.type==2&&!$route.query.question1}">
  </div>
</template>

<script>
  export default {
    name: "QuestionTitle",
    data() {
      return {
        animate: false,
        beishu: 1,
      }
    },
    methods: {
      play() {
        anime({
          targets: '.title-wrap',
          translateX: [600*this.beishu, 0],
          duration: 800,
          easing: 'linear'
        })
      }
    },
    computed: {
      imgSrc() {
        return `/static/imgs/Question${this.$route.query.type}/${this.$route.name}.png`
      }
    },
    mounted() {
      // 计算网页缩放的基数
      this.beishu = parseInt(document.documentElement.style.fontSize)/37.5;
      this.play()
    },
    watch: {
      '$route'() {
        anime({
          targets: '.title-wrap',
          translateX: [600, 0],
          duration: 800,
          easing: 'linear'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .title-wrap {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 212px;
    z-index: 2;
    img {
      width: 303px;
      height: 104px;
      &.teshu {
        width: 335px;
      }
    }
  }
</style>
