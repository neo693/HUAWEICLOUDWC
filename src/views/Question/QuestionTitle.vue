<template>
  <div>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
  export default {
    name: "QuestionTitle",
    computed: {
      imgSrc() {
        return `/static/imgs/Question${this.$route.query.type}/${this.$route.name}.png`
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    width: 303px;
    height: 104px;
    position: fixed;
    top: 293px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
