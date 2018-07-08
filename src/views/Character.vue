<template>
    <div class="choose-character">
       <div class="your-name" :style="{backgroundImage:`url(${bg_url})`}" @click="showInput">
         <input type="text" v-model="params.user_name" class="txt" v-if="show_input" @blur="lostFocus" autofocus="autofocus" >
       </div>
      <img :src="player_url" alt="player" class="player-attack animated zoomIn" onclick="return false;" v-show="is_attack">
      <img  alt="player" class="player-attack" onclick="return false;" v-show="!is_attack">
      <div class="arrows">
        <img src="/static/imgs/character/l-arrow@2x.png" alt="左箭头" class="l-arrow" @click="chooseAttack">
        <img src="/static/imgs/character/r-arrow@2x.png" alt="右箭头" class="r-arrow" @click="chooseDefence">
      </div>
      <div class="stage-wrapper">
        <img src="/static/imgs/character/stage@2x.png" alt="stage" class="stage" onclick="return false;">
      </div>
       <div class="type-btn">
         <img :src="btn_url" class="btn-img" onclick="return false;">
         <div class="attack-txt" @click="chooseAttack"></div>
         <div class="defence-txt" @click="chooseDefence"></div>
       </div>
      <img src="/static/imgs/character/enter-btn@2x.png" class="enter-btn" @click="toNext">
    </div>
</template>

<script>
    export default {
        name: "Character",
      data(){
          return {
            params:{
              user_name:'',
              type:1
            },
            bg_url:'/static/imgs/输入姓名@2x.png',
            show_input:false,
            btn_url:'/static/imgs/character/type-chose@2x.png',
            player_url:'/static/imgs/群組 1@2x_1.png',
            is_attack:true
          }
      },
      methods:{
        showInput(){
            this.bg_url='/static/imgs/输入姓名@2x_1.png'
            this.show_input=true
        },
        lostFocus(){
          console.log('ccc')
          if(this.params.user_name===''){
            this.show_input=false
            this.bg_url='/static/imgs/输入姓名@2x.png'
          }
        },
        chooseAttack(){
          this.btn_url='/static/imgs/character/type-chose@2x.png'
          this.params.type=1
          this.is_attack=true
        },
        chooseDefence(){
          this.btn_url='/static/imgs/character/type-chose2@2x.png'
          this.params.type=2
          this.is_attack=false
        },
        toNext(){
          /*进入下一页*/
          if(this.params.type==1 && this.params.user_name!==''){
            this.$router.push({name:'Question1',query:{user_name:this.params.user_name}})
          }else{
            //this.$router.push({name:''})
          }
        }
      }
    }
</script>

<style scoped lang="scss">
    .choose-character{
      width: 100%;
      height: 100%;
      background: url('/static/imgs/character/dir-line@2x.png') no-repeat center 74px;
      .your-name{
        width: 182px;
        height: 59px;
        position: absolute;
        top:16px;
        margin: auto;
        left:0;
        right: 0;
        background-size: contain;
        .txt{
          width: 140px;
          height: 30px;
          margin-left:22px;
          margin-top:14px;
          padding: 0 12px;
          box-sizing: border-box;
          border: none;
          font-size: 20px;
          line-height: 30px;
        }
        input:focus { outline: none;background: #fff;border:none;}
      }
      .player-attack{
        width: 297px;
        height: 360px;
        display: block;
        position: absolute;
        margin: auto;
        top:89px;
        left:40px;
        right: 0;
        z-index: 1;
      }
      .arrows{
        width: 375px;
        height: 72px;
        display: flex;
        justify-content: space-between;
        position: absolute;
        top:190px;
        margin: auto;
        left:0;
        right: 0;
        z-index: 2;
        .l-arrow{
          width: 59px;
          height: 72px;
          margin-left: 12px;
        }
        .r-arrow{
          width: 61px;
          height: 68px;
          margin-right: 10px;
        }
      }
      .stage-wrapper{
        width: 375px;
        height: 83px;
        position: absolute;
        margin: auto;
        left:0;
        right: 0;
        top:387px;
        z-index: 0;
        .stage{
          display: block;
          margin-left: 58px;
          width: 263px;
          height: 83px;
        }
      }
      .type-btn{
        width: 375px;
        height: 68px;
        position: absolute;
        margin: auto;
        left:0;
        right: 0;
        top:462px;
        .btn-img{
          width: 255px;
          height: 68px;
          margin-left: 60px;
        }
        .attack-txt{
          width: 100px;
          height: 30px;
          position: absolute;
          top:19px;
          left:84px;
        }
        .defence-txt{
          width: 100px;
          height: 30px;
          position: absolute;
          left:195px;
          top:19px;
        }
      }
      .enter-btn{
        width: 184px;
        height: 69px;
        margin: auto;
        position: absolute;
        top:529px;
        left:0;
        right: 0;
      }
    }
</style>
