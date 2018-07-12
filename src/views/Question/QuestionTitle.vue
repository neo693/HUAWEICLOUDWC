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
        animate: false
      }
    },
    methods: {
      play() {
        anime({
          targets: '.title-wrap',
          translateX: [600, 0],
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
