<template>
  <div id="app" v-if='getOb'>   
    <div class="logoBlack" @click='backTo'></div>
    <div class="imgContainer">
        <img class='imgList' v-for='(url,index) in getOb.imageUrl' :src="url" :key="index" @click.prevent="toImgBox(index)">
    </div>
  <div class="outerContainer">
  <div class="container">
    <div class='leftBar'>
      <div class="title">{{getOb.name}}</div>
      <div class='descriptionShort'>
        <li>房客人數限制：{{getDescriptionShort.GuestMin}}~{{getDescriptionShort.GuestMax}}人</li>
        <li>床型：{{getDescriptionShort.Bed[0]}}</li>
        <li>衛浴數量：{{getDescriptionShort[`Private-Bath`]}}間</li>
        <li>房間大小：{{getDescriptionShort.Footage}} 平方公尺</li>
      </div>
      <div class="description">
        {{getOb.description}}
      </div>

      <div class="br">﹨﹨﹨</div>
      <div class='checkTime'>
        <div class='checkItem'>
          <div class="item">Check In</div>
          <div class="item time">{{getOb.checkInAndOut.checkInEarly}}-{{getOb.checkInAndOut.checkInLate}}</div>
        </div>
        <div class="checkItem">
          <div class="item">Check Out</div>
          <div class="item time">{{getOb.checkInAndOut.checkOut}}</div>
        </div>
      </div>
      <div class="info">
        <span :class="{'noInfo': !getOb.amenities['Wi-Fi']}"><i id='wifi' ></i>Wifi</span>
        <span :class="{'noInfo': !getOb.amenities['Television']}"><i id='tele'></i>電話</span>
        <span :class="{'noInfo': !getOb.amenities['Great-View']}"><i id='view'></i>漂亮的視野</span>
        <span :class="{'noInfo': !getOb.amenities['Breakfast']}"><i id='breakfast'></i>早餐</span>
        <span :class="{'noInfo': !getOb.amenities['Air-Conditioner']}"><i id='aircon'></i>空調</span>
        <span :class="{'noInfo': getOb.amenities['Smoke-Free']}"><i id='noSmoke'></i>禁止吸煙</span>
        <span :class="{'noInfo': !getOb.amenities['Mini-Bar']}"><i id='miniBar'></i>Mini Bar</span>
        <span :class="{'noInfo': !getOb.amenities['Refrigerator']}"><i id='refri'></i>冰箱</span>
        <span :class="{'noInfo': !getOb.amenities['Child-Friendly']}"><i id='forChild'></i>適合兒童</span>
        <span :class="{'noInfo': !getOb.amenities['Room-Service']}"><i id='roomService'></i>Room Service</span>
        <span :class="{'noInfo': !getOb.amenities['Sofa']}"><i id='sofa'></i>沙發</span>
        <span :class="{'noInfo': !getOb.amenities['Pet-Friendly']}"><i id='pet'></i>寵物攜帶</span>
      </div>
    </div>
    <div class="price">
      <div class="normalDayPrice">NT.{{getOb.normalDayPrice}}</div>
      <div>平日(一～四)</div>	
      <div class="holidayPrice">NT.{{getOb.holidayPrice}}</div>
      <div>假日(六～日)</div>	
    </div>
    </div>
    <div class="calendar">
      <HotelDatePicker :startDate='tomorrow' :endDate='endDate' :disabledDates="getBooking" :enableCheckout="true" :key='getBookingLength' >
      </HotelDatePicker>
      <div class="reservation" @click='reservation'><span>預約時段</span></div>
    </div>
  </div>
    <router-view></router-view>
  </div>

