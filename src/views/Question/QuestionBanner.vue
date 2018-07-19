<template>
  <div v-show="showBanner">
    <!--不管三七二十一，上来就是四张图，够了-->
    <!--<img :src="ImgSrc1" alt="" class="banner1img" :class="{cuowudetu, questionPhoneX}">
    <img :src="ImgSrc2" alt="" class="banner2img" :class="{cuowudetu, questionPhoneX}">
    <img :src="ImgSrc3" alt="" class="banner3img" :class="{cuowudetu, questionPhoneX}">
    <img :src="ImgSrc4" alt="" class="banner4img" :class="{cuowudetu, questionPhoneX}">-->
    <img src="../../../static/imgs/QuestionBanner1/1-A.png" alt="" class="q1banner1A" v-show="ImgSrc1.indexOf('QuestionBanner1/1-A.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/1-A2.png" alt="" class="q1banner1A2" v-show="ImgSrc2.indexOf('QuestionBanner1/1-A2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/1-B.png" alt="" class="q1banner1B" v-show="ImgSrc1.indexOf('QuestionBanner1/1-B.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/1-B2.png" alt="" class="q1banner1B2" v-show="ImgSrc2.indexOf('QuestionBanner1/1-B2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/1-C.png" alt="" class="q1banner1C" v-show="ImgSrc1.indexOf('QuestionBanner1/1-C.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/1-C2.png" alt="" class="q1banner1C2" v-show="ImgSrc2.indexOf('QuestionBanner1/1-C2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/2-A.png" alt="" class="q1banner2A" v-show="ImgSrc1.indexOf('QuestionBanner1/2-A.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/2-A2.png" alt="" class="q1banner2A2" v-show="ImgSrc2.indexOf('QuestionBanner1/2-A2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/2-B.png" alt="" class="q1banner2B" v-show="ImgSrc1.indexOf('QuestionBanner1/2-B.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/2-B2.png" alt="" class="q1banner2B2" v-show="ImgSrc2.indexOf('QuestionBanner1/2-B2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/2-C.png" alt="" class="q1banner2C" v-show="ImgSrc1.indexOf('QuestionBanner1/2-C.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/3-A.png" alt="" class="q1banner3A" v-show="ImgSrc1.indexOf('QuestionBanner1/3-A.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/3-B.png" alt="" class="q1banner3B" v-show="ImgSrc1.indexOf('QuestionBanner1/3-B.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/3-B2.png" alt="" class="q1banner3B2" v-show="ImgSrc2.indexOf('QuestionBanner1/3-B2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/3-B3.png" alt="" class="q1banner3B3" v-show="ImgSrc3.indexOf('QuestionBanner1/3-B3.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/3-C.png" alt="" class="q1banner3C" v-show="ImgSrc1.indexOf('QuestionBanner1/3-C.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner1/3-C2.png" alt="" class="q1banner3C2" v-show="ImgSrc2.indexOf('QuestionBanner1/3-C2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-A.png" alt="" class="q2banner1A" v-show="ImgSrc1.indexOf('QuestionBanner2/1-A.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-A2.png" alt="" class="q2banner1A2" v-show="ImgSrc2.indexOf('QuestionBanner2/1-A2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-B.png" alt="" class="q2banner1B questionPhoneX" v-show="ImgSrc1.indexOf('QuestionBanner2/1-B.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-B2.png" alt="" class="q2banner1B2 questionPhoneX" v-show="ImgSrc2.indexOf('QuestionBanner2/1-B2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-B3.png" alt="" class="q2banner1B3 questionPhoneX" v-show="ImgSrc3.indexOf('QuestionBanner2/1-B3.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-B4.png" alt="" class="q2banner1B4" v-show="ImgSrc4.indexOf('QuestionBanner2/1-B4.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-C.png" alt="" class="q2banner1C" v-show="ImgSrc1.indexOf('QuestionBanner2/1-C.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-C2.png" alt="" class="q2banner1C2" v-show="ImgSrc2.indexOf('QuestionBanner2/1-C2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/1-C3.png" alt="" class="q2banner1C3" v-show="ImgSrc3.indexOf('QuestionBanner2/1-C3.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/2-A.png" alt="" class="q2banner2A cuowudetu questionPhoneX" v-show="ImgSrc1.indexOf('QuestionBanner2/2-A.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/2-A2.png" alt="" class="q2banner2A2 cuowudetu questionPhoneX" v-show="ImgSrc2.indexOf('QuestionBanner2/2-A2.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/2-A3.png" alt="" class="q2banner2A3 cuowudetu questionPhoneX" v-show="ImgSrc3.indexOf('QuestionBanner2/2-A3.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/2-A4.png" alt="" class="q2banner2A4 cuowudetu questionPhoneX" v-show="ImgSrc4.indexOf('QuestionBanner2/2-A4.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/2-B.png" alt="" class="q2banner2B" v-show="ImgSrc1.indexOf('QuestionBanner2/2-B.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/2-C.png" alt="" class="q2banner2C" v-show="ImgSrc1.indexOf('QuestionBanner2/2-C.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/3-A.png" alt="" class="q2banner3A cuowudetu" v-show="ImgSrc1.indexOf('QuestionBanner2/3-A.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/3-B.png" alt="" class="q2banner3B" v-show="ImgSrc1.indexOf('QuestionBanner2/3-B.png')!==-1">
    <img src="../../../static/imgs/QuestionBanner2/3-C.png" alt="" class="q2banner3C" v-show="ImgSrc1.indexOf('QuestionBanner2/3-C.png')!==-1">
  </div>
