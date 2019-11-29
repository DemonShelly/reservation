import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
import information from '@/view/information'
import imgbox from '@/components/imgbox'
import validate from '@/components/validate'
import success from '@/components/success'
import error from '@/components/error'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: home
    },
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/information',
      name: 'information',
      component: information,
      children: [
        {
          path: '/information/imgbox',
          name: 'imgbox',
          component: imgbox
        },
        {
          path: '/information/validate',
          name: 'validate',
          component: validate
        },
        {
          path: '/information/success',
          name: 'success',
          component: success
        },
        {
          path: '/information/error',
          name: 'error',
          component: error
        }
      ]
    }
  ]
})