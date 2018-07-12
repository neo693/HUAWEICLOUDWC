<template>
  <div class="enter">
    <img src="/static/imgs/标题@2x.png" alt="title" class="title">
    <!-- <img src="/static/imgs/群組1@2x.png" alt="man" class="man1 animated slideInLeft" >-->

    <img src="/static/imgs/enter/head.png" class="man2" v-show="show_head_ball">
    <img src="/static/imgs/enter/ball11.png" class="ball1" v-show="show_head_ball">
    <img src="/static/imgs/enter/gate.png" class="gate" v-show="show_gate">
    <img src="/static/imgs/enter/hit.png" class="hit" v-show="show_hit">
    <img src="/static/imgs/enter/ball22.png" class="ball2" v-show="show_hit">
    <img src="/static/imgs/开启测试之旅@2x.png" alt="start" class="start animated fadeIn" @click="start" v-show="show_btn">
    <img :src="music_url" alt="music" class="music animated fadeIn" v-show="show_btn" @click="switchMusic">
  </div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
  export default {
    data(){
      return {
        show_btn:false,
        show_head_ball:true,
        show_gate:true,
        show_hit:true,
        music_url:'/static/imgs/打开声音@2x.png',
        time_dur:1500,
        time_delay:600,
        ball1:'',
        man2:'',
        ball2:'',
        timer1:'',
        timer2:'',
        timer3:'',
      }
    },
    methods:{
      ...mapActions('common',['palyMusic','pauseMusic']),
      start(){
        this.$router.push({name:'Character'})
      },
      animate(){
        var manTimeline = anime.timeline({
          loop: true
        });
        manTimeline
          .add({
            targets: '.man2',
            translateX:[0,-400, -400],
            translateY: [0,-230, -230],
            duration: this.time_dur,
            easing: 'linear'
          })
          .add({
            targets: '.gate',
            translateX:[0,375,375],
            translateY:[0,60,60],
            duration: this.time_dur,
            easing: 'linear'
          })
          .add({
            targets: '.hit',
            translateX:[0,-360,-360],
            translateY: [0,-400,-400],
            duration: this.time_dur,
            easing: 'linear'
          })

        var ballTimeline = anime.timeline({
          loop: true
        })
        ballTimeline
          .add({
            targets: '.ball1',
            translateX:[0,130,130],
            translateY: [0,-100,-100],
            duration: this.time_dur,
            rotate:'3turn',
            easing: 'linear'
          })
          .add({
            targets: '.ball2',
            translateX:[0,-350,-350],
            translateY: [0,100,100],
            duration: this.time_dur,
            rotate:'3turn',
            easing: 'linear',
            delay: this.time_dur
          })

        var hiddenTimeline = anime.timeline({
          loop: true
        })
        hiddenTimeline
          .add({
            targets: ['.man2, .ball1'],
            duration: 1,
            opacity: 0,
            easing: 'linear',
            delay: this.time_dur
          })
          .add({
            targets: '.gate',
            duration: 1,
            opacity: 0,
            easing: 'linear',
            delay: this.time_dur
          })
          .add({
            targets: ['.hit', '.ball2'],
            duration: 1,
            opacity: 0,
            easing: 'linear',
            delay: this.time_dur
          })


      },
      switchMusic(){
        if(this.music_url=='/static/imgs/打开声音@2x.png'){
          this.music_url='/static/imgs/enter/框@2x.png'
          document.getElementById('audio').pause()
        }else if(this.music_url=='/static/imgs/enter/框@2x.png'){
          this.music_url='/static/imgs/打开声音@2x.png'
          document.getElementById('audio').play()
        }
      },
    },
    mounted(){
      this.palyMusic()
      this.animate()

      setTimeout(() => {
        this.show_btn = true
      }, 3*this.time_dur)
    }
  }
</script>
<style scoped lang="scss">
  .enter{
    width:100%;
    height: 100%;
    background: url('/static/imgs/line2@2x.png') no-repeat center 154px;
    position: relative;
    overflow: hidden;
    .title{
      display: block;
      position:absolute;
      top:12px;
      margin: auto;
      left:0;
      right: 0;
      width: 245px;
      height: 160px;
    }
    .man1{
      position: absolute;
      display: block;
      top:182px;
      width: 360px;
      height: 340px;
      left:0;
      right: 0;
      margin: auto;
    }
    .start{
      position: absolute;
      display: block;
      bottom:31px;
      margin: auto;
      left:0;
      right: 0;
      width: 184px;
      height: 68px;
    }
    .music{
      position: absolute;
      display: block;
      bottom:11px;
      margin: auto;
      left:0;
      right: 0;
      width: 118px;
      height: 23px;
    }
    .man2{
      position: absolute;
      display: block;
      width: 375px;
      right:-400px;
      bottom: -200px;
      margin: auto;
    }
    .ball1{
      position: absolute;
      display: block;
      width: 75px;
      top:240px;
      left:-120px;
    }
    .gate{
      position: absolute;
      display: block;
      width: 375px;
      left:-720px;
      right: 0;
      margin: auto;
    }
    .hit{
      position: absolute;
      display: block;
      width: 375px;
      right:-325px;
      bottom: -452px;
      margin: auto;
    }
    .ball2{
      position: absolute;
      display: block;
      width: 61px;
      top:40px;
      right:-80px;
    }
  }
</style>