</template>
<script>
	import HotelDatePicker from 'vue-hotel-datepicker'

  export default{
    name:'information',
    components: {
      HotelDatePicker
    },
    computed: {
      getBookingLength(){
        return this.$store.getters.infoOb.booking.length
      },
      getOb () {
        if (!this.$store.getters.infoOb) { return }
        // console.log(this.$store.getters.infoOb.room[0])
        return this.$store.getters.infoOb.room[0]
      },
      getDescriptionShort(){
        return this.getOb.descriptionShort
      },
      tomorrow(){   
        let td = new Date() 
        return new Date(td.getTime() + (1000 * 60 * 60 * 24))
      },
      endDate(){
        let td = new Date() 
        return new Date(td.getTime() + (1000 * 60 * 60 * 24 * 90))
      },
      getBooking(){
        let bookingArr=[]
        for(let i =0; i<this.$store.getters.infoOb.booking.length; i++){
          bookingArr.push(this.$store.getters.infoOb.booking[i].date)
        }
        console.log('getBooking:'+ bookingArr)
        return bookingArr
      }
    },
    methods: {
      backTo(){
        this.$router.push({name: 'home'})
      },
      toImgBox(index) {
        this.$router.push({name:'imgbox',params:{imgIndex : index}})
      },
      reservation(){
        if(this.$children[0].checkIn==null||this.$children[0].checkOut==null){
          alert('請先選擇日期')
          return
        }
        let cid = new Date(this.$children[0].checkIn)
        let cod = new Date(this.$children[0].checkOut)
        let days = (cod-cid)/(1000 * 60 * 60 * 24)
        let daysArr = []
        let holiday = 0;
        let normalDay = 0;

        for(let i = 0; i<days ; i++){
          let date = this.dateConvert(cid.getTime()+(1000*60*60*24)*i)
          daysArr.push(date)
          if(this.checkDay(date)==='holiday'){
            holiday += 1;
          }else{
            normalDay +=1;
          } 
        }
        
        let checkIn = this.dateConvert(cid)
        let checkOut = this.dateConvert(cod)
        let totalPrice = this.getOb.normalDayPrice*normalDay +this.getOb.holidayPrice*holiday
        this.$store.commit('putReservation',{
          checkIn,
          checkOut,
          daysArr,
          holiday,
          normalDay,
          totalPrice,
        })
        this.$router.push({name:'validate'})
      },
      dateConvert(millisecond){
        let dt = new Date(millisecond)
        let y = dt.getFullYear()
        let m = dt.getMonth()+1 < 10? '0'+String(dt.getMonth()+1) : dt.getMonth()+1
        let d = dt.getDate() < 10? '0'+String(dt.getDate()) : dt.getDate()
        let dateOrganize = `${y}-${m}-${d}`
        return dateOrganize
      },
      checkDay(date){
        let dt = new Date(date)
        // console.log(dt.getDay())
        if(dt.getDay()===5||dt.getDay()===6){
          return 'holiday'
        }
        else return 'normalDay'
      },
      
    },
    mounted(){
      let loader = this.$loading.show()
      setTimeout(() => {
        loader.hide()
      }, 1000)
      // console.log('thisRoom:'+this.$store.getters.infoOb.room[0])

    },
  
  }
