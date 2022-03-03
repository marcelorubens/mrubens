<template>
  <div>
    <main-header not-main-page />
    <project-monorail />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
import ProjectMonorail from '~/components/projects/ProjectMonorail.vue'

export default {
  components: {
    MainHeader,
    ProjectMonorail
  },
  methods: {
    scrollTo (refName) {
      const scrollTop = document.documentElement.scrollTop
      const elementTop = document.querySelector(refName).getBoundingClientRect().top
      const navTrigger = document.querySelector('#burgerMenu')

      window.scroll(0, scrollTop + elementTop)
      navTrigger.checked = false
    }
  }
}
</script>
