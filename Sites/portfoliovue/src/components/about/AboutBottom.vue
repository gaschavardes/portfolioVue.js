<template>
  <div class="about">
    <div class="bottom">
      <div class="resume"><a href="https://gaschavardes.github.io/gaspardchavardes.pdf" target="_blank" >Download my resume</a></div>
      <div class="picture">
        <img src="./../../assets/images/moi2.jpg">
      </div>

    </div>

  </div>
</template>

<script>
    export default {
      data () {
        return {
          msg: 'hello vue'
        }
      },
      mounted: function () {
        this.image = document.querySelector('.picture img')
        this.container = document.querySelector('.picture')
        this.glitchImage()
      },
      methods: {
        glitchImage: function () {
          let clone = this.image.cloneNode(true)
          this.container.appendChild(clone)
          this.container.appendChild(clone)
        }
      }

    }
</script>
<style src="../../styles/about.scss" lang="scss" ></style>
