<template>
  <div class="question-wrap">
    <template v-show="!show_video">
      <QuestionBanner :selected="selected"></QuestionBanner>
      <QuestionTitle></QuestionTitle>
      <QuestionFooter @select="select" :selected="selected"></QuestionFooter>
    </template>
    <!--<img src="/static/imgs/球@2x.png" alt="" ref="ball" class="question-ball">-->
    <img src="/static/video/video3.gif" v-show="show_video" class="result-video">
    <audio src="/static/video/shemen.mp3" id="video_bgm" ref="video_bgm" autoplay></audio>
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
        selected: false,
        // 开场动画
        begin: false,
        show_video:false
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
        if (!this.begin) return
        this.selected = answer

        // 播放声音
        document.getElementById('audio').volume=0.05
        let soundID = `${this.$route.query.type == 1 ? 'G' : 'F'}${this.$route.name.slice(-1)}${this.selected}`
        createjs.Sound.play(soundID).on('complete', () => {
          console.log('配音播放结束')
          document.getElementById('audio').volume=1
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
            window.bgMusic.pause()

            this.show_video = true
            // 注册声音
            /*createjs.Sound.alternateExtensions = ["mp3"];
            createjs.Sound.registerSound({src:"/static/video/shemen.mp3", id:"resultSound"});
            createjs.Sound.on("fileload", () => {
              createjs.Sound.play("resultSound");
            });*/
            this.$refs.video_bgm.play()

            setTimeout(() => {
              window.bgMusic.play()
              this.$router.push({
                name: 'Result',
                query: Object.assign({}, JSON.parse(JSON.stringify(this.$route.query)), {
                  [this.$route.name.toLowerCase()]: this.selected
                })
              })
            }, 4500)

          }
        })
      },
      // 防守类的球轨迹
      FSAnimate() {
        var timeline = anime.timeline()
        timeline
          .add({
            targets: '.question-ball',
            top: -100,
            left: 150,
            easing: [0.58, 0.005, 1.00, 0.48],
            duration: 600
          })
          .finished
          .then(() => {
            console.log('动画完了')
            this.begin = true
          })
      },

    },
    created() {
      this.registerSound()
    },
    mounted() {
      // 防守类球轨迹
      setTimeout(() => {
        this.FSAnimate()
      }, 500)

      //window.bgMusic.volume = 0.2
      window.bgMusic.play()
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
  .question-ball {
    position: fixed;
    top: 700px;
    left: 200px;
  }
  .result-video {
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 10;
  }
</style>
