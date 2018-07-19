<template>
  <div class="result">
    <div class="wrapper" v-show="!show_video">
      <div class="logo">
        <img src="/static/imgs/result/logo@2x.png" class="logo-img">
        <span style="margin-left: 11px" class="logo-txt">
          华为云丨有技术 有未来 值得信赖
        </span>
      </div>

      <!-- <img src="/static/imgs/result/文案：C罗@2x.png" class="txt-wrapper"> -->
      <div class="txt-wrapper" v-show="!showPity">
        <div>
          <span class="name" >{{user_name}}</span>

        </div>
        <div>
          <span v-show="!showPity">{{p_index==4?'太厉害了，简直就是':p_index==5?'太厉害了，都可以和':p_index==1 || p_index==2 || p_index==3?'天哪!你的脚法已经和':p_index==10 || p_index==8?'太厉害了，都可以和':p_index==9 || p_index==7?'太厉害了，简直就是':''}}<span class="player-name">{{player_name}}</span>{{p_index==4?'附体':p_index==5?'争夺C位啦！':p_index==1 || p_index==2 || p_index==3?'不相上下了！':p_index==10 || p_index==8?'争夺C位啦！':p_index==9 || p_index==7?'附体':''}}</span>

        </div>
      </div>
      <div class="modi-wrapper" v-show="showPity">
        <div>
          <span   class="name">{{user_name}}</span>
        </div>
        <div>
           <span>
            你不走寻常路，再加把劲也能和<span class="player-name">魔笛</span>一样<br>创造奇迹!
          </span>
        </div>
      </div>
      <!--<img src="/static/imgs/result/氛围@2x.png" class="line">-->
      <img src="/static/imgs/result/hwcnb@2x.png" class="intro">
      <img src="/static/imgs/result/保存图片@2x.png" class="save" @click="savePic" onclick="return false">
      <img src="/static/imgs/result/不服再战@2x.png" class="btn-l" @click="reStart" onclick="return false">
      <img src="/static/imgs/result/xsmf@2x.png" class="btn-r" @click="go" onclick="return false">
      <img :src="player_url" class="player">
      <div v-if="ewmShow" class="ewm-wrap">
        <div>
          <img src="/static/imgs/result/ewmwrapper@2x.png" class="ewm" alt="">
          <img src="/static/imgs/result/close.png" class="close" alt="" @click="ewmShow=false">
          <img src="/static/imgs/result/1531655909.png" alt="" class="ewmm">
        </div>
      </div>
      <div class="share">
        <img :src="share_img_url" class="share-img">
      </div>
    </div>
    <!--<audio src="/static/video/高清射门.ogg" id="video_bgm" ref="video_bgm" autoplay></audio>-->
  </div>
