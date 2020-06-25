<template>
  <div ref="projectname" class="devices-container align-center justify-between my-5">
    <div
      class="device desktop"
      :class="{
        play: visibleHero,
        scroll, animation: scroll
      }"
    >
      <div class="device__screen">
        <img :src="require(`@/assets/img/${projectKey}-desktop.jpg`)" alt="">
      </div>
    </div>
    <div
      class="device mobile"
      :class="{
        play: visibleHero,
        scroll, animation: scroll
      }"
    >
      <div class="device__screen">
        <img :src="require(`@/assets/img/${projectKey}-mobile.jpg`)" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    projectKey: {
      type: String,
      default: 'error'
    },
    scroll: Boolean
  },
  data () {
    return {
      visibleHero: false
    }
  },
  beforeMount () {
    document.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      const { top, bottom } = this.$refs.projectname.getBoundingClientRect()
      const windowHeight = window.innerHeight

      if (top > windowHeight) {
        this.visibleHero = false
      } else if (top < (windowHeight / 2)) {
        this.visibleHero = true
      }

      if (bottom < 0) {
        this.visibleHero = false
      }
    }
  }
}
</script>
