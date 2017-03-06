<template>
  <div class="main">
    <div class="top">
      <h2 data-text="HELLO">HELLO</h2>
    </div>
  </div>
</template>

<script>
    import {TweenMax} from 'gsap'
    export default {
      data () {
        return {
          msg: 'hello vue'
        }
      },
      onCreated () {
      },
      mounted () {
        this.greetings = document.querySelector('.main .top h2')
        TweenMax.from(this.greetings, 0.5, {bottom: '-200px', delay: '2'})
      },
      beforeDestroy () {
        TweenMax.to(this.greetings, 1, {bottom: '-200px'})
      }

    }
</script>
<style src="../../styles/main.scss" lang="scss" ></style>
