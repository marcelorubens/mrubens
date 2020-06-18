<template>
  <section class="p-1">
    <main-header />
    <main-intro />
    <div class="container">
      <device-hero />
    </div>
  </section>
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
