<template>
    <div class="question-wrap">
      <QuestionBanner :selected="selected"></QuestionBanner>
      <QuestionTitle></QuestionTitle>
      <QuestionFooter @select="select"></QuestionFooter>
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
      }
    }
  }
</script>

<style scoped>

</style>
