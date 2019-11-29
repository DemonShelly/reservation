<template>
  <div class="imgFull">
    <div class="box">
      <div class="boxContent">
        <div class="boxTitle">預約時段</div>
        <div class="slash">＼＼＼</div>
        <div class="reserveInfo">
          <div><span>姓名</span><input type="text" v-model='customerInfo.name'></div>
          <div><span>電話</span><input type="text" v-model='customerInfo.tel'></div>
          <div><span>預約起迄</span>
          <div class="checkDiv"><input type="text" class='timeCheck' readonly disabled :value="this.$store.state.reservation.checkIn">-
          <input type="text" class='timeCheck' readonly disabled :value="this.$store.state.reservation.checkOut"></div>
        </div>
        </div>
   </div>
   <div class="priceInfo">
       <div><span>平日時段</span><span>{{this.$store.state.reservation.normalDay}}夜</span></div>
       <div><span>假日時段</span><span>{{this.$store.state.reservation.holiday}}夜</span></div>
   </div>
   <div class="totalContent">
    <div class="totalPrice">= &nbsp;&nbsp;NT.{{this.$store.state.reservation.totalPrice}}</div>
    <div class="btnCommit">
      <button class="cancel" @click='goBack'>取消</button>
      <button class="submit" @click='reserve'>確定預約</button>
    </div>
   </div>

    </div>
  </div>
</template>

<script>
  export default{
    name:'validate',
    data() {
      return{
        customerInfo: {
          name:'',
          tel:'',
          date:this.$store.state.reservation.daysArr
        }
      }
    },
    methods: {
      goBack(){
        this.$router.back()
      },
      reserve(){
        if(this.customerInfo.name==''||this.customerInfo.tele==''){
          alert('請輸入姓名及聯絡電話')
          return
        }
        

        this.axios.post(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${this.$store.getters.infoOb.room[0].id}`,
          this.customerInfo,
          this.$store.state.config)
          .then((response)=>{
            console.log(response)
            this.$router.push({name:'success'})
          }).catch((error)=>{
            console.log(error)
            this.$router.push({name:'error'})
          })
        
        console.log(this.customerInfo)
      }
    },
    mounted(){
      // console.log(this.$store.state.reservation.checkIn)
    }
  }
</script>
<style>
	.imgFull{
		align-items: center;
	}
	.box{
		position: relative;
		width: 423px;
		height: 500px;
		background-color: #ffffff;
	}
	.boxContent{
		padding:27px 42px 15px 42px;

	}
	.boxTitle{
		font-size: 24px;
		color: #000000;
		letter-spacing: 2.51px;
		/*text-align: center;*/
		/*margin-bottom:12px; */
	}
	.slash{
		font-size: 30px;
		letter-spacing: -10px;
		transform:scaleY(0.4);
		font-weight: 200;
		margin-left: -7px;	
	}
	.reserveInfo{
		margin-top: 29px;
		padding-left: 3px;
	}
	.reserveInfo>div{
		display: flex;
		justify-content: space-between;
		margin-bottom: 15px;
		font-size: 14px;
		color: #000000;
		letter-spacing: 1.46px;
		text-align: center;
		align-items: center;
	}
	.reserveInfo input{
		border: 1px solid #C9C9C9;
		border-radius: 5px;
		width: 243px;
		height: 32px;
		font-size: 12px;
		color: #000000;
		letter-spacing: 1.25px;
		text-align: center;
	}
	.checkDiv{
		width: 243px;
		display: flex;
		justify-content: space-between;
		vertical-align: middle;
		line-height: 32px;
	}
	.timeCheck{
		width: 91px !important;
	}
	.priceInfo{
		width: 100%;
		height:69px;
		background: #EDEDED;
    padding:15px 42px;
		box-sizing: border-box;
		font-size: 12px;
		color: #6D7278;
		letter-spacing: 1.25px;
		text-align: right;


	}
	.priceInfo>div{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.totalContent{

		padding:8px 42px;
	}
	.totalPrice{
    font-size: 26px;
		color: #FF5C5C;
		letter-spacing: 2.72px;
		text-align: right;
	}
	.btnCommit{
		display: flex;
		justify-content: space-between;
		margin-top: 25px;
	}
	.cancel{
		width: 78px;
		height:37px;
		background: #D8D8D8;
		font-size: 14px;
		color: #6D7278;
		letter-spacing: 1.46px;
	}
	.submit{
		width: 107px;
		height: 37px;
		background: #484848;
		font-size: 14px;
		color: #FFFFFF;
		letter-spacing: 1.46px;
}
</style>