</template>
<script>
  /*1=c罗 2=梅西 3=阿尔扎 4=姆巴佩 5=内马尔 6=遗憾 7=纳瓦斯 8=马塞洛 9=哈尔多松 10=拉莫斯*/
  import {mapState,mapActions} from 'vuex'

  export default {
    data(){
      return {
        player_url:'',
        user_name:'',
        player_name:'',
        player_url_arr:[
          {
            id:1,
            name:'C罗',
            url:'/static/imgs/result/cluo.png'
          },
          {
            id:2,
            name:'梅西',
            url:'/static/imgs/result/meixi.png'
          },
          {
            id:3,
            name:'阿扎尔',
            url:'/static/imgs/result/azhaer.png'
          },
          {
            id:4,
            name:'姆巴佩',
            url:'/static/imgs/result/mubapei.png'
          },
          {
            id:5,
            name:'内马尔',
            url:'/static/imgs/result/neimaer.png'
          },
          {
            id:6,
            name:'遗憾',
            url:'/static/imgs/result/莫德里奇@2x.png'
          },
          {
            id:7,
            name:'纳瓦斯',
            url:'/static/imgs/result/nawasi.png'
          },
          {
            id:8,
            name:'马塞洛',
            url:'/static/imgs/result/masailuo.png'
          },
          {
            id:9,
            name:'哈尔多松',
            url:'/static/imgs/result/haerduosong.png'
          },
          {
            id:10,
            name:'拉莫斯',
            url:'/static/imgs/result/lamosi.png'
          }
        ],
        show_video:false,
        ewmShow: false,
        showPity:false,
        share_img_url:'',
        showDefenceTxt:false,
        p_index:''
      }
    },
    computed:{
      ...mapState('common',['show_bg_music']),
    },
    methods:{
      ...mapActions('common',['palyMusic','pauseMusic']),
      init(){
        // this.$refs.video_bgm.play()
        setTimeout(()=>{
          this.show_video=false
        },4652)

        let obj=this.$route.query
        let arr=[obj.type,obj.question1,obj.question2,obj.question3]
        let player_index=this.handlerAnswer(arr)
        this.p_index=player_index
        //根据答案判断是哪位球星
        console.log(player_index)




         if(player_index!=6){
            this.player_url=this.player_url_arr[player_index-1].url
            this.player_name=this.player_url_arr[player_index-1].name
            this.user_name=this.$route.query.user_name
         }else{
          //失败的情况写这里
           this.player_url=this.player_url_arr[player_index-1].url
           this.player_name=this.player_url_arr[player_index-1].name
           this.user_name=this.$route.query.user_name
           this.showPity=true
         }
        /*给胡工传结果*/
        this.$http.get('/createImg',{params:{
              result:player_index,
              name:this.user_name,
          }}).then(res=>{
            console.log(res.data)
          this.share_img_url=res.data
        })
      },
      reStart(){
        this.$router.push({name:'Enter'})
      },
      go(){
        // 跳转华为链接
        // 打开二维码
        this.ewmShow = true
      },
      savePic(){
        // 保存图片
      },
      handlerAnswer(a){

                if(a[0]==1 && a[1]=='A' && a[2]=='A' && a[3]=='A'){
                  /*失败*/
                  return 6
                }else if(a[0]==1 && a[1]=='A' && a[2]=='A' && a[3]=='B'){
                  /*C罗*/
                  return 1
                }else if(a[0]==1 && a[1]=='A' && a[2]=='A' && a[3]=='C'){
                  /*C罗*/
                  return 1
                }else if(a[0]==1 && a[1]=='A' && a[2]=='B' && a[3]=='A'){
                  /*姆巴佩*/
                  return 4
                }else if(a[0]==1 && a[1]=='A' && a[2]=='B' && a[3]=='B'){
                  /*姆巴佩*/
                  return 4
                }else if(a[0]==1 && a[1]=='A' && a[2]=='B' && a[3]=='C'){
                  /*C罗*/
                  return 1
                }else if(a[0]==1 && a[1]=='A' && a[2]=='C' && a[3]=='A'){
                  /*内马尔*/
                  return 5
                }else if(a[0]==1 && a[1]=='A' && a[2]=='C' && a[3]=='B'){
                  /*C罗*/
                  return 1
                }else if(a[0]==1 && a[1]=='A' && a[2]=='C' && a[3]=='C'){
                  /*阿扎尔*/
                  return 3
                }else if(a[0]==1 && a[1]=='B' && a[2]=='A' && a[3]=='A'){
                  /*pity*/
                  return 6
                }else if(a[0]==1 && a[1]=='B' && a[2]=='A' && a[3]=='B'){
                  /*梅西*/
                  return 2
                }else if(a[0]==1 && a[1]=='B' && a[2]=='A' && a[3]=='C'){
                  /*阿扎尔*/
                  return 3
                }else if(a[0]==1 && a[1]=='B' && a[2]=='B' && a[3]=='A'){
                  /*姆巴佩*/
                  return 4
                }else if(a[0]==1 && a[1]=='B' && a[2]=='B' && a[3]=='B'){
                  /*姆巴佩*/
                  return 4
                }else if(a[0]==1 && a[1]=='B' && a[2]=='B' && a[3]=='C'){
                  /*阿扎尔*/
                  return 3
                }else if(a[0]==1 && a[1]=='B' && a[2]=='C' && a[3]=='A'){
                  /*内马尔*/
                  return 5
                }else if(a[0]==1 && a[1]=='B' && a[2]=='C' && a[3]=='B'){
                  /*梅西*/
                  return 2
                }else if(a[0]==1 && a[1]=='B' && a[2]=='C' && a[3]=='C'){
                  /*内马尔*/
                  return 5
                }else if(a[0]==1 && a[1]=='C' && a[2]=='A' && a[3]=='A'){
                  /*PITY*/
                  return 6
                }else if(a[0]==1 && a[1]=='C' && a[2]=='A' && a[3]=='B'){
                  /*PITY*/
                  return 6
                }else if(a[0]==1 && a[1]=='C' && a[2]=='A' && a[3]=='C'){
                  /*阿尔扎*/
                  return 3
                }else if(a[0]==1 && a[1]=='C' && a[2]=='B' && a[3]=='A'){
                  /*姆巴佩*/
                  return 4
                }else if(a[0]==1 && a[1]=='C' && a[2]=='B' && a[3]=='B'){
                  /*梅西*/
                  return 2
                }else if(a[0]==1 && a[1]=='C' && a[2]=='B' && a[3]=='C'){
                  /*阿尔扎*/
                  return 3
                }else if(a[0]==1 && a[1]=='C' && a[2]=='C' && a[3]=='A'){
                  /*PITY*/
                  return 6
                }else if(a[0]==1 && a[1]=='C' && a[2]=='C' && a[3]=='B'){
                  /*梅西*/
                  return 2
                }else if(a[0]==1 && a[1]=='C' && a[2]=='C' && a[3]=='C'){
                  /*内马尔*/
                  return 5
                }else if(a[0]==2 && a[1]=='A' && a[2]=='A' && a[3]=='A'){
                  /*纳瓦斯*/
                  return 7
                }else if(a[0]==2 && a[1]=='A' && a[2]=='A' && a[3]=='B'){
                  /*纳瓦斯*/
                  return 7
                }else if(a[0]==2 && a[1]=='A' && a[2]=='A' && a[3]=='C'){
                  /*马塞洛*/
                  return 8
                }else if(a[0]==2 && a[1]=='A' && a[2]=='B' && a[3]=='A'){
                  /*哈尔多松*/
                  return 9
                }else if(a[0]==2 && a[1]=='A' && a[2]=='B' && a[3]=='B'){
                  /*哈尔多松*/
                  return 9
                }else if(a[0]==2 && a[1]=='A' && a[2]=='B' && a[3]=='C'){
                  /*纳瓦斯*/
                  return 7
                }else if(a[0]==2 && a[1]=='A' && a[2]=='C' && a[3]=='A'){
                  /*纳瓦斯*/
                  return 7
                }else if(a[0]==2 && a[1]=='A' && a[2]=='C' && a[3]=='B'){
                  /*纳瓦斯*/
                  return 7
                }else if(a[0]==2 && a[1]=='A' && a[2]=='C' && a[3]=='C'){
                  /*马塞洛*/
                  return 8
                }else if(a[0]==2 && a[1]=='B' && a[2]=='A' && a[3]=='A'){
                  /*PITY*/
                  return 6
                }else if(a[0]==2 && a[1]=='B' && a[2]=='A' && a[3]=='B'){
                  /*PITY*/
                  return 6
                }else if(a[0]==2 && a[1]=='B' && a[2]=='A' && a[3]=='C'){
                  /*马塞洛*/
                  return 8
                }else if(a[0]==2 && a[1]=='B' && a[2]=='B' && a[3]=='A'){
                  /*哈尔多松*/
                  return 9
                }else if(a[0]==2 && a[1]=='B' && a[2]=='B' && a[3]=='B'){
                  /*PITY*/
                  return 6
                }else if(a[0]==2 && a[1]=='B' && a[2]=='B' && a[3]=='C'){
                  /*哈尔多松*/
                  return 9
                }else if(a[0]==2 && a[1]=='B' && a[2]=='C' && a[3]=='A'){
                  /*PITY*/
                  return 6
                }else if(a[0]==2 && a[1]=='B' && a[2]=='C' && a[3]=='B'){
                  /*PITY*/
                  return 6
                }else if(a[0]==2 && a[1]=='B' && a[2]=='C' && a[3]=='C'){
                  /*PITY*/
                  return 6
                }else if(a[0]==2 && a[1]=='C' && a[2]=='A' && a[3]=='A'){
                  /*PITY*/
                  return 6
                }else if(a[0]==2 && a[1]=='C' && a[2]=='A' && a[3]=='B'){
                  /*拉莫斯*/
                  return 10
                }else if(a[0]==2 && a[1]=='C' && a[2]=='A' && a[3]=='C'){
                  /*拉莫斯*/
                  return 10
                }else if(a[0]==2 && a[1]=='C' && a[2]=='B' && a[3]=='A'){
                  /*拉莫斯*/
                  return 10
                }else if(a[0]==2 && a[1]=='C' && a[2]=='B' && a[3]=='B'){
                  /*哈尔多松*/
                  return 9
                }else if(a[0]==2 && a[1]=='C' && a[2]=='B' && a[3]=='C'){
                  /*马塞洛*/
                  return 8
                }else if(a[0]==2 && a[1]=='C' && a[2]=='C' && a[3]=='A'){
                  /*拉莫斯*/
                  return 10
                }else if(a[0]==2 && a[1]=='C' && a[2]=='C' && a[3]=='B'){
                  /*拉莫斯*/
                  return 10
                }else if(a[0]==2 && a[1]=='C' && a[2]=='C' && a[3]=='C'){
                  /*马塞洛*/
                  return 8
                }






      }
    },
    mounted(){
      this.init()

      if(this.show_bg_music){
        this.palyMusic()
      } else {
        this.pauseMusic()
      }

      document.querySelector('#video_bg2').pause()

    }

  }
