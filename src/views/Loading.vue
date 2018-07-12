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
{'src':'/static/imgs/enter/ball11.png','id':25},
{'src':'/static/imgs/enter/ball22.png','id':26},
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
{'src':'/static/imgs/guiji/F1.png','id':52},
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
          {'src':'/static/imgs/QuestionBanner1/1-A.png','id':73},
          {'src':'/static/imgs/QuestionBanner1/1-A2.png','id':74},
          {'src':'/static/imgs/QuestionBanner1/1-B.png','id':75},
          {'src':'/static/imgs/QuestionBanner1/1-B2.png','id':76},
          {'src':'/static/imgs/QuestionBanner1/1-C.png','id':77},
          {'src':'/static/imgs/QuestionBanner1/1-C2.png','id':78},
          {'src':'/static/imgs/QuestionBanner1/2-A.png','id':79},
          {'src':'/static/imgs/QuestionBanner1/2-A2.png','id':80},
          {'src':'/static/imgs/QuestionBanner1/2-B.png','id':81},
          {'src':'/static/imgs/QuestionBanner1/2-B2.png','id':82},
          {'src':'/static/imgs/QuestionBanner1/2-C.png','id':83},
          {'src':'/static/imgs/QuestionBanner1/3-A.png','id':84},
          {'src':'/static/imgs/QuestionBanner1/3-B.png','id':85},
          {'src':'/static/imgs/QuestionBanner1/3-B2.png','id':86},
          {'src':'/static/imgs/QuestionBanner1/3-B3.png','id':87},
          {'src':'/static/imgs/QuestionBanner1/3-C.png','id':88},
          {'src':'/static/imgs/QuestionBanner1/3-C2.png','id':89},
          {'src':'/static/imgs/QuestionBanner2/1-A.png','id':90},
          {'src':'/static/imgs/QuestionBanner2/1-A2.png','id':91},
          {'src':'/static/imgs/QuestionBanner2/1-B.png','id':92},
          {'src':'/static/imgs/QuestionBanner2/1-B2.png','id':93},
          {'src':'/static/imgs/QuestionBanner2/1-B3.png','id':94},
          {'src':'/static/imgs/QuestionBanner2/1-B4.png','id':95},
          {'src':'/static/imgs/QuestionBanner2/1-C.png','id':96},
          {'src':'/static/imgs/QuestionBanner2/1-C2.png','id':97},
          {'src':'/static/imgs/QuestionBanner2/1-C3.png','id':98},
          {'src':'/static/imgs/QuestionBanner2/2-A.png','id':99},
          {'src':'/static/imgs/QuestionBanner2/2-A2.png','id':100},
          {'src':'/static/imgs/QuestionBanner2/2-A3.png','id':101},
          {'src':'/static/imgs/QuestionBanner2/2-A4.png','id':102},
          {'src':'/static/imgs/QuestionBanner2/2-B.png','id':103},
          {'src':'/static/imgs/QuestionBanner2/2-C.png','id':104},
          {'src':'/static/imgs/QuestionBanner2/3-A.png','id':105},
          {'src':'/static/imgs/QuestionBanner2/3-B.png','id':106},
          {'src':'/static/imgs/QuestionBanner2/3-C.png','id':107},
          {'src':'/static/imgs/QuestionFooter1/a@2x.png','id':108},
          {'src':'/static/imgs/QuestionFooter1/b@2x.png','id':109},
          {'src':'/static/imgs/QuestionFooter1/c@2x.png','id':110},
          {'src':'/static/imgs/QuestionFooter1/Question1A.png','id':111},
          {'src':'/static/imgs/QuestionFooter1/Question1ASelected.png','id':112},
          {'src':'/static/imgs/QuestionFooter1/Question1B.png','id':113},
          {'src':'/static/imgs/QuestionFooter1/Question1BSelected.png','id':114},
          {'src':'/static/imgs/QuestionFooter1/Question1C.png','id':115},
          {'src':'/static/imgs/QuestionFooter1/Question1CSelected.png','id':116},
          {'src':'/static/imgs/QuestionFooter1/Question2A.png','id':117},
          {'src':'/static/imgs/QuestionFooter1/Question2ASelected.png','id':118},
          {'src':'/static/imgs/QuestionFooter1/Question2B.png','id':119},
          {'src':'/static/imgs/QuestionFooter1/Question2BSelected.png','id':120},
          {'src':'/static/imgs/QuestionFooter1/Question2C.png','id':121},
          {'src':'/static/imgs/QuestionFooter1/Question2CSelected.png','id':122},
          {'src':'/static/imgs/QuestionFooter1/Question3A.png','id':123},
          {'src':'/static/imgs/QuestionFooter1/Question3ASelected.png','id':124},
          {'src':'/static/imgs/QuestionFooter1/Question3B.png','id':125},
          {'src':'/static/imgs/QuestionFooter1/Question3BSelected.png','id':126},
          {'src':'/static/imgs/QuestionFooter1/Question3C.png','id':127},
          {'src':'/static/imgs/QuestionFooter1/Question3CSelected.png','id':128},
          {'src':'/static/imgs/QuestionFooter2/Question1A.png','id':129},
          {'src':'/static/imgs/QuestionFooter2/Question1ASelected.png','id':130},
          {'src':'/static/imgs/QuestionFooter2/Question1B.png','id':131},
          {'src':'/static/imgs/QuestionFooter2/Question1BSelected.png','id':132},
          {'src':'/static/imgs/QuestionFooter2/Question1C.png','id':133},
          {'src':'/static/imgs/QuestionFooter2/Question1CSelected.png','id':134},
          {'src':'/static/imgs/QuestionFooter2/Question2A.png','id':135},
          {'src':'/static/imgs/QuestionFooter2/Question2ASelected.png','id':136},
          {'src':'/static/imgs/QuestionFooter2/Question2B.png','id':137},
          {'src':'/static/imgs/QuestionFooter2/Question2BSelected.png','id':138},
          {'src':'/static/imgs/QuestionFooter2/Question2C.png','id':139},
          {'src':'/static/imgs/QuestionFooter2/Question2CSelected.png','id':140},
          {'src':'/static/imgs/QuestionFooter2/Question3A.png','id':141},
          {'src':'/static/imgs/QuestionFooter2/Question3ASelected.png','id':142},
          {'src':'/static/imgs/QuestionFooter2/Question3B.png','id':143},
          {'src':'/static/imgs/QuestionFooter2/Question3BSelected.png','id':144},
          {'src':'/static/imgs/QuestionFooter2/Question3C.png','id':145},
          {'src':'/static/imgs/QuestionFooter2/Question3CSelected.png','id':146},
          {'src':'/static/imgs/result/C罗@2x.png','id':147},
          {'src':'/static/imgs/result/logo@2x.png','id':148},
          {'src':'/static/imgs/result/不服再战@2x.png','id':149},
          {'src':'/static/imgs/result/保存图片@2x.png','id':150},
          {'src':'/static/imgs/result/华为云MLS机器学习平台@2x.png','id':151},
          {'src':'/static/imgs/result/弹窗二维码@2x.png','id':152},
          {'src':'/static/imgs/result/文案：C罗@2x.png','id':153},
          {'src':'/static/imgs/result/氛围@2x.png','id':154},
          {'src':'/static/imgs/result/禁止播放态@2x.png','id':155},
          {'src':'/static/imgs/result/精准预测@2x.png','id':156},
          {'src':'/static/imgs/result/背景@2x.png','id':157},
          {'src':'/static/imgs/result/音乐@2x.png','id':158},
          {'src':'/static/imgs/result/hrds.png','id':159},
          {'src':'/static/imgs/result/mbp@2x.png','id':160},
          {'src':'/static/imgs/result/ms3@2x.png','id':161},
          {'src':'/static/imgs/result/nme@2x.png','id':162},
          {'src':'/static/imgs/result/nws@2x.png','id':163},
          {'src':'/static/imgs/result/拉莫斯@2x.png','id':164},
          {'src':'/static/imgs/result/阿扎尔@2x.png','id':165},
          {'src':'/static/imgs/result/马塞洛@2x.png','id':166},
          {'src':'/static/video/video3.gif','id':167},
          {'src':'/static/video/足球准备.mp3','id':168},
          {'src':'/static/video/高清射门.MP3','id':169},
          {'src':'/static/video/shemen.MP3','id':170},
          {'src':'/static/imgs/guiji/F2.png','id':171},
          {'src':'/static/imgs/guiji/F3.png','id':172},
          {'src':'/static/imgs/guiji/F4.png','id':173},
          {'src':'/static/imgs/guiji/F5.png','id':174},
          {'src':'/static/imgs/guiji/F6.png','id':175},
          {'src':'/static/imgs/guiji/F7.png','id':176},
          {'src':'/static/imgs/guiji/G1.png','id':177},
          {'src':'/static/imgs/guiji/G2.png','id':178},
          {'src':'/static/imgs/guiji/G3.png','id':179},
          {'src':'/static/imgs/guiji/G4.png','id':180},
          {'src':'/static/imgs/guiji/G5.png','id':181},
          {'src':'/static/imgs/guiji/G6.png','id':182},
          {'src':'/static/imgs/guiji/G7.png','id':183},
          {'src':'/static/FZLTHJW.TTF','id':184},
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
        animation: rotate 1s linear infinite;
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
