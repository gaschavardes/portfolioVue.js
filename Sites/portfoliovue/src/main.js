import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      'top': require('./components/main/MainTop.vue'),
      'bottom': require('./components/main/MainBottom.vue')
    }
  }, {
    path: '/about',
    components: {
      'top': require('./components/about/AboutTop.vue'),
      'bottom': require('./components/about/AboutBottom.vue')
    }
  }, {
    path: '/project',
    name: 'project',
    components: {
      'top': require('./components/project/ProjectTop.vue'),
      'bottom': require('./components/project/ProjectBottom.vue')
    }
  }, {
    path: '*',
    redirect: '/'
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  render: h => h(require('./App.vue'))
})
