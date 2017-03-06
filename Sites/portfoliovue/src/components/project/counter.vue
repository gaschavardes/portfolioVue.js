<template>
  <div class="counter">

    <div class="arrow previous" @click="decrement">
      <!--<router-link :to="{name : 'project.'+nextOne+''}" class="counterplus" @click.stop="increment" >-->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M71.278,95.103c-1.113,0-2.226-0.425-3.075-1.273L24.374,50l43.83-43.83c1.699-1.697,4.451-1.697,6.15,0   c1.698,1.699,1.698,4.451,0,6.15L36.672,50l37.681,37.68c1.698,1.699,1.698,4.451,0,6.15   C73.504,94.679,72.391,95.103,71.278,95.103z"></path></g></svg>
      <!--</router-link>-->
    </div>
    <transition name="scrollednavigation" mode="out-in">
      <div class="page" v-bind:key="page">
        {{page}}
      </div>
    </transition>
    <div class="arrow next" @click="increment">
      <!--<router-link :to="{name : 'project.'+previousOne+''}" class="counterminus" @click="decrement" >-->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><g><path d="M71.278,95.103c-1.113,0-2.226-0.425-3.075-1.273L24.374,50l43.83-43.83c1.699-1.697,4.451-1.697,6.15,0   c1.698,1.699,1.698,4.451,0,6.15L36.672,50l37.681,37.68c1.698,1.699,1.698,4.451,0,6.15   C73.504,94.679,72.391,95.103,71.278,95.103z"></path></g></svg>
      <!--</router-link>-->
    </div>


  </div>
</template>

<script>
  import store from '../../store/projectPage'
  import {TweenMax, Power4} from 'gsap'

  export default {
    data () {
      return {
        state: store.state
      }
    },
    computed: {
      page: function () {
        return (this.state.page + 1)
      },
      nextOne: function () {
        return this.state.nextOne
      },
      previousOne: function () {
        return this.state.previousOne
      }
    },
    updated: function () {
    },
    mounted: function () {
      this.counter = document.querySelector('.counter')
      if (document.documentElement.clientWidth > 980) {
        TweenMax.from(this.counter, 0.5, {top: '70px', opacity: '0', delay: 1.5, ease: Power4.easeInOut})
      }
    },
    beforeDestroy: function () {
      if (document.documentElement.clientWidth > 980) {
        TweenMax.to(this.counter, 0.5, {top: '70px', opacity: '0', ease: Power4.easeInOut})
      }
    },
    methods: {
      // Project next/previous page
      increment () {
        store.increment()
      },
      decrement () {
        store.decrement()
      }
    }
  }
</script>
<style src="../../styles/counter.scss" lang="scss" ></style>
<style src="../../styles/project.scss" lang="scss" ></style>
