<template>
  <div id="app" >
    <div class="loader">
      <div class="square" ></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square"></div>
      <div class="square last"></div>
      <div class="square clear"></div>
      <div class="square "></div>
      <div class="square last"></div>
    </div>
    <transition-group :name="transitionType" mode="out-in"
      v-on:before-enter="beforeEnter">
      <!--<router-view></router-view>-->

      <router-view name='top' key="item"></router-view>
      <router-view name='bottom' key="item"></router-view>
    </transition-group>

    <div class="nav">
      <router-link class="homeLink" to="/" exact>
        <ul>
          <li></li>
          <li></li>
        </ul>
      </router-link>
      <router-link class="projectLink" :to="{name : 'project'}" attr-text="PROJECTS">Projects</router-link>
      <router-link class="aboutLink" to="/about" attr-text="ABOUT">About</router-link>
    </div>

  </div>

</template>

<script>
import {TweenMax} from 'gsap'
export default {
  name: 'app',
  data () {
    return {
      transitionType: 'navigation',
      isMobile: false
    }
  },
  created () {
    this.onMobile
  },
  ready () {
    window.addEventListener('scroll', this.handleScroll)
  },
  mounted: function () {
    this.loader = document.querySelector('.loader')
    if (document.documentElement.clientWidth <= 980) {
      this.transitionType = 'mobile'
    }
    TweenMax.to(this.loader, 0.5, { opacity: '0', pointerEvents: 'none' })
  },
  updated: function () {
  },
  methods: {
    beforeEnter () {
    },
    handleScroll () {
      this.scrolled = window.scrollY > 0
    },
    onMobile: function () {
      if (navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)) {
        TweenMax.set('.about .top', {height: 'calc(50vh - 44pt)', top: '44pt'})
        TweenMax.set('.about .bottom', {height: 'calc(50vh - 44pt)'})
        TweenMax.set('.main .top', {height: 'calc(50vh - 44pt)', top: '44pt'})
        TweenMax.set('.main .bottom', {height: '30vh'})
      }
    }
  }

}
</script>

<style src="./app.scss" lang="scss" ></style>