</script>
<style>
*{
  margin:0;
  padding:0;
  font-family: NotoSansCJKtc-Light;
  font-size: 14px;
}
ul,li{
	list-style-type: none;
}
.logoBlack{
  cursor: pointer;
  position: absolute;
  left: 45px;
  top:32px;
  background: url(../assets/logo_block.svg) no-repeat center center;
  background-size: cover;
  width: 185px;
  height:60px;
  z-index:999;
}
.imgContainer{
		height:450px;
		width: 100vw;
		background-color: lightgrey;
		display: flex;
		flex-wrap:wrap;
		position: relative;
	}
	.imgList:nth-child(1){
		height:100%;
		width: 70%;
		left:0;
	}
	.imgList{
		position: absolute;
		height: 50%;
		width: 30%; 
		left: 70%;
	}
	.imgList:nth-child(2){
		top:0;
	}
	.imgList:nth-child(3){
		top:50%;
	}
  .outerContainer{
    position: relative;
    padding:47px 62px;
  }
	/*Left Container*/
	.container{
		width: 60%;
		position: relative;
		/*margin-top: 47px;*/
		/*left: 62px;*/
	}
	.leftBar{
		width: 490px;
	}

	.title{
		font-family: NotoSansCJKtc-Medium;
		font-size: 36px;
		color: #000000;
		letter-spacing: 3.76px;
		font-weight: 500;
	}
	.descriptionShort{
		font-size: 14px;
		color: #000000;
		letter-spacing: 1.46px;
		line-height: 30px;
		margin: 30px 0;
	}
	.description{
		font-size: 12px;
		color: #000000;
		letter-spacing: 1.25px;
		text-align: justify;
		line-height: 20px;
	}
	.br{
		letter-spacing: 1.5px;
		margin:30px 0;
	}
	.checkTime{
		position: relative;
		font-size: 14px;
		color: #000000;
		letter-spacing: 1.46px;
	}
	.checkItem{
		position: absolute;
		left: 50%;
	}
	.checkItem:nth-child(1){
		left: 0;
	}
	.time{
		font-size: 21px;
		letter-spacing: 2.19px;
	}

	/*price*/
	.price{
		position: absolute;
		right: 0;
		top:0;	
		font-size: 14px;
		color: #6D7278;
		letter-spacing: 1.46px;
		text-align: right;
		line-height: 30px;
		margin-top:13px;
	}
	.normalDayPrice{
		font-size: 30px;
		color: #000000;
		letter-spacing: 3.13px;
		font-weight: 300;
	}
	.holidayPrice{
		margin-top: 10px;
		font-size: 16px;
		color: #000000;
		letter-spacing: 1.67px;
	}

	/*information*/
	.info{
		width: 100%;
		height:230px;
		background: #F0F0F0;
		letter-spacing: 1.25px;
		margin: 130px 0;
		padding: 10px;
		box-sizing: border-box; 
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items:center;
		/*line-height: 25px;*/
	}
  .info>span{
    flex:0 0 32%;
    box-sizing: border-box; 
		font-size: 12px;
  }
  .noInfo{
    filter: opacity(0.3);
  }
	/*icon*/
	i{
		position: relative;
		margin-left: 20px;
		margin-right: 15px;
    display: inline-block;
    height: 20px;
    width: 20px;
    vertical-align: bottom;
	}
  #wifi{
    background: url(../assets/wifi.svg) center center no-repeat;
    background-size: cover;
  }
  #tele{
    background: url(../assets/phone.svg) center center no-repeat;
    background-size: cover;
  }
  #view{
    background: url(../assets/mountain-range.svg) center center no-repeat;
    background-size: cover;
  }
  #breakfast{
    background: url(../assets/breakfast.svg) center center no-repeat;  
    background-size: cover;                  
  }
  #aircon{
    background: url(../assets/breeze.svg) center center no-repeat;
    background-size: cover;
  }
  #noSmoke{
    background: url(../assets/no-smoke-symbol.svg) center center no-repeat;
    background-size: cover;
  }
  #miniBar{
    background: url(../assets/bar.svg) center center no-repeat;
    background-size: cover;
  }
  #refri{
    background: url(../assets/refIcon.svg) center center no-repeat;
    background-size: cover;
  }
  #forChild{
    background: url(../assets/crawling-baby-silhouette.svg) center center no-repeat;
    background-size: cover;
  }
  #roomService{
    background: url(../assets/room_service.svg) center center no-repeat;
                        background-size: cover;
  }
  #sofa{
    background: url(../assets/sofaIcon.svg) center center no-repeat;
                        background-size: cover;
  }
  #pet{
    background: url(../assets/dog.svg) center center no-repeat;
                        background-size: cover;
  }
  /*calendar*/
  .calendar{
    position: absolute;
    right: 40px;
    top:62px;
    width:380px;
    height: 400px;
    /*background-color: lightgrey; */
  }
  .reservation{
    width: 120px;
    height:50px;
    background: #575757;
    font-family: NotoSansCJKtc-DemiLight;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 1.67px;
    text-align: center;
    /*vertical-align: middle;*/
  }
  .reservation>span{
    /*vertical-align: middle;*/
    line-height: 50px;
    cursor: pointer;
  }
</style>