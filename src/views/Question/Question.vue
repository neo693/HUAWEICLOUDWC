<template>
  <div class="question-wrap">
    <template v-show="!show_video">
      <QuestionBanner :selected="selected"></QuestionBanner>
      <QuestionTitle></QuestionTitle>
      <QuestionFooter @select="select" :selected="selected"></QuestionFooter>
    </template>
    <!--<img src="/static/imgs/球@2x.png" alt="" ref="ball" class="question-ball">-->
    <img src="/static/video/video3.gif" v-show="show_video" class="result-video">
    <audio src="/static/video/shemen.mp3" id="video_bgm" ref="video_bgm"></audio>

    <!--防守型轨迹-->
    <img src="/static/imgs/guiji/F1.png" alt="" class="F1 FG">
    <img src="/static/imgs/guiji/F2.png" alt="" class="F2 FG">
    <img src="/static/imgs/guiji/F3.png" alt="" class="F3 FG">
    <img src="/static/imgs/guiji/F4.png" alt="" class="F4 FG">
    <img src="/static/imgs/guiji/F5.png" alt="" class="F5 FG">
    <img src="/static/imgs/guiji/F6.png" alt="" class="F6 FG">
    <img src="/static/imgs/guiji/F7.png" alt="" class="F7 FG">

    <!--进攻型轨迹-->
    <img src="/static/imgs/guiji/G1.png" alt="" class="G1 FG">
    <img src="/static/imgs/guiji/G2.png" alt="" class="G2 FG">
    <img src="/static/imgs/guiji/G3.png" alt="" class="G3 FG">
    <img src="/static/imgs/guiji/G4.png" alt="" class="G4 FG">
    <img src="/static/imgs/guiji/G5.png" alt="" class="G5 FG">
    <img src="/static/imgs/guiji/G6.png" alt="" class="G6 FG">
    <img src="/static/imgs/guiji/G7.png" alt="" class="G7 FG">
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
        window.timeline1 && window.timeline1.pause()
        window.timeline2 && window.timeline2.pause()
        this.hide()
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
            }, 4000)

          }
        })
      },
      // 动画暂停后隐藏元素
      hide() {
        try {
          document.querySelectorAll('.FG').forEach(ele => {
            ele.removeAttribute('style')
          })
        }
        catch(err) {
          console.log(err)
        }
      },
      // 防守类的球轨迹
      FSAnimate() {
        window.timeline1 = anime.timeline({
          loop: true
        })
        timeline1
          .add({
            targets: '.F1',
            translateX: [-100, -150],
            translateY: [0, 300],
            opacity: 0,
            rotate: '0.1turn',
            scale: 0.6,
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.F3',
            translateX: [0, -200],
            translateY: [0, -600],
            opacity: 0,
            rotate: '0.1turn',
            scale: 0.6,
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.F4',
            translateX: [0, 600],
            translateY: [0, 80],
            opacity: 0,
            scale: 0.6,
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.F5',
            translateX: [0, -600],
            translateY: [0, 120],
            opacity: 0,
            scale: 0.9,
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.F6',
            translateX: [0, 600],
            translateY: [0, -60],
            opacity: 0,
            scale: 1.2,
            rotate: '-0.1turn',
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.F7',
            translateX: [0, -300],
            translateY: [0, -300],
            opacity: 0,
            rotate: '-0.1turn',
            easing: 'linear',
            duration: 800
          })
          .finished
          .then(() => {
            console.log('防守动画完了')
          })
      },
      // 防守类的球轨迹
      JGAnimate() {
        window.timeline2 = anime.timeline({
          loop: true
        })
        timeline2
          .add({
            targets: '.G1',
            translateX: [0, -60, 0],
            translateY: [0, -800],
            opacity: 0,
            scale: 0.6,
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.G3',
            translateX: [0, -700],
            translateY: [0, 270],
            opacity: 0,
            easing: 'linear',
            duration: 1000
          })
          .add({
            targets: '.G4',
            translateX: [0, 600],
            translateY: [0, 200],
            opacity: 0,
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.G5',
            translateX: [0, -600],
            translateY: [0, -50],
            opacity: 0,
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.G6',
            translateX: [0, 600],
            translateY: [0, -150],
            opacity: 0,
            easing: 'linear',
            duration: 800
          })
          .add({
            targets: '.G7',
            translateX: [0, -600],
            translateY: [0, -50],
            opacity: 0,
            easing: 'linear',
            duration: 800
          })
          .finished
          .then(() => {
            console.log('防守动画完了')
          })
      },

    },
    created() {
      this.registerSound()
    },
    mounted() {
      // 防守类球轨迹
      try {
        document.querySelectorAll('.FG').forEach(ele => {
          ele.removeAttribute('style')
        })
      }
      catch(err) {
        console.log(err)
      }
      if (this.$route.query.type == 1) {
        this.JGAnimate()
      } else {
        this.FSAnimate()
      }

      //window.bgMusic.volume = 0.2
      window.bgMusic.play()
    },
    watch: {
      '$route'() {
        try {
          document.querySelectorAll('.FG').forEach(ele => {
            ele.style.opacity = 1
          })
        } catch(err) {}
        // 防守类球轨迹
        if (this.$route.query.type == 1) {
          this.JGAnimate()
        } else {
          this.FSAnimate()
        }
      }
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
  .FG {
    position: absolute;
    top: -300px;
    right: 0;
  }
  .F1 {
    width: 124px;
    height: 290px;
    top: -300px;
    right: 0;
  }
  .F2 {
    width: 163px;
    height: 135px;
  }
  .F3 {
    width: 96px;
    height: 184px;
    top: 400px;
    right: -200px;
  }
  .F4 {
    width: 298px;
    height: 104px;
    top: 50px;
    left: -300px;
  }
  .F5 {
    width: 316px;
    height: 122px;
    top: 100px;
    right: -300px;
  }
  .F6 {
    width: 331px;
    height: 88px;
    top: 150px;
    left: -400px;
  }
  .F7 {
    width: 285px;
    height: 214px;
    top: 200px;
    right: -300px;
  }
  .G1 {
    width: 151px;
    height: 273px;
    bottom: -300px;
    right: 50px;
    top: inherit;
  }
  .G2 {
    width: 133px;
    height: 159px;
  }
  .G3 {
    width: 159px;
    height: 111px;
    top: -150px;
    right: -100px;
  }
  .G4 {
    width: 304px;
    height: 132px;
    top: 100px;
    right: initial;
    left: -300px;
  }
  .G5 {
    width: 317px;
    height: 86px;
    top: 240px;
    right: -300px;
  }
  .G6 {
    width: 344px;
    height: 144px;
    top: 150px;
    right: initial;
    left: -400px;
  }
  .G7 {
    width: 275px;
    height: 80px;
    top: 100px;
    right: -300px;
  }
</style>