</template>

<script>
    export default {
      name: "QuestionBanner",
      props: ['selected'],
      data() {
        return {
          showBanner: false
        }
      },
      computed: {
        ImgSrc1() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner${this.$route.query.type}/${this.$route.name.slice(-1)}-${this.selected}.png`
        },
        ImgSrc2() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner${this.$route.query.type}/${this.$route.name.slice(-1)}-${this.selected}2.png`
        },
        ImgSrc3() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner${this.$route.query.type}/${this.$route.name.slice(-1)}-${this.selected}3.png`
        },
        ImgSrc4() {
          if (!this.selected) return ''
          return `/static/imgs/QuestionBanner${this.$route.query.type}/${this.$route.name.slice(-1)}-${this.selected}4.png`
        },
        // 设计给的图错的,位置不对,,做下修正
        cuowudetu() {
          let flag = false
          if (this.$route.query.type == 2) {
            if (this.$route.query.question1&&!this.$route.query.question2&&this.selected == 'A') {
              flag = true
            }
            if (this.$route.query.question1 && this.$route.query.question2 && this.selected == 'A') {
              flag = true
            }
          }
          return flag
        },
        // 第一题
        diyiti() {
          return !this.$route.query.question1
        },
        dierti() {
          return this.$route.query.question1 && !this.$route.query.question2
        },
        disanti() {
          return this.$route.query.question1 && this.$route.query.question2
        },
        img2hide() {
          let flag = false
          if (this.$route.query.type == 1) {
            if (this.selected == 'A' && this.disanti) {
              flag = true
            }
            if (this.selected == 'C' && this.dierti) {
              flag = true
            }
          }
          if (this.$route.query.type == 2) {
            if (this.selected == 'B' && this.dierti) {
              flag = true
            }
            if (this.selected == 'C' && this.dierti) {
              flag = true
            }
            if (this.disanti) {
              flag = true
            }
          }
          return flag
        },
        img3hide() {
          let flag = false
          if (this.$route.query.type == 1) {
            if (!(this.selected == 'B' && this.disanti)) {
              flag = true
            }
          }
          if (this.$route.query.type == 2) {
            if ((this.selected == 'A' && this.diyiti)) {
              flag = true
            }
            if ((this.selected == 'B' && this.dierti)) {
              flag = true
            }
            if ((this.selected == 'C' && this.dierti)) {
              flag = true
            }
            if (this.disanti) {
              flag = true
            }
          }
          return flag
        },
        img4hide() {
          let flag = false
          if (this.$route.query.type == 1) {
            flag = true
          }
          if (this.$route.query.type == 2) {
            if (!(this.selected == 'B' && this.diyiti)) {
              flag = true
            }
          }
          return flag
        },
        questionPhoneX() {
          let flag = false
          if (this.$route.query.type == 2) {
            if (this.selected == 'B' && this.diyiti) {
              flag = true
            }
            if (this.selected == 'A' && this.dierti) {
              flag = true
            }
          }
          return flag
        }
      },
      methods: {
        // 选题时人物和球的动画
        ballAnimate() {
          let beishu = parseInt(document.documentElement.style.fontSize)/37.5;
          // type == 1进攻型
          // selected 为答案
          // question1 question2 为第一题和第二题有没有选择答案
          if (this.$route.query.type == 1 && !this.$route.query.question1) {
            // 进攻型第一题
            if (this.selected == 'A') {
              anime({
                targets: '.q1banner1A',
                translateX: [-600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.q1banner1A2',
                translateX: [600*beishu, 0],
                translateY: [-600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'B') {
              anime({
                targets: '.q1banner1B',
                translateX: [600*beishu, 0],
                translateY: [400*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.q1banner1B2',
                translateX: [-600*beishu, 0],
                translateY: [-300*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.q1banner1C',
                translateX: [0, -100*beishu],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.q1banner1C2',
                translateX: [-200*beishu, 0],
                translateY: [-600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            }
          }

          if (this.$route.query.type == 1 && this.$route.query.question1 && !this.$route.query.question2) {
            // 进攻型第二题
            if (this.selected == 'A') {
              anime({
                targets: '.q1banner2A',
                translateX: [600*beishu, 0],
                translateY: [600*beishu, 0],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.q1banner2A2',
                  translateX: [0, -600*beishu],
                  translateY: [0, -900*beishu],
                  scale: 0.6,
                  duration: 400,
                  easing: 'linear'
                })
              })
            } else if (this.selected == 'B') {
              anime({
                targets: '.q1banner2B',
                translateX: [600*beishu, 0],
                translateY: [-400*beishu, 0],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.q1banner2B2',
                  translateX: [0, -600*beishu],
                  translateY: [0, 300*beishu],
                  duration: 400,
                  easing: 'linear'
                })
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.q1banner2C',
                translateX: [-600*beishu, 0],
                translateY: [300*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            }
          }

          if (this.$route.query.type == 1 && this.$route.query.question1 && this.$route.query.question2) {
            // 进攻型第三题
            if (this.selected == 'A') {
              anime({
                targets: '.q1banner3A',
                translateX: [600*beishu, 0],
                translateY: [200*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'B') {
              document.querySelector('.q1banner3B2').style.opacity = 0
              anime({
                targets: '.q1banner3B',
                translateX: [-600*beishu, 0],
                translateY: [-400*beishu, 0],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.q1banner3B',
                  opacity: 0,
                  duration: 400,
                  easing: 'linear'
                })
                anime({
                  targets: '.q1banner3B2',
                  opacity: 1,
                  duration: 400,
                  easing: 'linear'
                })
                anime({
                  targets: '.q1banner3B2',
                  translateX: [-150*beishu, 0],
                  duration: 400,
                  easing: 'linear'
                })
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.q1banner3C',
                translateX: [600*beishu, 0],
                translateY: [-200*beishu, 0],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.q1banner3C2',
                  translateX: [0, -600*beishu],
                  translateY: [0, 200*beishu],
                  duration: 400,
                  easing: 'linear'
                })
              })
            }
          }

          if (this.$route.query.type == 2 && !this.$route.query.question1) {
            // 防守型第一题
            if (this.selected == 'A') {
              anime({
                targets: '.q2banner1A',
                translateX: [-200*beishu, 0],
                translateY: [600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.q2banner1A2',
                translateX: [200*beishu, 0],
                translateY: [-600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'B') {
              document.querySelector('.q2banner1B3').style.opacity = 0
              document.querySelector('.q2banner1B4').style.opacity = 0
              anime({
                targets: ['.q2banner1B', '.q2banner1B2'],
                opacity: 0,
                duration: 600,
                easing: 'linear'
              })
              anime({
                targets: '.q2banner1B3',
                opacity: 1,
                scale: [0.8, 1],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.q2banner1B4',
                  scale: [1, 1.2],
                  opacity: [0, 1],
                  rotate: '1turn',
                  duration: 800,
                  easing: 'linear',
                })
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.q2banner1C2',
                translateX: [0, 60*beishu],
                translateY: [0, 60*beishu],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.q2banner1C3',
                translateX: [0, 30*beishu],
                translateY: [0, -50*beishu],
                duration: 400,
                easing: 'linear'
              })
            }
          }

          if (this.$route.query.type == 2 && this.$route.query.question1 && !this.$route.query.question2) {
            // 进攻型第二题
            if (this.selected == 'A') {
              document.querySelector('.q2banner2A3').style.opacity = 0
              document.querySelector('.q2banner2A4').style.opacity = 0
              anime({
                targets: ['.q2banner2A', '.q2banner2A2'],
                opacity: 0,
                duration: 600,
                easing: 'linear'
              })
              anime({
                targets: ['.q2banner2A3'],
                opacity: 1,
                scale: [0.8, 1],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                document.querySelector('.q2banner2A3').style.opacity = 0
                document.querySelector('.q2banner2A4').style.opacity = 1
              })
            } else if (this.selected == 'B') {
              anime({
                targets: '.q2banner2B',
                translateX: [600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.q2banner2C',
                translateX: [600*beishu, 0],
                translateY: [-600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            }
          }

          if (this.$route.query.type == 2 && this.$route.query.question1 && this.$route.query.question2) {
            // 防守型第三题
            if (this.selected == 'A') {
              anime({
                targets: '.q2banner3A',
                translateX: [-600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'B') {
              anime({
                targets: '.q2banner3B',
                translateX: [0, 20*beishu],
                duration: 1000,
                easing: 'linear'
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.q2banner3C',
                translateX: [-600*beishu, 0],
                duration: 400,
                easing: 'linear'
              })
            }
          }
        }
      },
      watch: {
        selected() {
          this.showBanner = true
          this.$forceUpdate()
          this.$nextTick(() => {
            this.ballAnimate()
          })
        },
        '$route'() {
          if (!this.selected) {
            this.showBanner = false
          }
        }
      }
    }
</script>

<style lang="scss" scoped>
  img {
    width: 100%;
    position: absolute;
    top: -58px;
    z-index: 1;
    &.cuowudetu {
      top: 0;
    }
  }
  .q2banner1B4 {
    width: 30px;
    height: 26px;
    position: absolute;
    top: 109px;
    right: 61px;
    transform-origin: 14px 16px;
  }
</style>
<style>
  @media only screen and (width: 375px) and (height: 690px){
    .questionPhoneX {
      top: 20px!important;
    }
    img.cuowudetu.questionPhoneX {
      top: 84px!important;
    }
  }
</style>
