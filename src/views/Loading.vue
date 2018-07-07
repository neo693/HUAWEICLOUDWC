<template>
  <div class="loading">
    <img src="/static/imgs/球@2x.png" alt="足球" class="ball">
  </div>
</template>
<style lang="scss" scoped>
    .loading{
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
         top:243px;
        animation: rotate 3s linear infinite;
        transform-origin: 50% 50%;
      }
      @keyframes rotate{from{transform: rotate(0deg)}
        to{transform: rotate(359deg)}
      }
    }
</style>
