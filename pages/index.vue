<template>
  <div>
    <main-header />
    <main-intro />
    <device-hero />
  </div>
</template>

<script>
import MainHeader from '~/components/MainHeader.vue'
import MainIntro from '~/components/MainIntro.vue'
import DeviceHero from '~/components/DeviceHero.vue'

export default {
  components: {
    MainHeader,
    MainIntro,
    DeviceHero
  }
}
</script>
