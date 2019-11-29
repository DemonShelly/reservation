<template>
  <div class="imgFull" v-if='getObImg' @click.self='goback'>
    <div class="imgBack" @click.self='goback'>
      <i id='prev' @click='prevImg'>&lt;</i>
      <div class="imgWrap" @click.self='goback'>
        <img :src="getObImg[imgIndexNow]" alt="">
      </div>
      <i id='next' @click='nextImg'>&gt;</i>
      <div class="imgInfo">
        <span class="imgName">{{getOb.name}}</span>
        <span class="imgIndex">{{imgIndexNow+1}}/3</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    name:'imgbox',
    data(){
      return{
        imgIndexNow:0,
      }
    },
    computed: {
      getOb(){
        return this.$store.getters.infoOb.room[0]
      },
      getObImg () {
        // console.log(this.$store.getters.infoOb.room[0].imageUrl)
        return this.$store.getters.infoOb.room[0].imageUrl
      },
      getIndex() {
        return this.$route.params.imgIndex;
      }
    },
    methods: {      
      prevImg(){
        if(this.imgIndexNow == 0){return}
        this.imgIndexNow -= 1
      },
      nextImg(){
        if(this.imgIndexNow == 2){return}
        this.imgIndexNow += 1
      },
      goback(){
        this.$router.back()
      }
    },
    mounted: function(){
      // console.log(this.$store.getters.infoOb.room[0])
      this.imgIndexNow = this.getIndex
    }
  }
</script>
<style>
.imgFull{
	position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;
	width: 100vw;
	height: 100vh;
	background-color: rgba(12,12,12,0.8);
	display: flex;
  justify-content: space-around;
}
.imgBack{
	width: 80%;
	height: 100%;
	display: flex;
  justify-content: space-around;
  align-items: center;
}
.imgWrap{
	width: 60%;
	height: 100%;
	display: flex;
  justify-content: space-around;
  align-items: center;
}
.imgWrap img{
	max-height: 75%;
	max-width: auto;
	position: relative;
	top:-35px;
	/*max-width: */
}
.imgInfo{
	color:#ffffff;
	letter-spacing: 1.7px;
	position: absolute;
	bottom: 60px;
	display: inline-block;
	/*width: 50%;*/
	vertical-align: middle;
}
.imgName{
  margin-right:30px;
	font-weight:400;
	font-size: 16px;
}
#prev,#next{
	all:unset;
	/*display: initial;*/
	font-size: 50px;
  color: white;
  /*margin: 0 -50px;*/
  font-weight: 100;
  transform: scaleX(0.5);
  cursor: pointer;
}
</style>