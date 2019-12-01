<template>
  <div>
      <transition-group name='roomImg' tag='ul'>
        <li class='containImg' v-for="(item,index) in getPreImg" :key="index" v-show='currentIndex==index'>
          <div class="filter"></div>
          <img class='topImg' :src="item.imageUrl">
        </li>
      </transition-group>
    <div id='top'>
      <div id='logo'>
        <!-- <div id='bottomLogo'></div> -->
      </div>
      <!-- <div id='MainLogo'>
        <div id='logoName'>
          <span class='top'>White</span>
          <span class='bottom'>Space</span>
        </div>
      </div> -->
      <div id='info'>
        <div class='socialMedia'>
          <i class="igIcon"></i>
          <i class="fbIcon"></i>
        </div>
        <div class="vl"></div>
        <div class='contactInfo'>
          <div><i class="telIcon"></i>02-17264937</div>
          <div><i class="emailIcon"></i>whitespace@whitespace.com</div>
          <div><i class="addressIcon"></i>台北市羅斯福路一段31號</div>
        </div>
      </div>
       </div>
      
      <div class='roomAll'>
        <div class='roomEach' v-for='item in getRooms' :key="item.id">
          <div class='roomImg'>
            <img :src="item.imageUrl" alt="">
          </div>
          <a href="#" @click.prevent="changeInfoPage(item.name)">
          <div class='roomBottom' @mouseover='bottomShowIndex = item.id' @mouseleave='bottomShowIndex = null'>
            <span class='roomName' v-show='bottomShowIndex !== item.id'>{{item.name}}</span>
            <transition>
            <div class='roomHover' v-show='bottomShowIndex == item.id'>
            
              <span class='hoverName'>{{item.name}}</span>
              <span class="style">{{item.style}}</span>
              <span class="normalDay">
                <span class="normalDayPrice">NT.{{item.normalDayPrice}}</span>&nbsp;&nbsp;平日</span>
              <span class="holidayPrice"><span>NT.</span>{{item.holidayPrice}}<span>&nbsp;&nbsp;假日</span></span>
            
            </div>
            </transition>
          </div>
          </a>
        <!-- </router-link> -->
          
        </div>
      </div>
  </div>
</template>

<script>
  export default {
  name: 'home',
  data(){
    return{
      bottomShowIndex: null,
      currentIndex: 0,
      loader : this.$loading.show()
    }
  },
  computed: {
    getTotalIndex(){
      return this.$store.state.preImgArr.length
    },
    getRooms () {
      return this.$store.state.allRooms.items
    },
    getPreImg () {
      return this.$store.state.preImgArr
    }
    
  },
  methods: {
    changeInfoPage(roomName){
      this.$store.commit('enterInfo',roomName)
      // this.$router.push('information')
      this.$router.push({ name: 'information'})
    }
  },
  mounted: function () {
    var self = this;
    setInterval(function () {
      self.currentIndex ++;
      // console.log(self.currentIndex);
      if (self.currentIndex > self.getTotalIndex-1) {
            self.currentIndex = 0;
        }
    }, 6000);
    setTimeout(() => {
        this.loader.hide()
    },2000)
  }
 }  