</script>
<style lang="scss" scoped>
      .result{
        width: 100%;
        height: 100%;
        overflow: hidden;
        background: url('/static/imgs/result/氛围@2x.png') no-repeat center 127px, url("/static/imgs/result/背景@2x.png") no-repeat center -520px;
        background-size: 136%, 400%;
        position: relative;
        .wrapper{
          width: 375px;
          height: 100%;
          overflow: hidden;
          position: absolute;
          margin: auto;
          left:0;
          right: 0;
          top:0;
          .logo{
            position: relative;
            left:15px;
            top:10px;
            width: 100%;
            height: 45px;
            .logo-img{
              width: 44px;
              height: 45px;
            }
            .logo-txt{
              font-family: 'originFont';
            }
          }
          .txt-wrapper{
            position: absolute;
            left:8px;
            top:72px;
            width: 348px;
            height: 87px;
            padding-left:30px;
            padding-top: 20px;
            box-sizing: border-box;
            background: url('/static/imgs/result/文案：C罗@2x.png') no-repeat center;
            background-size:348px 87px;
            font-size: 16px;
            .name{
              color:#BF2626;
              font-size:24px;
              font-style: italic;

            }
            .player-name{
              color:#BF2626;
              font-size:24px;
              font-style: italic;
              line-height: 10px;
            }
            .pity{
              font-size: 16px;
              padding-left: 10px;
              line-height: 18px;
            }
          }
          .modi-wrapper{
            position: absolute;
            left:8px;
            top:72px;
            width: 348px;
            height: 117px;
            padding-left:28px;
            padding-top: 25px;
            box-sizing: border-box;
            background: url('/static/imgs/result/moditext.png') no-repeat center;
            background-size:348px 117px;
            font-size: 16px;
            .name{
              color:#BF2626;
              font-size:24px;
              font-style: italic;

            }
            .player-name{
              color:#BF2626;
              font-size:24px;
              font-style: italic;
              line-height: 10px;
            }
          }
          .line{
            position: absolute;
            top:59px;
            left: -70px;
          }
          .intro{
            z-index: 2;
            position: absolute;
            bottom: 67px;
            left:24px;
            width: 312px;
            height: 108px;
          }
          .save{
            z-index: 2;
            position: absolute;
            bottom: 72px;
            left:323px;
            width: 30px;
            height: 101px;
          }
          .btn-l{
            z-index: 2;
            position: absolute;
            bottom: 14px;
            left:54px;
            width: 117px;
            height: 47px;
          }
          .btn-r{
            z-index: 2;
            position: absolute;
            bottom: 14px;
            left:210px;
            width: 117px;
            height: 47px;
          }
          .player{
            width: 375px;
            position: absolute;
            margin: auto;
            left:0;
            right: 0;
            top:0;
          }

        }
        .video{
          width: 100%;
          height: 100%;
        }
        .ewm-wrap {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.57);
          z-index: 99;
          > div {
            width: 168px;
            height: 179px;
            position: absolute;
            bottom: 82px;
            left: 114px;
            .ewm {
              width: 150px;
              height: 150px;
              position: absolute;
              margin: auto;
              left:0;
              right: 0;
              top:0;
              bottom: 0;
            }
            .ewmm{
              position: absolute;
              margin: auto;
              top:0;
              left:0;
              right: 0;
              bottom: 0;
              width: 125px;
              height: 125px;
            }
            .close {
              width: 26px;
              height: 26px;
              position: absolute;
              right: 0;
              top: 0;
            }
          }
        }
        .share{
          width: 375px;
          height: 667px;
          position: absolute;
          margin: auto;
          left:0;
          right:0;
          bottom: 70px;
          opacity: 0;
          z-index: 10;
          .share-img{
            width: 375px;
            height: 667px;
          }
        }
      }
     /*@media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3){
      .result .player{
         width: 375px;
         position: absolute;
         margin: auto;
         left:0;
         right: 0;
         bottom:-1000px;
       }
      }*/
</style>
