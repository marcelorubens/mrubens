<template>
  <section>
    <div class="container">
      <h2 class="font-huge">
        <span class="font-featured font-featured--secondary">04.</span> Non-profitable charity organization redesign
      </h2>
      <project-tags ux_ui dev />
      <div class="row-60">
        <div>
          <p>Interface design and implementation for a non-profitable charity organization focused on helping refugees using Figma and Wordpress.</p>
          <p>Check more at <a href="http://circulosdehospitalidade.org" target="_blank">circulosdehospitalidade.org</a></p>
        </div>
      </div>
      <device-hero project-key="circulos" scroll />
    </div>
  </section>
</template>

<script>
import DeviceHero from '~/components/DeviceHero.vue'
import ProjectTags from '~/components/ProjectTags.vue'

export default {
  components: {
    DeviceHero,
    ProjectTags
  }
}
</script>
