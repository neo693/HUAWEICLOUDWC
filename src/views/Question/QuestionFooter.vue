<template>
  <div>
    <img :src="imgSrcA" alt="" @click="select('A')">
    <img :src="imgSrcB" alt="" @click="select('B')">
    <img :src="imgSrcC" alt="" @click="select('C')">
  </div>
</template>

<script>
  export default {
    name: "QuestionFooter",
    props: ['selected'],
    computed: {
      imgSrcA() {
        return `/static/imgs/QuestionFooter/${this.$route.name}A${this.selected == 'A'?'Selected':''}.png`
      },
      imgSrcB() {
        return `/static/imgs/QuestionFooter/${this.$route.name}B${this.selected == 'B'?'Selected':''}.png`
      },
      imgSrcC() {
        return `/static/imgs/QuestionFooter/${this.$route.name}C${this.selected == 'C'?'Selected':''}.png`
      }
    },
    methods: {
      select(answer) {
        // 选择答案后不可更改
        if (this.selected) return
        this.$emit('select', answer)
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    position: fixed;
    &:first-child {
      bottom: 62px;
      left: 3px;
    }
    &:nth-child(2) {
      bottom: 57px;
      right: 0;
    }
    &:last-child {
      left: 4px;
      bottom: 6px;
    }
  }
</style>
