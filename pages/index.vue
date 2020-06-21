<template>
  <div>
    <main-header />
    <main-intro />
    <main-projects />
    <project-component />
    <device-hero />
    <about-me />
    <contact-me />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
import MainIntro from '~/components/MainIntro.vue'
import MainProjects from '~/components/MainProjects.vue'
import AboutMe from '~/components/AboutMe.vue'
import ContactMe from '~/components/ContactMe.vue'

export default {
  components: {
    MainHeader,
    MainIntro,
    MainProjects,
    ContactMe,
    AboutMe
  }
}
</script>
