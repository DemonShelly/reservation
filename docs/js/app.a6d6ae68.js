(function(t){function e(e){for(var n,i,r=e[0],c=e[1],l=e[2],u=0,d=[];u<r.length;u++)i=r[u],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);m&&m(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,r=1;r<o.length;r++){var c=o[r];0!==s[c]&&(n=!1)}n&&(a.splice(e--,1),t=i(i.s=o[0]))}return t}var n={},s={app:0},a=[];function i(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=n,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var m=c;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"1b68":function(t,e,o){"use strict";var n=o("b9f5"),s=o.n(n);s.a},"30a7":function(t,e,o){"use strict";var n=o("f52a"),s=o.n(n);s.a},"4f36":function(t,e,o){t.exports=o.p+"img/tick-inside-circle.5e18caa0.svg"},"56d7":function(t,e,o){"use strict";o.r(e);o("4de4"),o("4e82"),o("b0c0"),o("d3b7"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),s=o("8c4f"),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("transition-group",{attrs:{name:"roomImg",tag:"ul"}},t._l(t.getPreImg,(function(e,n){return o("li",{directives:[{name:"show",rawName:"v-show",value:t.currentIndex==n,expression:"currentIndex==index"}],key:n,staticClass:"containImg"},[o("div",{staticClass:"filter"}),o("img",{staticClass:"topImg",attrs:{src:e.imageUrl}})])})),0),t._m(0),o("div",{staticClass:"roomAll"},t._l(t.getRooms,(function(e){return o("div",{key:e.id,staticClass:"roomEach"},[o("div",{staticClass:"roomImg"},[o("img",{attrs:{src:e.imageUrl,alt:""}})]),o("a",{attrs:{href:"#"},on:{click:function(o){return o.preventDefault(),t.changeInfoPage(e.name)}}},[o("div",{staticClass:"roomBottom",on:{mouseover:function(o){t.bottomShowIndex=e.id},mouseleave:function(e){t.bottomShowIndex=null}}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.bottomShowIndex!==e.id,expression:"bottomShowIndex !== item.id"}],staticClass:"roomName"},[t._v(t._s(e.name))]),o("transition",[o("div",{directives:[{name:"show",rawName:"v-show",value:t.bottomShowIndex==e.id,expression:"bottomShowIndex == item.id"}],staticClass:"roomHover"},[o("span",{staticClass:"hoverName"},[t._v(t._s(e.name))]),o("span",{staticClass:"style"},[t._v(t._s(e.style))]),o("span",{staticClass:"normalDay"},[o("span",{staticClass:"normalDayPrice"},[t._v("NT."+t._s(e.normalDayPrice))]),t._v(" 平日")]),o("span",{staticClass:"holidayPrice"},[o("span",[t._v("NT.")]),t._v(t._s(e.holidayPrice)),o("span",[t._v(" 假日")])])])])],1)])])})),0)],1)},i=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"top"}},[o("div",{attrs:{id:"logo"}}),o("div",{attrs:{id:"info"}},[o("div",{staticClass:"socialMedia"},[o("i",{staticClass:"igIcon"}),o("i",{staticClass:"fbIcon"})]),o("div",{staticClass:"vl"}),o("div",{staticClass:"contactInfo"},[o("div",[o("i",{staticClass:"telIcon"}),t._v("02-17264937")]),o("div",[o("i",{staticClass:"emailIcon"}),t._v("whitespace@whitespace.com")]),o("div",[o("i",{staticClass:"addressIcon"}),t._v("台北市羅斯福路一段31號")])])])])}],r={name:"home",data:function(){return{bottomShowIndex:null,currentIndex:0,loader:this.$loading.show()}},computed:{getTotalIndex:function(){return this.$store.state.preImgArr.length},getRooms:function(){return this.$store.state.allRooms.items},getPreImg:function(){return this.$store.state.preImgArr}},methods:{changeInfoPage:function(t){this.$store.commit("enterInfo",t),this.$router.push({name:"information"})}},mounted:function(){var t=this,e=this;setInterval((function(){e.currentIndex++,e.currentIndex>e.getTotalIndex-1&&(e.currentIndex=0)}),6e3),setTimeout((function(){t.loader.hide()}),2e3)}},c=r,l=(o("5a68"),o("2877")),m=Object(l["a"])(c,a,i,!1,null,"1592d867",null),u=m.exports,d=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.getOb?o("div",{attrs:{id:"app"}},[o("div",{staticClass:"logoBlack",on:{click:t.backTo}}),o("div",{staticClass:"imgContainer"},t._l(t.getOb.imageUrl,(function(e,n){return o("img",{key:n,staticClass:"imgList",attrs:{src:e},on:{click:function(e){return e.preventDefault(),t.toImgBox(n)}}})})),0),o("div",{staticClass:"outerContainer"},[o("div",{staticClass:"container"},[o("div",{staticClass:"leftBar"},[o("div",{staticClass:"title"},[t._v(t._s(t.getOb.name))]),o("div",{staticClass:"descriptionShort"},[o("li",[t._v("房客人數限制："+t._s(t.getDescriptionShort.GuestMin)+"~"+t._s(t.getDescriptionShort.GuestMax)+"人")]),o("li",[t._v("床型："+t._s(t.getDescriptionShort.Bed[0]))]),o("li",[t._v("衛浴數量："+t._s(t.getDescriptionShort["Private-Bath"])+"間")]),o("li",[t._v("房間大小："+t._s(t.getDescriptionShort.Footage)+" 平方公尺")])]),o("div",{staticClass:"description"},[t._v(" "+t._s(t.getOb.description)+" ")]),o("div",{staticClass:"br"},[t._v("﹨﹨﹨")]),o("div",{staticClass:"checkTime"},[o("div",{staticClass:"checkItem"},[o("div",{staticClass:"item"},[t._v("Check In")]),o("div",{staticClass:"item time"},[t._v(t._s(t.getOb.checkInAndOut.checkInEarly)+"-"+t._s(t.getOb.checkInAndOut.checkInLate))])]),o("div",{staticClass:"checkItem"},[o("div",{staticClass:"item"},[t._v("Check Out")]),o("div",{staticClass:"item time"},[t._v(t._s(t.getOb.checkInAndOut.checkOut))])])]),o("div",{staticClass:"info"},[o("span",{class:{noInfo:!t.getOb.amenities["Wi-Fi"]}},[o("i",{attrs:{id:"wifi"}}),t._v("Wifi")]),o("span",{class:{noInfo:!t.getOb.amenities["Television"]}},[o("i",{attrs:{id:"tele"}}),t._v("電話")]),o("span",{class:{noInfo:!t.getOb.amenities["Great-View"]}},[o("i",{attrs:{id:"view"}}),t._v("漂亮的視野")]),o("span",{class:{noInfo:!t.getOb.amenities["Breakfast"]}},[o("i",{attrs:{id:"breakfast"}}),t._v("早餐")]),o("span",{class:{noInfo:!t.getOb.amenities["Air-Conditioner"]}},[o("i",{attrs:{id:"aircon"}}),t._v("空調")]),o("span",{class:{noInfo:t.getOb.amenities["Smoke-Free"]}},[o("i",{attrs:{id:"noSmoke"}}),t._v("禁止吸煙")]),o("span",{class:{noInfo:!t.getOb.amenities["Mini-Bar"]}},[o("i",{attrs:{id:"miniBar"}}),t._v("Mini Bar")]),o("span",{class:{noInfo:!t.getOb.amenities["Refrigerator"]}},[o("i",{attrs:{id:"refri"}}),t._v("冰箱")]),o("span",{class:{noInfo:!t.getOb.amenities["Child-Friendly"]}},[o("i",{attrs:{id:"forChild"}}),t._v("適合兒童")]),o("span",{class:{noInfo:!t.getOb.amenities["Room-Service"]}},[o("i",{attrs:{id:"roomService"}}),t._v("Room Service")]),o("span",{class:{noInfo:!t.getOb.amenities["Sofa"]}},[o("i",{attrs:{id:"sofa"}}),t._v("沙發")]),o("span",{class:{noInfo:!t.getOb.amenities["Pet-Friendly"]}},[o("i",{attrs:{id:"pet"}}),t._v("寵物攜帶")])])]),o("div",{staticClass:"price"},[o("div",{staticClass:"normalDayPrice"},[t._v("NT."+t._s(t.getOb.normalDayPrice))]),o("div",[t._v("平日(一～四)")]),o("div",{staticClass:"holidayPrice"},[t._v("NT."+t._s(t.getOb.holidayPrice))]),o("div",[t._v("假日(六～日)")])])]),o("div",{staticClass:"calendar"},[o("HotelDatePicker",{key:t.getBookingLength,attrs:{startDate:t.tomorrow,endDate:t.endDate,disabledDates:t.getBooking,enableCheckout:!0}}),o("div",{staticClass:"reservation",on:{click:t.reservation}},[o("span",[t._v("預約時段")])])],1)]),o("router-view")],1):t._e()},v=[],g=(o("99af"),o("0d03"),o("549f")),h=o.n(g),f={name:"information",components:{HotelDatePicker:h.a},computed:{getBookingLength:function(){return this.$store.getters.infoOb.booking.length},getOb:function(){if(this.$store.getters.infoOb)return this.$store.getters.infoOb.room[0]},getDescriptionShort:function(){return this.getOb.descriptionShort},tomorrow:function(){var t=new Date;return new Date(t.getTime()+864e5)},endDate:function(){var t=new Date;return new Date(t.getTime()+7776e6)},getBooking:function(){for(var t=[],e=0;e<this.$store.getters.infoOb.booking.length;e++)t.push(this.$store.getters.infoOb.booking[e].date);return console.log("getBooking:"+t),t}},methods:{backTo:function(){this.$router.push({name:"home"})},toImgBox:function(t){this.$router.push({name:"imgbox",params:{imgIndex:t}})},reservation:function(){if(null!=this.$children[0].checkIn&&null!=this.$children[0].checkOut){for(var t=new Date(this.$children[0].checkIn),e=new Date(this.$children[0].checkOut),o=(e-t)/864e5,n=[],s=0,a=0,i=0;i<o;i++){var r=this.dateConvert(t.getTime()+864e5*i);n.push(r),"holiday"===this.checkDay(r)?s+=1:a+=1}var c=this.dateConvert(t),l=this.dateConvert(e),m=this.getOb.normalDayPrice*a+this.getOb.holidayPrice*s;this.$store.commit("putReservation",{checkIn:c,checkOut:l,daysArr:n,holiday:s,normalDay:a,totalPrice:m}),this.$router.push({name:"validate"})}else alert("請先選擇日期")},dateConvert:function(t){var e=new Date(t),o=e.getFullYear(),n=e.getMonth()+1<10?"0"+String(e.getMonth()+1):e.getMonth()+1,s=e.getDate()<10?"0"+String(e.getDate()):e.getDate(),a="".concat(o,"-").concat(n,"-").concat(s);return a},checkDay:function(t){var e=new Date(t);return 5===e.getDay()||6===e.getDay()?"holiday":"normalDay"}},mounted:function(){var t=this.$loading.show();setTimeout((function(){t.hide()}),1e3)}},p=f,b=(o("1b68"),Object(l["a"])(p,d,v,!1,null,null,null)),_=b.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.getObImg?o("div",{staticClass:"imgFull",on:{click:function(e){return e.target!==e.currentTarget?null:t.goback(e)}}},[o("div",{staticClass:"imgBack",on:{click:function(e){return e.target!==e.currentTarget?null:t.goback(e)}}},[o("i",{attrs:{id:"prev"},on:{click:t.prevImg}},[t._v("<")]),o("div",{staticClass:"imgWrap",on:{click:function(e){return e.target!==e.currentTarget?null:t.goback(e)}}},[o("img",{attrs:{src:t.getObImg[t.imgIndexNow],alt:""}})]),o("i",{attrs:{id:"next"},on:{click:t.nextImg}},[t._v(">")]),o("div",{staticClass:"imgInfo"},[o("span",{staticClass:"imgName"},[t._v(t._s(t.getOb.name))]),o("span",{staticClass:"imgIndex"},[t._v(t._s(t.imgIndexNow+1)+"/3")])])])]):t._e()},C=[],k={name:"imgbox",data:function(){return{imgIndexNow:0}},computed:{getOb:function(){return this.$store.getters.infoOb.room[0]},getObImg:function(){return this.$store.getters.infoOb.room[0].imageUrl},getIndex:function(){return this.$route.params.imgIndex}},methods:{prevImg:function(){0!=this.imgIndexNow&&(this.imgIndexNow-=1)},nextImg:function(){2!=this.imgIndexNow&&(this.imgIndexNow+=1)},goback:function(){this.$router.back()}},mounted:function(){this.imgIndexNow=this.getIndex}},x=k,y=(o("f6ad"),Object(l["a"])(x,I,C,!1,null,null,null)),O=y.exports,w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"imgFull"},[o("div",{staticClass:"box"},[o("div",{staticClass:"boxContent"},[o("div",{staticClass:"boxTitle"},[t._v("預約時段")]),o("div",{staticClass:"slash"},[t._v("＼＼＼")]),o("div",{staticClass:"reserveInfo"},[o("div",[o("span",[t._v("姓名")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.name,expression:"customerInfo.name"}],attrs:{type:"text"},domProps:{value:t.customerInfo.name},on:{input:function(e){e.target.composing||t.$set(t.customerInfo,"name",e.target.value)}}})]),o("div",[o("span",[t._v("電話")]),o("input",{directives:[{name:"model",rawName:"v-model",value:t.customerInfo.tel,expression:"customerInfo.tel"}],attrs:{type:"text"},domProps:{value:t.customerInfo.tel},on:{input:function(e){e.target.composing||t.$set(t.customerInfo,"tel",e.target.value)}}})]),o("div",[o("span",[t._v("預約起迄")]),o("div",{staticClass:"checkDiv"},[o("input",{staticClass:"timeCheck",attrs:{type:"text",readonly:"",disabled:""},domProps:{value:this.$store.state.reservation.checkIn}}),t._v("- "),o("input",{staticClass:"timeCheck",attrs:{type:"text",readonly:"",disabled:""},domProps:{value:this.$store.state.reservation.checkOut}})])])])]),o("div",{staticClass:"priceInfo"},[o("div",[o("span",[t._v("平日時段")]),o("span",[t._v(t._s(this.$store.state.reservation.normalDay)+"夜")])]),o("div",[o("span",[t._v("假日時段")]),o("span",[t._v(t._s(this.$store.state.reservation.holiday)+"夜")])])]),o("div",{staticClass:"totalContent"},[o("div",{staticClass:"totalPrice"},[t._v("= NT."+t._s(this.$store.state.reservation.totalPrice))]),o("div",{staticClass:"btnCommit"},[o("button",{staticClass:"cancel",on:{click:t.goBack}},[t._v("取消")]),o("button",{staticClass:"submit",on:{click:t.reserve}},[t._v("確定預約")])])])])])},D=[],$={name:"validate",data:function(){return{customerInfo:{name:"",tel:"",date:this.$store.state.reservation.daysArr}}},methods:{goBack:function(){this.$router.back()},reserve:function(){var t=this;""!=this.customerInfo.name&&""!=this.customerInfo.tele?this.axios.post("https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(this.$store.getters.infoOb.room[0].id),this.customerInfo,this.$store.state.config).then((function(e){console.log(e),t.$store.dispatch("getAPI"),t.$router.push({name:"success"})})).catch((function(e){console.log(e),t.$router.push({name:"error"})})):alert("請輸入姓名及聯絡電話")}}},A=$,P=(o("966d"),Object(l["a"])(A,w,D,!1,null,null,null)),S=P.exports,R=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"imgFull"},[o("div",{staticClass:"boxSucccess"},[o("div",{staticClass:"textSuc"},[t._v("預約成功")]),o("div",{staticClass:"slash"},[t._v("＼＼＼")]),t._m(0),o("button",{staticClass:"btnSuc",on:{click:t.goBack}},[t._v("回頁面")])])])},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"imgSuc"},[n("img",{attrs:{src:o("4f36"),alt:""}})])}],B={name:"success",methods:{goBack:function(){this.$router.push({name:"information"})}}},N=B,j=(o("30a7"),Object(l["a"])(N,R,T,!1,null,null,null)),U=j.exports,E=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"imgFull"},[o("div",{staticClass:"boxErr"},[o("div",{staticClass:"textSuc"},[t._v("預約失敗")]),o("div",{staticClass:"slash"},[t._v("＼＼＼")]),o("div",{staticClass:"textErr"},[t._v("預約時間已被人預定")]),o("button",{staticClass:"btnSuc",on:{click:t.goBack}},[t._v("返回")])])])},M=[],F={name:"error",methods:{goBack:function(){this.$router.push("/infomation")}}},G=F,H=(o("7ebc"),Object(l["a"])(G,E,M,!1,null,null,null)),L=H.exports;n["a"].use(s["a"]);var V=new s["a"]({routes:[{path:"*",redirect:u},{path:"/",name:"home",component:u},{path:"/information",name:"information",component:_,children:[{path:"/information/imgbox",name:"imgbox",component:O},{path:"/information/validate",name:"validate",component:S},{path:"/information/success",name:"success",component:U},{path:"/information/error",name:"error",component:L}]}]}),J=o("2f62"),W=o("bc3a"),z=o.n(W),q=o("a7fe"),K=o.n(q),Y=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("router-view")},Z=[],Q={name:"App"},X=Q,tt=Object(l["a"])(X,Y,Z,!1,null,null,null),et=tt.exports,ot=o("9062"),nt=o.n(ot);o("e40d");n["a"].config.productionTip=!1,n["a"].use(J["a"]),n["a"].use(K.a,z.a),n["a"].use(nt.a,{loader:"dots",width:50,height:50,isFullPage:!0});var st=new J["a"].Store({state:{allRooms:{},roomsArr:{},preImgArr:[],enterRoom:"Single Room",config:{headers:{Authorization:"Bearer jykovx5KI8vvIdgPGRTuHqDVaTCdSc1OVgPVCjo0LzBIJc5ZoeGjlMAHRAUn",accept:"application/json"}},reservation:{checkIn:"",checkOut:"",daysArr:[],holiday:0,normalDay:0,total:0}},getters:{infoOb:function(t){if(0!==t.roomsArr.length){var e=t.roomsArr.filter((function(e){return t.enterRoom===e.room[0].name}));return e[0]}}},mutations:{putAllRooms:function(t,e){t.allRooms=e},putRooms:function(t,e){t.roomsArr=e},enterInfo:function(t,e){t.enterRoom=e},putReservation:function(t,e){t.reservation=e},putStyle:function(t){for(var e=0;e<t.roomsArr.length;e++)switch(t.roomsArr[e].room[0].name){case"Single Room":t.allRooms.items[e].style="單人房";break;case"Deluxe Single Room":t.allRooms.items[e].style="單人房";break;case"Double Room":t.allRooms.items[e].style="雙人雙床房";break;case"Deluxe Double Room":t.allRooms.items[e].style="雙人雙床房";break;case"Twin Room":t.allRooms.items[e].style="雙人房";break;case"Deluxe Twin Room":t.allRooms.items[e].style="雙人房";break}},putPreImg:function(t){for(var e=0;e<t.roomsArr.length;e++)switch(t.roomsArr[e].room[0].name){case"Single Room":t.preImgArr.push({imageUrl:t.roomsArr[e].room[0].imageUrl[1],name:t.roomsArr[e].room[0].name});break;case"Deluxe Single Room":t.preImgArr.push({imageUrl:t.roomsArr[e].room[0].imageUrl[2],name:t.roomsArr[e].room[0].name});break;case"Double Room":t.preImgArr.push({imageUrl:t.roomsArr[e].room[0].imageUrl[1],name:t.roomsArr[e].room[0].name});break;case"Deluxe Double Room":t.preImgArr.push({imageUrl:t.roomsArr[e].room[0].imageUrl[1],name:t.roomsArr[e].room[0].name});break;case"Twin Room":t.preImgArr.push({imageUrl:t.roomsArr[e].room[0].imageUrl[0],name:t.roomsArr[e].room[0].name});break;case"Deluxe Twin Room":t.preImgArr.push({imageUrl:t.roomsArr[e].room[0].imageUrl[0],name:t.roomsArr[e].room[0].name});break}}},actions:{getAPI:function(t){var e=t.commit,o=t.state;new Promise((function(t){z.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",o.config).then((function(o){e("putAllRooms",o.data),t()}))})).then((function(){for(var t=[],n=0;n<o.allRooms.items.length;n++)z.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/".concat(o.allRooms.items[n].id),o.config).then((function(n){t.push(n.data),t.length===o.allRooms.items.length&&(t.sort((function(t,e){return t.room[0].holidayPrice-e.room[0].holidayPrice})),e("putRooms",t),e("putStyle"),e("putPreImg"))}))}))}}});V.beforeEach((function(t,e,o){"success"!==t.name&&"error"!==t.name||"validate"===e.name||V.push("home"),o()})),new n["a"]({store:st,router:V,created:function(){this.$store.dispatch("getAPI")},render:function(t){return t(et)}}).$mount("#app")},"5a68":function(t,e,o){"use strict";var n=o("cb44"),s=o.n(n);s.a},"7d07":function(t,e,o){},"7ebc":function(t,e,o){"use strict";var n=o("7d07"),s=o.n(n);s.a},"8ec6":function(t,e,o){},"966d":function(t,e,o){"use strict";var n=o("8ec6"),s=o.n(n);s.a},b9f5:function(t,e,o){},cb44:function(t,e,o){},dd91:function(t,e,o){},f52a:function(t,e,o){},f6ad:function(t,e,o){"use strict";var n=o("dd91"),s=o.n(n);s.a}});
//# sourceMappingURL=app.a6d6ae68.js.map