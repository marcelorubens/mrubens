<template>
  <div class="main-header d-flex justify-between align-start">
    <main-logo :not-main-page="notMainPage" />
    <main-nav v-if="!notMainPage" />
  </div>
</template>

<script>
import MainLogo from '~/components/MainLogo.vue'
import MainNav from '~/components/MainNav.vue'

export default {
  components: {
    MainLogo,
    MainNav
  },
  props: {
    notMainPage: Boolean
  }
}
</script>
