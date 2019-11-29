<template>
  <div class="imgFull">
    <div class="boxErr">
      <div class="textSuc">預約失敗</div>
      <div class="slash">＼＼＼</div>
      <div class="textErr">預約時間已被人預定</div>
      <button class="btnSuc" @click='goBack'>返回</button>
    </div>
  </div>
</template>
<script>
  export default{
    name:'error',
    methods:{
      goBack(){
        this.$router.push('/infomation')
      }
    }
  }
</script>
<style>
  .boxErr{
    width: 423px;
    height:233px;
    background: #FFFFFF;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    padding:35px;
    box-sizing: border-box;
    position: relative;
  }
  .textErr{
    margin-top: 10px;
  }
</style>