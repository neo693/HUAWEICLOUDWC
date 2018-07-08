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
          {"src": "/static/imgs/进度@2x.png", "id": "5"}
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
