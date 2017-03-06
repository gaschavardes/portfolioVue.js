<template>
  <div class="project" >
    <div class="bottom" :class="{ scrolled: isScrolled }">
      <div class="arrowDown arrow-1">
        <div class="clickZone"></div>
      </div>
      <transition :name="subtransition" mode="out-in">
        <!--<router-view name="bottom" key="item"></router-view>-->
        <div class=" subpart" v-bind:key="project">
          <div class="subbottom">
            <div class="logo">
              <img :class="{ image: isImage }" :src=items[project].logo>
            </div>



            <div class="shots">

              <div class="shots__item home">
                <img :class="{ image: isImage }" :src=items[project].image1>
              </div>
              <div class="shots__item home">
                <img :class="{ image: isImage }" :src=items[project].image2>
              </div>
              <div class="shots__item route">
                <img :class="{ image: isImage }" :src=items[project].image3>
              </div>
              <div class="shots__item route">
                <img :class="{ image: isImage }" :src=items[project].image4>
              </div>
              <div class="shots__item route">
                <img :class="{ image: isImage }" :src=items[project].image5>
              </div>

            </div>

            <div class="nextProject" @click="increment">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="220" height="50" xml:space="preserve" >
                <line class="up" x1="0" y1="0" x2="660" y2="0" />
                <line class="down" x1="-440" y1="50" x2="220" y2="50" />
                <line class="left" x1="0" y1="0" x2="0" y2="150" />
                <line class="right" x1="220" y1="-100" x2="220" y2="50" />
              </svg>
              <p>Next project</p>
            </div>
          </div>

        </div>
      </transition>
    </div>

  </div>
</template>

<script>
    import 'imports?define=>false!scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap'
    import TransitionType from '../../store/transitionType'
    import {TweenMax} from 'gsap'
    import store from '../../store/projectPage'
    import ScrollMagic from 'scrollmagic'

    export default {
      data () {
        return {
          count: store.state,
          isScrolled: false,
          isImage: true,
          state: TransitionType.state,
          items: [{
            logo: require('assets/images/museum/logo.svg'),
            image1: require('assets/images/museum/load.png'),
            image2: require('assets/images/museum/home.png'),
            image3: require('assets/images/museum/route.png')
          },
          {
            logo: require('assets/images/montreal/logo.png'),
            image1: require('assets/images/montreal/home.png'),
            image2: require('assets/images/montreal/intervenants.png'),
            image3: require('assets/images/montreal/intervenantsBio.png'),
            image4: require('assets/images/montreal/programme.png')
          },
          {
            logo: require('assets/images/hatch/logo.svg'),
            image1: require('assets/images/hatch/agencies.png'),
            image2: require('assets/images/hatch/retailers.png'),
            image3: require('assets/images/hatch/brands.png')
          },
          {
            logo: require('assets/images/yobanane/logo.png'),
            image1: require('assets/images/yobanane/home.png'),
            image2: require('assets/images/yobanane/expl.png'),
            image3: require('assets/images/yobanane/product.png'),
            image4: require('assets/images/yobanane/social.png')
          }]
        }
      },
      computed: {
        subtransition: function () {
          return TransitionType.state.subtransition
        },
        half: function () {
          return (document.documentElement.clientHeight / 2)
        },
        project: function () {
          return this.count.page
        }
      },
      mounted: function () {
        this.arrowDown = document.querySelector('.arrowDown .clickZone')
        if (document.documentElement.clientWidth > 980) {
          this.isScrolled = false
        } else {
          this.isScrolled = true
        }
        this.arrow = document.querySelectorAll('.arrow')
        for (let i = 0; i < this.arrow.length; i++) {
          this.arrow[i].addEventListener('click', this.scrollTop)
        }
      },
      created: function () {
        window.addEventListener('mousewheel', this.handleScroll)
        document.addEventListener('touchmove', this.changeOpacity)
      },
      destroyed: function () {
        window.removeEventListener('mousewheel', this.handleScroll)
        document.removeEventListener('touchmove', this.changeOpacity)
      },
      updated: function () {
        this.isImage = true
      },
      methods: {
        handleScroll: function (e) {
          console.log(e.wheelDelta)
          if (e.wheelDelta < 0) {
            if (document.documentElement.clientWidth > 980) {
              this.isScrolled = true
              TweenMax.to(this.$el.children, 0.1, {top: '0vh', delay: '0.5'})
            }
            TransitionType.scrolledTransition()
            this.changeOpacity()
          }
          if (window.pageYOffset < 3 && e.wheelDelta > 3) {
            TweenMax.to(this.$el.children, 0.1, {top: '50vh', onComplete: this.removeClass})
          }
        },
        removeClass: function () {
          if (document.documentElement.clientWidth > 980) {
            setTimeout(() => { this.isScrolled = false }, 300)
          }
        },
        increment () {
          store.increment()
          this.scrollTop()
        },
        scrollTop () {
          if (navigator.userAgent.match(/firefox/i) || navigator.userAgent.match(/windows nt/i)) {
            TweenMax.to(document.getElementsByTagName('html')[0], 0.2, {scrollTop: 0, delay: 0.5})
          } else {
            TweenMax.to(document.body, 0.2, {scrollTop: 0, delay: 0.5})
          }
        },
        changeOpacity: function () {
          var controller = new ScrollMagic.Controller()
          this.imgOp = document.querySelectorAll('.shots__item .image')
          if (navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)) {
            for (let i = 0; i < this.imgOp.length; i++) {
          //    TweenMax.set(this.imgOp[i], {opacity: 1})
            }
          }
          for (const img of this.imgOp) {
            if (navigator.userAgent.indexOf('Chrome') > -1) {
              var tween = TweenMax.fromTo(img, 0.5, {opacity: 0}, {opacity: 1})
            } else {
              tween = TweenMax.to(img, 0.5, {opacity: 1})
            }
            var scene = new ScrollMagic.Scene({
              triggerElement: img,
              offset: -200,
              duration: 500
            })
            .setTween(tween)
            .addTo(controller)
            console.log(scene)
          }
        }
      }
    }
</script>
<style src="../../styles/project.scss" lang="scss" ></style>
