<template>
  <div>
    <main-header />
    <main-intro />
    <main-projects />
    <about-me />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
import MainIntro from '~/components/MainIntro.vue'
import MainProjects from '~/components/MainProjects.vue'
import AboutMe from '~/components/AboutMe.vue'

export default {
  components: {
    MainHeader,
    MainIntro,
    MainProjects,
    AboutMe
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
