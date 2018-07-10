<template>
  <div class="loading">
    <img src="/static/imgs/球@2x.png" alt="足球" class="ball">
    <img src="/static/imgs/投影@2x.png" alt="shadow" class="shadow">
    <div class="bar">
      <div class="progress-bar" :style="{width:bar_width+'%'}"></div>
    </div>
    <div class="txt">
      <span class="small">玩命加载中...</span><b class="large">{{percent}}%</b>
    </div>
    <!--<img src="/static/imgs/方向线%20@2x.png" alt="line" class="line">-->

  </div>
</template>
<script>
  export default {
    data(){
      return {
        percent:0,
        resources:[
          {"src": "/static/imgs/底色@2x.png", "id": "1"},
          {"src": "/static/imgs/投影@2x.png", "id": "2"},
          {"src": "/static/imgs/方向线 @2x.png", "id": "3"},
          {"src": "/static/imgs/球@2x.png", "id": "4"},
          {"src": "/static/imgs/进度@2x.png", "id": "5"},
          {'src':'/static/imgs/line1@2x.png','id':6},
          {'src':'/static/imgs/line2@2x.png','id':7},
          {'src':'/static/imgs/底色@2x.png','id':8},
          {'src':'/static/imgs/开启测试之旅@2x.png','id':9},
          {'src':'/static/imgs/打开声音@2x.png','id':10},
{'src':'/static/imgs/输入姓名@2x.png','id':11},
{'src':'/static/imgs/输入姓名@2x_1.png','id':12},
{'src':'/static/imgs/群組1@2x.png','id':13},
{'src':'/static/imgs/群組1@2x_2.png','id':14},
{'src':'/static/imgs/群組1@2x_1.png','id':15},
{'src':'/static/imgs/toast.png','id':16},
{'src':'/static/imgs/character/defence-player.png','id':17},
{'src':'/static/imgs/character/dir-line@2x.png','id':18},
{'src':'/static/imgs/character/enter-btn@2x.png','id':19},
{'src':'/static/imgs/character/l-arrow@2x.png','id':20},
{'src':'/static/imgs/character/r-arrow@2x.png','id':21},
{'src':'/static/imgs/character/stage@2x.png','id':22},
{'src':'/static/imgs/character/type-chose@2x.png','id':23},
{'src':'/static/imgs/character/type-chose2@2x.png','id':24},
{'src':'/static/imgs/enter/ball1.png','id':25},
{'src':'/static/imgs/enter/ball2.png','id':26},
{'src':'/static/imgs/enter/gate.png','id':27},
{'src':'/static/imgs/enter/head.png','id':28},
{'src':'/static/imgs/enter/hit.png','id':29},
{'src':'/static/imgs/enter/框@2x.png','id':30},
{'src':'/static/imgs/guiji/F1.png','id':31},
{'src':'/static/imgs/guiji/F2.png','id':32},
{'src':'/static/imgs/guiji/F3.png','id':33},
{'src':'/static/imgs/guiji/F4.png','id':34},
{'src':'/static/imgs/guiji/F5.png','id':35},
{'src':'/static/imgs/guiji/F6.png','id':36},
{'src':'/static/imgs/guiji/F7.png','id':37},
{'src':'/static/imgs/guiji/G1.png','id':38},
{'src':'/static/imgs/guiji/G2.png','id':39},
{'src':'/static/imgs/guiji/G3.png','id':40},
{'src':'/static/imgs/guiji/G4.png','id':41},
{'src':'/static/imgs/guiji/G5.png','id':42},
{'src':'/static/imgs/guiji/G6.png','id':43},
{'src':'/static/imgs/guiji/G7.png','id':44},
{'src':'/static/imgs/Question1/Question1.png','id':45},
{'src':'/static/imgs/Question1/Question2.png','id':46},
{'src':'/static/imgs/Question1/Question3.png','id':47},
{'src':'/static/imgs/Question2/Question1.png','id':48},
{'src':'/static/imgs/Question2/Question2.png','id':49},
{'src':'/static/imgs/Question2/Question3.png','id':50},
{'src':'/static/video/video1.gif','id':51},
{'src':'/static/video/video2.gif','id':52},
{'src':'/static/audio/F1A.mp3','id':53},
{'src':'/static/audio/F1B.mp3','id':54},
{'src':'/static/audio/F1C.mp3','id':55},
{'src':'/static/audio/F2A.mp3','id':56},
{'src':'/static/audio/F2B.mp3','id':57},
{'src':'/static/audio/F2C.mp3','id':58},
{'src':'/static/audio/F3A.mp3','id':59},
{'src':'/static/audio/F3B.mp3','id':60},
{'src':'/static/audio/F3C.mp3','id':61},
{'src':'/static/audio/G2A.mp3','id':62},
{'src':'/static/audio/G2B.mp3','id':63},
{'src':'/static/audio/G2C.mp3','id':64},
{'src':'/static/audio/G1A.mp3','id':65},
{'src':'/static/audio/G1B.mp3','id':66},
{'src':'/static/audio/G1C.mp3','id':67},
{'src':'/static/audio/G3A.mp3','id':68},
{'src':'/static/audio/G3B.mp3','id':69},
{'src':'/static/audio/G3C.mp3','id':70},
{'src':'/static/bgm/music.mp3','id':71},
{'src':'/static/bgm/music2.mp3','id':72},
        ],
        progress:[],
        bar_width:0
      }
    },
    methods:{
      init(){
        let que=new createjs.LoadQueue();
        que.loadManifest(this.resources);
        que.on('fileload',this.handleFileLoad)
        que.on('complete',this.onComplete);
      },
      onComplete(e){
        this.percent=100
        this.bar_width=86.6
        /*加载结束后跳转下一页*/
        this.$router.push({name:'Enter'})
      },
      handleFileLoad(e){
        this.progress.push(e.item.id)
        this.percent=(this.progress.length*100/this.resources.length).toFixed(0)
        this.bar_width=86.6/this.resources.length*this.progress.length
      },
    },
    created(){
      this.init()
    }
  }
</script>
<style lang="scss" scoped>
    .loading{
      background: url('/static/imgs/line1@2x.png') no-repeat  center 0;
      position: relative;
      width: 100%;
      height: 100%;
      .ball{
         width: 95px;
         height: 92px;
         display: block;
         position: absolute;
         margin:auto;
         left:0;
         right:0;
         top:185px;
        animation: rotate 3s linear infinite;
        transform-origin: 50% 50%;
      }
      @keyframes rotate{from{transform: rotate(0deg)}
        to{transform: rotate(359deg)}
      }
      .shadow{
        width: 40px;
        height: 13px;
        position: absolute;
        display: block;
        margin: auto;
        left:0;
        right: 0;
        top:293px;
      }
      .bar{
        width: 253px;
        height: 36px;
        position: absolute;
        margin: auto;
        left: 0;
        right:0;
        top:337px;
        background: url('/static/imgs/进度@2x.png') no-repeat  center;
        background-size: 253px 36px;
        .progress-bar{
          height: 10px;
          margin-left: 18px;
          margin-top:11px;
          background: #1E429B;
        }
      }
      .txt{
        width: 100%;
        text-align: center;
        height: 12px;
        position: absolute;
        margin: auto;
        left: 0;
        right: 0;
        top:379px;
        color:rgba(30,66,155,1);
        .small{
          font-size: 12px;

        }
        .large{
          font-size: 16px;
        }
      }
      .line{
        display: block;
        position: absolute;
        height: 387px;
        margin: auto;
        left:0;
        right: 0;
        width: 524px;
      }

    }
</style>
