<template>
    <div class="choose-character">
       <div class="your-name" :style="{background:`url(${bg_url})`}" @click="showInput">
         <input type="text" v-model="user_name" class="txt" v-show="show_input">
       </div>
    </div>
</template>

<script>
    export default {
        name: "Character",
      data(){
          return {
            bg_url:'/static/imgs/输入姓名@2x.png',
            user_name:'',
            show_input:false
          }
      },
      methods:{
        showInput(){
            this.bg_url='/static/imgs/输入姓名@2x_1.png'
            this.show_input=true
        }
      }
    }
</script>

<style scoped lang="scss">
    .choose-character{
      .your-name{
        width: 182px;
        height: 59px;
        position: absolute;
        top:16px;
        margin: auto;
        left:0;
        right: 0;
        .txt{
          width: 140px;
          height: 28px;
          margin-left:20px;
          margin-top:12px;
          padding: 0 12px;
          box-sizing: border-box;
        }
      }
    }
</style>
