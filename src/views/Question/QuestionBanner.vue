<template>
  <div v-show="showBanner">
    <!--不管三七二十一，上来就是四张图，够了-->
    <img :src="ImgSrc1" alt="" class="banner1img" :class="{cuowudetu}">
    <img :src="ImgSrc2" alt="" class="banner2img" :class="{cuowudetu}">
    <img :src="ImgSrc3" alt="" class="banner3img" :class="{cuowudetu}">
    <img :src="ImgSrc4" alt="" class="banner4img" :class="{cuowudetu}">
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
          if (this.$route.query == 2) {
            if (this.$route.query.question1&&!this.$route.query.question2&&this.selected == 'A') {
              flag = true
            }
            if (this.$route.query.question1 && this.$route.query.question2 && this.selected == 'A') {
              flag = true
            }
          }
          return flag
        }
      },
      methods: {
        // 选题时人物和球的动画
        ballAnimate() {
          // type == 1进攻型
          // selected 为答案
          // question1 question2 为第一题和第二题有没有选择答案
          if (this.$route.query.type == 1 && !this.$route.query.question1) {
            // 进攻型第一题
            if (this.selected == 'A') {
              anime({
                targets: '.banner1img',
                translateX: [-600, 0],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.banner2img',
                translateX: [600, 0],
                translateY: [-600, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'B') {
              anime({
                targets: '.banner1img',
                translateX: [600, 0],
                translateY: [400, 0],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.banner2img',
                translateX: [-600, 0],
                translateY: [-300, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.banner1img',
                translateX: [0, -100],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.banner2img',
                translateX: [-200, 0],
                translateY: [-600, 0],
                duration: 400,
                easing: 'linear'
              })
            }
          }

          if (this.$route.query.type == 1 && this.$route.query.question1 && !this.$route.query.question2) {
            // 进攻型第二题
            if (this.selected == 'A') {
              anime({
                targets: '.banner1img',
                translateX: [600, 0],
                translateY: [600, 0],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.banner2img',
                  translateX: [0, -600],
                  translateY: [0, -900],
                  scale: 0.6,
                  duration: 400,
                  easing: 'linear'
                })
              })
            } else if (this.selected == 'B') {
              anime({
                targets: '.banner1img',
                translateX: [600, 0],
                translateY: [-400, 0],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.banner2img',
                  translateX: [0, -600],
                  translateY: [0, 300],
                  duration: 400,
                  easing: 'linear'
                })
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.banner1img',
                translateX: [-600, 0],
                translateY: [300, 0],
                duration: 400,
                easing: 'linear'
              })
            }
          }

          if (this.$route.query.type == 1 && this.$route.query.question1 && this.$route.query.question2) {
            // 进攻型第三题
            if (this.selected == 'A') {
              anime({
                targets: '.banner1img',
                translateX: [600, 0],
                translateY: [200, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'B') {
              document.querySelector('.banner2img').style.opacity = 0
              anime({
                targets: '.banner1img',
                translateX: [-600, 0],
                translateY: [-400, 0],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.banner1img',
                  opacity: 0,
                  duration: 400,
                  easing: 'linear'
                })
                anime({
                  targets: '.banner2img',
                  opacity: 1,
                  duration: 400,
                  easing: 'linear'
                })
                anime({
                  targets: '.banner2img',
                  translateX: [-150, 0],
                  duration: 400,
                  easing: 'linear'
                })
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.banner1img',
                translateX: [600, 0],
                translateY: [-200, 0],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                anime({
                  targets: '.banner2img',
                  translateX: [0, -600],
                  translateY: [0, 200],
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
                targets: '.banner1img',
                translateX: [-200, 0],
                translateY: [600, 0],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.banner2img',
                translateX: [200, 0],
                translateY: [-600, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'B') {
              document.querySelector('.banner3img').style.opacity = 0
              document.querySelector('.banner4img').style.opacity = 0
              anime({
                targets: ['.banner1img', '.banner2img'],
                opacity: 0,
                duration: 600,
                easing: 'linear'
              })
              anime({
                targets: ['.banner3img', '.banner4img'],
                opacity: 1,
                scale: [0.8, 1],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.banner2img',
                translateX: [0, 60],
                translateY: [0, 60],
                duration: 400,
                easing: 'linear'
              })
              anime({
                targets: '.banner3img',
                translateX: [0, 30],
                translateY: [0, -50],
                duration: 400,
                easing: 'linear'
              })
            }
          }

          if (this.$route.query.type == 2 && this.$route.query.question1 && !this.$route.query.question2) {
            // 进攻型第二题
            if (this.selected == 'A') {
              document.querySelector('.banner3img').style.opacity = 0
              document.querySelector('.banner4img').style.opacity = 0
              anime({
                targets: ['.banner1img', '.banner2img'],
                opacity: 0,
                duration: 600,
                easing: 'linear'
              })
              anime({
                targets: ['.banner3img'],
                opacity: 1,
                scale: [0.8, 1],
                duration: 400,
                easing: 'linear'
              }).finished.then(() => {
                document.querySelector('.banner3img').style.opacity = 0
                document.querySelector('.banner4img').style.opacity = 1
              })
            } else if (this.selected == 'B') {
              anime({
                targets: '.banner1img',
                translateX: [600, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.banner1img',
                translateX: [600, 0],
                translateY: [-600, 0],
                duration: 400,
                easing: 'linear'
              })
            }
          }

          if (this.$route.query.type == 2 && this.$route.query.question1 && this.$route.query.question2) {
            // 防守型第三题
            if (this.selected == 'A') {
              anime({
                targets: '.banner1img',
                translateX: [-600, 0],
                duration: 400,
                easing: 'linear'
              })
            } else if (this.selected == 'B') {
              anime({
                targets: '.banner1img',
                translateX: [0, 20],
                duration: 1000,
                easing: 'linear'
              })
            } else if (this.selected == 'C') {
              anime({
                targets: '.banner1img',
                translateX: [-600, 0],
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
          this.ballAnimate()
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
</style>
