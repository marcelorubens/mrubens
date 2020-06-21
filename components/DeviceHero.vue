<template>
  <div ref="projectname" class="d-flex align-end justify-between my-5">
    <div class="device desktop scroll animation" :class="{ play: visibleHero }">
      <div class="device__screen">
        <img src="@/assets/img/rw-desktop.jpg" alt="">
      </div>
    </div>
    <div class="device mobile scroll animation" :class="{ play: visibleHero }">
      <div class="device__screen">
        <img src="@/assets/img/rw-mobile.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
