<template>
  <div class="imgFull">
    <div class="boxSucccess">
      <div class="textSuc">預約成功</div>
      <div class="slash">＼＼＼</div>
      <div class="imgSuc">
        <img src="../assets/tick-inside-circle.svg" alt="">
      </div>
      <button class="btnSuc" @click='goBack'>回頁面</button>
    </div>
  </div>
</template>
<script>
  export default{
    name:'success',
    methods:{
      goBack(){
        this.$router.push({name: 'information'})
      }
    }
  }
</script>
<style>
  .boxSucccess{
    width: 423px;
    height:248px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    padding:35px;
    box-sizing: border-box;
    position: relative;

  }
  .textSuc{
    font-size: 24px;
color: #000000;
letter-spacing: 2.51px;
font-weight: 500;

  }
  .imgSuc{
    width: 60px;
    height: 60px;
    margin:0 auto;
  }
  .imgSuc>img{
    width: 100%;
    height:100%;
  }
  .btnSuc{
    width: 85px;
    height:37px;
    background: #484848;
    font-size: 14px;
color: #FFFFFF;
letter-spacing: 1.46px;
/*text-align: right;*/
position: absolute;
bottom: 32px;
right:43px;

  }
</style>
