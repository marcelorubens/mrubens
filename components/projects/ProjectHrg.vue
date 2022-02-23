<template>
  <section>
    <div class="container">
      <h2 class="font-huge">
        <span class="font-featured font-featured--secondary">02.</span> Apparel Customisation Tool
      </h2>
      <project-tags ux_ui />
      <div class="row-60">
        <div>
          <p>Interface design of a web application tool for customising apparel on a well known fashion company's e-commerce.</p>
          <p>The main focus on this project was to make the experience of customising apparel on mobile phones more pleasant, but still keeping it equally satisfying on larger screen devices.</p>
        </div>
      </div>
      <device-hero project-key="hrg" />
      <p class="text-center">A fully interactive prototype was made using Sketch App to present the idea.</p>
    </div>
    <div class="colors-banner full-width d-flex align-center mt-5" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <div class="container d-flex">
        <div>
          <h2>Toolbar</h2>
          <p>Virtually everything you need to do when making your own piece of art is contained in a powerful toolbar with all the customisable settings.</p>
          <p>It expands showing the options of each tool and allows the user to configure at will while live updating the art on the product preview.</p>
        </div>
      </div>
    </div>
    <div class="full-width gray-banner mt-4">
      <div class="container">
        <img src="@/assets/img/hrg-toolbar.png">
      </div>
    </div>
    <div class="container my-4">
      <div class="row-60">
        <div>
          <p>It also includes the rotation and scale tools directly on the canvas and a QR code generator used when bringing it to a physical store to get the art printed.</p>
        </div>
      </div>
    </div>
    <div class="full-width gray-banner">
      <div class="container">
        <img src="@/assets/img/hrg-qr.png">
      </div>
    </div>
  </section>
</template>

<script>
import DeviceHero from '~/components/DeviceHero.vue'
import backgroundUrl from '@/assets/img/hrg-colors.png'
import ProjectTags from '~/components/ProjectTags.vue'

export default {
  components: {
    DeviceHero,
    ProjectTags
  },
  data () {
    return {
      backgroundUrl
    }
  }
}
</script>
