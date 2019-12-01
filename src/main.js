/**eslint-disable no-new**/
import Vue from 'vue'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.config.productionTip = false
Vue.use(Vuex)
// Vue.prototype.$http = axios;
Vue.use(VueAxios, axios)
Vue.use(Loading,{
  loader: 'dots',
  width: 50,
  height: 50,
  isFullPage: true,
});

const store = new Vuex.Store({
  state: {
    allRooms: {},
    roomsArr: {},
    preImgArr: [],
    enterRoom:`Single Room`,
    config: {
      headers: {
        // Bearer + token
        'Authorization': `Bearer jykovx5KI8vvIdgPGRTuHqDVaTCdSc1OVgPVCjo0LzBIJc5ZoeGjlMAHRAUn`,
        'accept': 'application/json'
      }
    },
    reservation:{
      checkIn:'',
      checkOut:'',
      daysArr:[],
      holiday:0,
      normalDay:0,
      total:0,
    }
  },
  getters: {
    infoOb (state) {
      if (state.roomsArr.length === 0) { return }
      // console.log(state.allRooms)
      // console.log(state.roomsArr)
      const ob = state.roomsArr.filter((item) => {
        return state.enterRoom === item.room[0].name
      })
      return ob[0]
    }
  },
  mutations: {
    putAllRooms (state, payload) {
      state.allRooms = payload
      // console.log(state.allRooms)
    },
    putRooms (state, payload) {
      state.roomsArr = payload
      // console.log(state.roomsArr)
    },
    enterInfo(state, payload){
      state.enterRoom = payload
    },
    putReservation(state, payload){
      state.reservation = payload
      // console.log(state.reservation)
    },
    putStyle(state){
      for(let i=0 ; i<state.roomsArr.length ; i++){
        switch(state.roomsArr[i].room[0].name){
          case`Single Room`:
            // state.allRooms.items[i].push({
            //   imageUrl: state.roomsArr[i].room[0].imageUrl[2],
            //   name: state.roomsArr[i].room[0].name,
            //   style: `單人房`
            // })
            state.allRooms.items[i].style = `單人房`
            break
          case `Deluxe Single Room`:
            state.allRooms.items[i].style = `單人房`
            break
          case `Double Room`:
            state.allRooms.items[i].style = `雙人雙床房`
            break
          case `Deluxe Double Room`:
            state.allRooms.items[i].style = `雙人雙床房`
            break
          case `Twin Room`:
            state.allRooms.items[i].style = `雙人房`
            break
          case `Deluxe Twin Room`:
            state.allRooms.items[i].style = `雙人房`
            break
        }
      }
    },
  
    putPreImg (state) {
      for (let i = 0; i < state.roomsArr.length; i++) {
        switch (state.roomsArr[i].room[0].name) {
          case `Single Room`:
            state.preImgArr.push({
              imageUrl: state.roomsArr[i].room[0].imageUrl[1],
              name: state.roomsArr[i].room[0].name
            })
            break
          case `Deluxe Single Room`:
            state.preImgArr.push({
              imageUrl: state.roomsArr[i].room[0].imageUrl[2],
              name: state.roomsArr[i].room[0].name
            })
            break
          case `Double Room`:
            state.preImgArr.push({
              imageUrl: state.roomsArr[i].room[0].imageUrl[1],
              name: state.roomsArr[i].room[0].name
            })
            break
          case `Deluxe Double Room`:
            state.preImgArr.push({
              imageUrl: state.roomsArr[i].room[0].imageUrl[1],
              name: state.roomsArr[i].room[0].name
            })
            break
          case `Twin Room`:
            state.preImgArr.push({
              imageUrl: state.roomsArr[i].room[0].imageUrl[0],
              name: state.roomsArr[i].room[0].name
            })
            break
          case `Deluxe Twin Room`:
            state.preImgArr.push({
              imageUrl: state.roomsArr[i].room[0].imageUrl[0],
              name: state.roomsArr[i].room[0].name
            })
            break
        }
      }
      // console.log(state.preImgArr)
    }
  },
  actions: {
    getAPI ({commit, state}) {
      new Promise((resolve) => {
        axios.get('https://challenge.thef2e.com/api/thef2e2019/stage6/rooms', state.config)
          .then((response) => {
            // console.log(response.data);
            commit('putAllRooms', response.data)
            resolve()
          })
      }).then(() => {
        // 取得詳細房型
        const newArr = []
        for (let i = 0; i < state.allRooms.items.length; i++) {
          axios.get(`https://challenge.thef2e.com/api/thef2e2019/stage6/room/${state.allRooms.items[i].id}`, state.config)
            .then((responses) => {
              // console.log(responses.data)
              newArr.push(responses.data)
              // 當陣列數達到目標後
              if (newArr.length === state.allRooms.items.length) {
                newArr.sort((a, b) => {
                  return a.room[0].holidayPrice - b.room[0].holidayPrice
                })
                commit('putRooms', newArr)
                commit('putStyle')
                commit('putPreImg')

              }
            })
        }
      })
    }
  }
})


router.beforeEach(function (to, from, next) {
  if ((to.name === 'success' || to.name === 'error') && from.name !== 'validate') {
    router.push('home')
  }
  next()
})

// router.beforeEach(function (to, from, next) {
//   if (to.name === 'information'  && from.name === 'success') {
//     console.log('to information!')
//     // router.push('/information')
//   }
//   next()
// })


new Vue({
	store,
  router,
	created () {
    this.$store.dispatch('getAPI')
  },
  render: h => h(App),
}).$mount('#app')
