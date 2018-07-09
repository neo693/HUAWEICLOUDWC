<template>
  <div class="question-wrap">
    <QuestionBanner :selected="selected"></QuestionBanner>
    <QuestionTitle></QuestionTitle>
    <QuestionFooter @select="select" :selected="selected"></QuestionFooter>
    <img src="/static/imgs/球@2x.png" alt="" ref="ball" class="question-ball">
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
      registerSound() {
        // 注册声音
        createjs.Sound.alternateExtensions = ["mp3"];
        let assetPath = '../../../static/audio/';
        let sounds = [];
        [1, 2, 3].forEach(i => {
          sounds.push({
            src: `F${i}A.mp3`,
            id: `F${i}A`
          })
          sounds.push({
            src: `F${i}B.mp3`,
            id: `F${i}B`
          })
          sounds.push({
            src: `F${i}C.mp3`,
            id: `F${i}C`
          })
          sounds.push({
            src: `G${i}A.mp3`,
            id: `G${i}A`
          })
          sounds.push({
            src: `G${i}B.mp3`,
            id: `G${i}B`
          })
          sounds.push({
            src: `G${i}C.mp3`,
            id: `G${i}C`
          })
        })
        createjs.Sound.registerSounds(sounds, assetPath)
      },
      select(answer) {
        this.selected = answer

        // 播放声音
        let soundID = `${this.$route.query.type == 1 ? 'G' : 'F'}${this.$route.name.slice(-1)}${this.selected}`
        createjs.Sound.play(soundID).on('complete', () => {
          console.log('配音播放结束')

          // 进入下一页
          // 如果是问题1或者2就进入下一个问题
          // 首先得播放动画再进入下一页

          if (+this.$route.name.slice(-1) < 3) {
            this.$router.push({
              path: this.$route.path.slice(0, -1) + ((+this.$route.path.slice(-1))+1),
              query: Object.assign({}, JSON.parse(JSON.stringify(this.$route.query)), {
                [this.$route.name.toLowerCase()]: this.selected
              })
            })
            this.selected = false
          } else {
            alert('该进入结果页了, 记得带上上面的question3参数')
          }
        })
      },
      // 防守类的球轨迹
      FSAnimate() {
        anime({
          el: '.question-ball',

        })
      }
    },
    created() {
      this.registerSound()
    }
  }
</script>

<style lang="scss" scoped>
  .question-wrap {
    width:100%;
    height: 100%;
    background: url('/static/imgs/line1@2x.png') no-repeat center -58px;
    position: relative;
  }
</style>