</script>
<style scoped>
	*{
  margin:0;
  padding:0;
  font-family: NotoSansCJKtc-Light;

  
}
.topBar{
  position:fixed;
  width:100%;
  height:50px;
  line-height:50px;
  top:0;
  background-color:white;
  z-index:100;
  transform-origin:top;
  transition:transform 0.5s ease;
}
.bar-enter-active,.bar-leave-active{
  transform:scaleY(1);
}
.bar-enter,.bar-leave-to{
  transform:scaleY(0);
}
.containImg{
	position: absolute;
	width:100%;
  height:660px;
  overflow: hidden;
}
.filter{
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000;
  filter: opacity(0.1);

}
.topImg{
	background-size:cover;
	/*height:660px;*/
	width: 100%;
	margin-top: -180px;

}
#top{
  width:100%;
  height:660px;  position:relative;
  
}
#logo{
  position:absolute;
  width:148px;
  height:148px;
  /*background: repeating-linear-gradient(45deg, white 9px, white 10px, transparent 0, transparent 15px); */
  left:50%;
  top:155px;
  transform: translate(-50%,0%);
  background: url(../assets/logo_white.svg) no-repeat center center;
  background-size: cover;
  width: 165px;
  height: 165px;
}
#logoName{
  font-family: NotoSansCJKtc-Medium;
  
  display:flex;
  flex-direction:column;
  left:27px;
  top:26px;
  position:relative;
}
#logoName>span{
  font-size: 31px;
  color: #FFFFFF;
  letter-spacing: 3.24px;
  line-height: 44px;
}
#info{
  position:absolute;
  color:white;
  top:368px;
  left:50%;
  transform:translate(-50%, 0%);
  width: 28%;
  display: flex;
  justify-content: space-between;
}
.socialMedia{
  display: block;
  margin:auto 0;
}
.contactInfo{
}
.vl{
  border-left: 1px solid #FFFFFF;
  /*height: 10;*/
}
.igIcon {
  display: inline-block;
  width: 21px;
  height: 21px;
  background: url(../assets/instagram-brands.svg) no-repeat center center;
  margin-right: 7px;
}
.fbIcon{
  display: inline-block;
  width: 21px;
  height: 21px;
  background: url(../assets/facebook-square-brands.svg) no-repeat center center;

}
.telIcon{
  display: inline-block;
  width: 21px;
  height: 21px;
  background: url(../assets/phone-alt-solid.svg) no-repeat center center;
  margin-right: 20px;
}
.emailIcon{
  display: inline-block;
  width: 21px;
  height: 21px;
  background: url(../assets/envelope-solid.svg) no-repeat center center;
  margin-right: 20px;
}
.addressIcon{
  display: inline-block;
  width: 21px;
  height: 21px;
  background: url(../assets/home-solid.svg) no-repeat center center;
  margin-right: 20px;
}

.contactInfo>div{
  margin-top: 8px;
  margin-bottom:14px;
}


.roomAll{
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  width:948px;
  z-index:99;
  position:absolute;
  top:553px;
  left:50%;
  transform:translate(-50%, 0%); 
}
.roomEach:nth-child(3n){
  margin-right:0px;
}
.roomEach{
  width:300px;
  height:350px;
  background: #F7F7F7;
  box-shadow: 2px 2px 9px 0 rgba(0,0,0,0.18);
  margin-right:23px;
  margin-bottom:58px;

}

.roomBottom{
  font-family: 'NotoSansCJKtc-Light';
  font-size: 14px;
  color: #000000;
  height:20%;
  width:100%;
  position: relative;
  z-index: 50;
  background-color: #F7F7F7;
  transition: all .3s ease-in-out;
}
.roomName{
  position: absolute;
  letter-spacing: 1.46px;
  line-height:20px;
  margin-left:30px;
  top:50%;
  transform: translate(0%,-50%);

}
.roomImg{
  height:80%;
  width: 100%;
}
.roomImg>img{
  width:300px;
  height:280px;
  background-size:cover;
}

.roomBottom:hover{
  height: 132px;
  margin-top:-64px;
}

.roomHover{
  position: relative;
  height: 70px;
  width: 300px;
  padding-top:21px;
  padding-left: 30px;
  padding-bottom: 17px;
  padding-right: 24px;
}


.hoverName{
  position: absolute;
  top:21px;
  font-family: NotoSansCJKtc-Light;
	font-size: 14px;
	color: #000000;
	letter-spacing: 1.46px;
}
.style{
	position: absolute;
  top:43px;
  font-size: 12px;
  color: #6D7278;
  letter-spacing: 1.25px;
}
.normalDay{
	position: absolute;
	bottom: 0;
	font-size: 12px;
	letter-spacing: 1.25px;
	line-height: 18px;
}
.normalDayPrice{
	font-size: 21px;
	color: #000000;
	letter-spacing: 2.19px;
	line-height: 31px;
}

.holidayPrice{
	position: absolute;
	bottom:0;
	left: 190px;
	font-size: 12px;
	color: #6D7278;
	letter-spacing: 1.25px;
	line-height: 18px;
}

/*.v-leave { opacity: 1; }
.v-leave-active { transition: opacity .1s }
.v-leave-to { opacity: 0; }*/
.v-enter { opacity: 0; }
.v-enter-active  { transition: opacity .8s ease-in-out }
.v-enter-to { opacity: 1; }

/*.roomImg-enter-to, .roomImg-leave{
		opacity: 1 ;
}*/
.roomImg-leave-active{
    transition: opacity 2s;
}
.roomImg-enter-active{
    transition: opacity 3s;
}
.roomImg-enter, .roomImg-leave-to{
    opacity: 0;
}

</style>