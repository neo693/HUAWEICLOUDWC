<template>
  <div>
    <img :src="imgSrcA" alt="" @click="select('A')" class="imgSrcA" onclick="return false">
    <i class="pulse infinite" :class="{animated:!selected}" v-show="loaded&&(!selected||selected!='A')"></i>
    <img :src="imgSrcB" alt="" @click="select('B')" class="imgSrcB" onclick="return false">
    <i class="pulse infinite" :class="{animated:!selected}" v-show="loaded&&(!selected||selected!='B')"></i>
    <img :src="imgSrcC" alt="" @click="select('C')" class="imgSrcC" onclick="return false">
    <i class="pulse infinite" :class="{animated:!selected}" v-show="loaded&&(!selected||selected!='C')"></i>
  </div>
</template>

<script>
  export default {
    name: "QuestionFooter",
    props: ['selected'],
    data() {
      return {
        loaded: false,
        beishu: 1,
      }
    },
    computed: {
      imgSrcA() {
        return `/static/imgs/QuestionFooter${this.$route.query.type}/${this.$route.name}A${this.selected == 'A'?'Selected':''}.png`
      },
      imgSrcB() {
        return `/static/imgs/QuestionFooter${this.$route.query.type}/${this.$route.name}B${this.selected == 'B'?'Selected':''}.png`
      },
      imgSrcC() {
        return `/static/imgs/QuestionFooter${this.$route.query.type}/${this.$route.name}C${this.selected == 'C'?'Selected':''}.png`
      }
    },
    methods: {
      select(answer) {
        // 选择答案后不可更改
        if (this.selected) return
        this.$emit('select', answer)
      },
      Animate() {
        this.loaded = false
        anime({
          targets: '.imgSrcA',
          translateX: [-600*this.beishu, 0],
          translateY: [-100*this.beishu, 0],
          easing: 'linear',
          duration: 800
        })
        anime({
          targets: '.imgSrcB',
          translateX: [600*this.beishu, 0],
          translateY: [-100*this.beishu, 0],
          easing: 'linear',
          duration: 800
        })
        anime({
          targets: '.imgSrcC',
          translateY: [600*this.beishu, 0],
          easing: 'linear',
          duration: 800
        }).finished.then(() => {
          // 动画完了之后abc才开始闪
          this.loaded = true
        })
      }
    },
    mounted() {
      // 计算网页缩放的基数
      this.beishu = parseInt(document.documentElement.style.fontSize)/37.5;
      this.Animate()
    },
    watch: {
      '$route'() {
        this.Animate()
      }
    }
  }
</script>

<style lang="scss" scoped>
  img {
    position: absolute;
    &:first-child {
      width: 200px;
      height: 160px;
      bottom: 62px;
      left: 3px;
    }
    &:nth-of-type(2) {
      width: 200px;
      height: 167px;
      bottom: 57px;
      right: 0;
    }
    &:last-of-type {
      width: 371px;
      height: 117px;
      left: 4px;
      bottom: 6px;
    }
  }
  i {
    position: absolute;
    &:first-of-type {
      width: 63px;
      height: 76px;
      background-image: url("/static/imgs/QuestionFooter1/a@2x.png");
      background-size: cover;
      bottom: 145px;
      left: 12px;
    }
    &:nth-of-type(2) {
      width: 50px;
      height: 83px;
      background-image: url("/static/imgs/QuestionFooter1/b@2x.png");
      background-size: cover;
      right: 121px;
      bottom: 140px;
    }
    &:last-of-type {
      width: 70px;
      height: 81px;
      background-image: url("/static/imgs/QuestionFooter1/c@2x.png");
      background-size: cover;
      bottom: 38px;
      left: 92px;
    }
  }
</style>
