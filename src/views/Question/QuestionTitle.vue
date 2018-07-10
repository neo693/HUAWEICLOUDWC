<template>
  <div class="title-wrap">
    <img :src="imgSrc" alt="">
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
    computed: {
      imgSrc() {
        return `/static/imgs/Question${this.$route.query.type}/${this.$route.name}.png`
      }
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
  img {
    width: 303px;
    height: 104px;
    position: fixed;
    bottom: 212px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
