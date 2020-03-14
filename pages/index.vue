<template>
  <div>
    <section class="main-hero d-flex flex-column mt-3 p-1">
      <main-nav />
      <!-- <div class="d-flex align-center justify-center flex-grow"> -->
      <div class="container">
        <main-logo />
      </div>
    </section>
    <section class="p-1">
      <main-intro />
      <div class="container">
        <device-hero />
      </div>
    </section>
  </div>
</template>

<script>
import MainLogo from '~/components/MainLogo.vue'
import MainIntro from '~/components/MainIntro.vue'
import DeviceHero from '~/components/DeviceHero.vue'
import MainNav from '~/components/MainNav.vue'

export default {
  components: {
    MainLogo,
    MainIntro,
    DeviceHero,
    MainNav
  }
}
</script>

<style>
/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
} */

/* .title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
