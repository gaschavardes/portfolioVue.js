<template>
  <div class="about">
    <div class="top">
      <div class="content">
        <h1>Gaspard Chavardes</h1>
        <p class="status"> French Creative Developper</p>
        <p class="currently">Student on 4th year at <strong>HETIC</strong>, french school for communication and
          information specialised in web technologies.</p>
        <p class="looking">I'm currently looking for a 6 months internship in front-end development starting in July.</br>
          I'm also willing to work on freelance missions.</p>
      </div>
      <ul class="links">
        <li class="links__item"><a target="blank" href="https://github.com/gaschavardes">GitHub</a></li>
        <li class="links__item"><a target="blank" href="https://www.linkedin.com/in/gaspardchavardes/">Linkedin</a></li>
        <li class="links__item"><a  href="mailto:chavardes.gaspard@gmail.com">Contact</a></li>
      </ul>
    </div>

  </div>
</template>

<script>
    import {TweenMax, Power4} from 'gsap'
    export default {
      data () {
        return {
          msg: 'hello vue'
        }
      },
      mounted () {
        this.listItem = document.querySelectorAll('.links .links__item')
        this.listItema = document.querySelectorAll('.links .links__item a')
        this.content = document.querySelector('.about .top .content')
        this.content.classList.add('visible')
        for (let i = 0; i < this.listItem.length; i++) {
          this.listItema[i].classList.add('visible')
        }
        // TweenMax.staggerFrom(this.listItem, 0.5, {top: '20px', opacity: '0', delay: 2, ease: Power4.easeIn}, 0.5)
      },
      beforeDestroy () {
        this.content.classList.add('hidden')
        for (let i = 0; i < this.listItem.length; i++) {
          this.listItema[i].classList.add('hidden')
        }
        // this.listItem.classList.add('hidden')
        TweenMax.staggerTo(this.listItem, 0.5, {top: '20px', opacity: '0', delay: 2, ease: Power4.easeIn}, -0.5)
      }
    }
</script>
<style src="../../styles/about.scss" lang="scss" ></style>
