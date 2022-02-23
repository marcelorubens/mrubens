<template>
  <section>
    <div class="container">
      <h2 class="font-huge">
        <span class="font-featured font-featured--secondary">03.</span> This website
      </h2>
      <project-tags ux_ui dev />
      <div class="row-60">
        <div>
          <h2></h2>
          <p>Yep, I also made this entirely from scratch.</p>
        </div>
      </div>
      <device-hero project-key="prs" scroll />
      <div class="row-60 my-5">
        <div>
          <p>
            Started with some rough ideas and early sketches for what would become a project for my own portfolio: itself.<br>
            It needed to be:
          </p>
          <ul>
            <li>Visually clean and extremely readable and straightforward.</li>
            <li>Dynamic - so I could add as many projects as I wanted.</li>
            <li>Responsive for all screen sizes.</li>
          </ul>
        </div>
      </div>
      <div class="row-60 my-5">
        <div>
          <h2>
            Design
          </h2>
          <p>A very clean, spacious and typography based layout was made. The idea was to showcase the projects on different screen sizes, but not taking up much space on the screen, so the device prototypes with inside scroll allowed it to achieve the desired result, as well as adding some interaction to the site.</p>
          <p>Attention to detail is one of my main principles, so I designed the whole experience to be enjoyable on all screen sizes, with large clickable areas for tapping with the finger.</p>
        </div>
      </div>
      <div class="row-60 my-5">
        <div>
          <h2>
            Development
          </h2>
          <p><a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a framework based on Vue.js, was used to make it come to life. It features a more organised structure and improvements to SEO.</p>
          <p>Using Nuxt, I was able to create my own components for every bit of the site along with their styles and properties.</p>
          <p>Check the source for the project on Github <a href="https://github.com/marcelorubens/mrubens" target="_blank">here</a>.</p>
        </div>
      </div>
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
