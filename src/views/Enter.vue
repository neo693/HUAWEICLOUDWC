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
  export default {
    data(){
      return {
        show_btn:false,
        show_head_ball:true,
        show_gate:false,
        show_hit:false,
        music_url:'/static/imgs/打开声音@2x.png',
        time_dur:1000,
        time_delay:600,
        ball1:'',
        man2:'',
        ball2:'',
        timer1:'',
        timer2:'',
        timer3:''
      }
    },
    methods:{
      start(){
        this.$router.push({name:'Character'})
      },
      animate(){
        let that=this
        this.ball1=anime({
          targets: '.ball1',
          translateX:[-200,0],
          translateY: [-100,0],
          duration: that.time_dur,
          rotate:'3turn',
          loop: false,
          easing: 'linear'
        })
         this.man2=anime({
          targets: '.man2',
          translateX:[275,0],
          translateY: [467,0],
          duration: that.time_dur,
          loop: false,
          easing: 'linear'
        })
        this.man2.finished.then(()=>{
          setTimeout(()=>{
            this.show_head_ball=false
            this.show_gate=true
            let man3=anime({
              targets: '.gate',
              translateX:[-375,0],
              duration: that.time_dur,
              loop: false,
              easing: 'linear'
            })
            man3.finished.then(()=>{
              setTimeout(()=>{
                this.show_gate=false
                this.show_hit = true
                this.ball2.restart()
                let man1=anime({
                  targets: '.hit',
                  translateX:[275,0],
                  translateY: [467,0],
                  duration: that.time_dur,
                  loop: false,
                  easing: 'linear'
                })
          
                 this.ball2=anime(
                  {
                    targets: '.ball2',
                    translateX:[475,0],
                    translateY: [50,0],
                    duration: that.time_dur,
                    rotate:'3turn',
                    loop: false,
                    easing: 'linear',
            
                  }
                )
            
                this.ball2.finished.then(()=>{
                  setTimeout(()=>{
                    that.show_gate=false
                    that.show_hit=false
                    that.show_head_ball=true
                    //that.ball1.restart()
                    //that.animate()
                  },that.time_delay)
                })
              },that.time_delay)
            })
          },that.time_delay)
        });
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
      document.getElementById('audio').play()
      this.animate()
      let time1=this.time_dur*3+this.time_delay*3
      let time2=this.time_dur*2+this.time_delay*2

       this.timer1=window.setInterval(()=>{
        this.ball1.restart()
        this.animate()
        this.timer2=window.setTimeout(()=>{
          this.ball2.restart()
        },time2)
      },time1)
      setTimeout(()=>{
        this.show_btn=true
      },time1)
    },
    beforeDestroy(){
       window.clearInterval(this.timer1)
       window.clearTimeout(this.timer2)
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
        left:0;
        right: 0;
        margin: auto;
      }
      .ball1{
        position: absolute;
        display: block;
        width: 75px;
        top:142px;
        left:0;
      }
      .gate{
        position: absolute;
        display: block;
        width: 375px;
        left:0;
        right: 0;
        margin: auto;
      }
      .hit{
        position: absolute;
        display: block;
        width: 375px;
        left:0;
        right: 0;
        margin: auto;
      }
      .ball2{
        position: absolute;
        display: block;
        width: 61px;
        top:122px;
        left:90px;
      }
    }
</style>
