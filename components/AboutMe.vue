<template>
  <section id="aboutMe" class="d-flex flex-column justify-center">
    <div class="container">
      <h1>About</h1>
      <div class="row-60">
        <div>
          <p>With a degree in Graphic Design from UFSC, one of the best Federal Universities in Brazil, and having studied Graphic Communication and Photography in England, I've been working with digital and web design and web development for the past 6 years.</p>
          <p>From early concepts and research, going through wireframing, hi-def and interactive prototypes and front end code implementation, all the way up to user testing and refinement, I am able to create or redesign and analyse pleasant user focused experiences.</p>
          <p>I'm a great team player, very curious, enthusiastic and chilled person always open for new exchanges.</p>
          <icon-links />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import IconLinks from '~/components/IconLinks.vue'

export default {
  components: {
    IconLinks
  }
}
</script>
