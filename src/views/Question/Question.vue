<template>
    <div class="question-wrap">
      <QuestionBanner :selected="selected"></QuestionBanner>
      <QuestionTitle></QuestionTitle>
      <QuestionFooter @select="select" :selected="selected"></QuestionFooter>
    </div>
</template>

<script>
  import QuestionBanner from './QuestionBanner'
  import QuestionTitle from './QuestionTitle'
  import QuestionFooter from './QuestionFooter'

  export default {
    name: "Question",
    components: { QuestionBanner, QuestionTitle, QuestionFooter },
    data() {
      return {
        selected: false
      }
    },
    methods: {
      select(answer) {
        this.selected = answer
        // 进入下一页
        // 如果是问题1或者2就进入下一个问题
        // 首先得播放动画再进入下一页
        setTimeout(() => {
          if (+this.$route.name.slice(-1) < 3) {
            this.$router.push(this.$route.fullPath.slice(0, -1) + ((+this.$route.fullPath.slice(-1))+1))
            this.selected = false
          } else {
            alert('该进入结果页了')
          }
        }, 3000)

      }
    }
  }
</script>

<style lang="scss" scoped>
  .question-wrap {
    width:100%;
    height: 100%;
    background: url('/static/imgs/line1@2x.png') no-repeat center -58px;
  }
</style>
