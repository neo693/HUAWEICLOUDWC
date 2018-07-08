<template>
    <div class="question-wrap">
      <QuestionBanner :selected="selected"></QuestionBanner>
      <Question></Question>
      <QuestionFooter @select="select"></QuestionFooter>
    </div>
</template>

<script>
  import QuestionBanner from './QuestionBanner'
  import Question from './Question'
  import QuestionFooter from './QuestionFooter'

  export default {
    name: "Question1",
    components: { QuestionBanner, Question, QuestionFooter },
    data() {
      return {
        selected: false
      }
    },
    methods: {
      select(answer) {
        this.selected = answer
      }
    }
  }
</script>

<style scoped>

</style>
