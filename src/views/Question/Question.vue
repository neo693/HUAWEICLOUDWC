<template>
  <div>
    <img :src="imgSrc" alt="">
  </div>
</template>

<script>
  export default {
    name: "Question",
    computed: {
      imgSrc() {
        return `/static/imgs/Question/${this.$route.name}.png`
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    position: fixed;
    top: 293px;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
