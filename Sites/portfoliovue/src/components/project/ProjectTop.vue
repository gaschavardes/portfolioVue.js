<template>
  <div class="project">
    <counter></counter>
    <div class="top"  :class="{ scrolled: isScrolled }">
      <transition :name="subtransition" mode="out-in">
        <div class="subpart"  v-bind:key="project">
          <div class="subtop">
              <h2 :data-text=items[project].title>{{items[project].title}}</h2>
            <div class="nextContent">
              <div :class="{ visible: isVisible}" class="item description"><span class="category">Description </span>{{items[project].description}}</div>
              <div class="subContent">
                <div class="subContent__item"> <div :class="{ visible: isVisible}" class="item context"><span class="category">Context </span>{{items[project].context}}</div></div>
                <div class="subContent__item"> <div :class="{ visible: isVisible}" class="item role"><span class="category">Role  </span>{{items[project].role}}</div></div>
              </div>

            </div>
            <a  :href=items[project].link target="blank" :class="{ visible: isVisible}" class="link item" >
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"width="220" height="50" viewBox="0 0 220 50" >
                  <line class="up" x1="0" y1="0" x2="660" y2="0" />
                  <line class="down" x1="-440" y1="50" x2="220" y2="50" />
                  <line class="left" x1="0" y1="0" x2="0" y2="150" />
                  <line class="right" x1="220" y1="-100" x2="220" y2="50" />
                </svg>
              Visit website
            </a>
          </div>
      </transition>
    </div>
  </div>
</template>

<script>
    import counter from './counter.vue'
    import TransitionType from '../../store/transitionType'
    import store from '../../store/projectPage'
    export default {
      components: {
        counter
      },
      data () {
        return {
          count: store.state,
          page: 1,
          show: true,
          msg: 'hello vue',
          isScrolled: false,
          isVisible: false,
          reachBottom: false,
          state: TransitionType.state,
          items: [{
            title: 'Museum Quarter',
            description: 'Museum Quarter is the area between the Van Baerlestraat, Museum Square, Stadhouderskade and Vossiusstraat. The area is home to the three most important museums in the Netherlands: the Rijksmuseum, the Stedelijk Museum and the Van Gogh Museum. "The Musemum Quarter" website helps you make real tours in this district according to what you want to do that day.',
            context: 'Internship at This Page Amsterdam',
            role: 'Front-end Developer',
            link: 'https://museumquarter.com/'
          },
          {
            title: 'Colloque Montreal',
            description: 'Website for Montreal\'s University colloquiums about numeric and philosophy which goal is to tease the event and inform people about it but also to be able to follow interventions with onlines lives',
            context: 'Pedagogic project for Hetic',
            role: 'Front-end Developer',
            link: 'http://colloque2016.ecrituresnumeriques.ca'
          },
          {
            title: 'Hatch',
            description: 'Hatch connects brands with retailers, allowing customers to purchase products from wherever they are. With offices in the US, Europe and Asia Hatch already works with some of the world\'s biggest brands, retailers and agencies. They are active in 80 countries and have over 3,000 connected retailers globally.',
            context: 'Internship at This Page Amsterdam',
            role: 'Front-end Developer',
            link: 'https://gethatch.com'
          },
          {
            title: 'Yobanane',
            description: 'Give superpowers to your friends and family by sending them a Yobanane, a banana filled with magic which will give them strengh, success or love for the rest of the day. The Yobanane will arrive by mail in a nice gift package.',
            context: 'Personal project',
            role: 'Founder / Developer',
            link: 'https://yobanane.com'
          }]
        }
      },
      computed: {
        subtransition: function () {
          return TransitionType.state.subtransition
        },
        project: function () {
          return this.count.page
        }
      },
      created: function () {
        window.addEventListener('mousewheel', this.handleScroll)
        window.addEventListener('click', this.changeProject)
      },
      destroyed: function () {
        window.removeEventListener('mousewheel', this.handleScroll)
        TransitionType.basicTransition()
      },
      mounted: function () {
        this.next = document.querySelector('.counter .next')
        this.arrow = document.querySelector('.arrow')
        this.content = document.querySelectorAll('.nextContent .item')
        this.component = document.querySelector('.top')

        this.projectLink = document.querySelector('.projectLink')
        this.projectLink.classList.add('clicked')
        this.projectLink.classList.add('router-link-active')

        if (this.component.classList.contains('scrolled')) {
          this.isVisible = true
        }
        if (document.documentElement.clientWidth > 980 && this.component.classList.contains('scrolled')) {
          this.isVisible = true
        }
        if (document.documentElement.clientWidth <= 980) {
          this.isVisible = true
          TransitionType.scrolledTransition()
        }
      },
      updated: function () {
        this.contentX = document.querySelectorAll('.nextContent .item')
        if (this.component.classList.contains('scrolled')) {
          this.isVisible = true
        }
      },
      methods: {
        handleScroll: function (e) {
          if (e.wheelDelta < 0) {
            if (document.documentElement.clientWidth > 980) {
              this.isScrolled = true
              this.isVisible = true
            }
            TransitionType.scrolledTransition()
          }
          if (window.pageYOffset < 3 && e.wheelDelta > 3) {
            TransitionType.basicTransition()
            if (document.documentElement.clientWidth > 980) {
              this.isScrolled = false
              this.isVisible = false
            }
          }
        }
      }
    }
</script>
<style src="../../styles/project.scss" lang="scss" ></style>
