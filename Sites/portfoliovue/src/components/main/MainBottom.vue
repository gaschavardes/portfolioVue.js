<template>
  <div class="main">
    <div class="bottom">
      <h2 data-text="THERE">
        THERE
      </h2>
      <div class="author">
        <h1>gaspard chavardes</h1>
        <p>portfolio</p>
      </div>
    </div>
  </div>
</template>

<script>
  import TweenMax from 'gsap'
  export default {
    data () {
      return {
        msg: 'hello vue'
      }
    },
    methods: {
    },
    created: function () {
    },
    destroyed: function () {
    },
    mounted () {
      this.title = document.querySelector('.main .author')
      this.greetings = document.querySelector('.main .bottom h2')
      TweenMax.from(this.greetings, 0.5, {top: '-200px', delay: '2'})
      this.title.classList.add('visible')
      if (navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i)) {
        TweenMax.set('.main .top', {height: 'calc(50vh - 44pt)', top: '44pt'})
        TweenMax.set('.main .bottom', {height: '30vh'})
      }
    },
    beforeDestroy () {
      TweenMax.to(this.greetings, 1, {top: '-200px'})
      // this.title.classList.remove('visible')
    }
  }
</script>
<style src="../../styles/main.scss" lang="scss" ></style>
