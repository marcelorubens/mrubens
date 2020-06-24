<template>
  <section>
    <div class="container">
      <h2 class="font-huge">Apparel Customisation Tool</h2>
      <p>Interface design of a web application tool for customising apparel on a well known fashion company's e-commerce.</p>
      <device-hero project-key="hrg" />
      <p>The main focus on this project was to make the experience of customising apparel on mobile phones more pleasant, but still keeping it equally satisfying on larger screen devices.</p>
      <p>A fully interactive prototype was made using Sketch App to present the idea.</p>
    </div>
    <div class="full-width my-5">
      <img src="@/assets/img/hrg-toolbar.png">
    </div>
    <div class="container">
      <h2>Toolbar</h2>
      <p>Virtually everything you need to do when making your own piece of art is contained in a powerful toolbar with all the customisable settings.</p>
    </div>
    <div class="colors-banner full-width d-flex align-center my-5" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container d-flex">
        <div>
          <p>It expands showing the options of each tool and allows the user to configure at will while live updating the art on the product preview.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DeviceHero from '~/components/DeviceHero.vue'
import backgroundUrl from '@/assets/img/hrg-colors.png'

export default {
  components: {
    DeviceHero
  },
  data () {
    return {
      backgroundUrl
    }
  }
}
</script>
