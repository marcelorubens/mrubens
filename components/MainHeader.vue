<template>
  <div class="main-header d-flex justify-between align-start">
    <main-logo />
    <main-nav />
  </div>
</template>

<script>
import MainLogo from '~/components/MainLogo.vue'
import MainNav from '~/components/MainNav.vue'

export default {
  components: {
    MainLogo,
    MainNav
  }
}
</script>
