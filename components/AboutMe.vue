<template>
  <section id="aboutMe" class="d-flex flex-column justify-center">
    <div class="container">
      <h2 class="font-huge">About</h2>
      <div class="row-60">
        <div>
          <p>With a degree in Graphic Design from UFSC, one of the best Federal Universities in Brazil, and having studied Graphic Communication and Photography in England, I've been working with digital and web design and web development for over {{ experience }} years.</p>
          <p>From early concepts and research, going through wireframing, hi-def and interactive prototypes and front end code implementation, all the way up to user testing and refinement, I am able to create or redesign and analyse pleasant user focused experiences.</p>
          <p>I'm a great team player, very curious, enthusiastic and chilled person always open for new exchanges.</p>
          <icon-links />
        </div>
        <div class="profile-picture">
          <div class="profile-picture__img" :style="{ backgroundImage: `url(${profilePicture})` }" />
          <div class="profile-picture__bg">
            <div ref="profileEffect" class="profile-picture__bg-effect" :style='{ backgroundImage: `url("${profileBg}")` }' />
            <svg width="0" height="0">
              <clipPath id="profile-clip" clipPathUnits="objectBoundingBox" transform="scale(0.0015625, 0.00125)">
                <path d="M18.4 800c4.9-1.4 5.6-2.1 6.9-2.6v-22.1c-5.9-5.6-12.5-12.7-11.7-20.3s10.9-9.2 14.8-7.9c0-9.4 3.5-28.3 5.4-35.1-3.5-4-4.2-5.4-5-8.4-.8-3-3-3.5-3.1-4.6-.1-1 .1-6.6 2.7-11.1s5.8-10.2 6.7-14.2c.9-4 1.4-14.3 5.9-15-.5-13.3 4.8-17.9 6.2-28.8s5.4-37.3 8.3-48.6C58.3 569.9 64 555.8 72 545c0 0 6.3-11.4 8.1-16.3 1.8-4.9 9.8-9.5 14.5-12.5 4.6-3 21.8-15.5 29.5-20.4 7.7-4.9 14.2-8.5 19-10.6s16.1-4.4 34.1-11 12.5-6.2 19.5-9.8c7-3.6 12.8-4.4 18.8-7.6 6.1-3.2 7.6-4.8 12.1-7.1s10.2-5.7 12.5-7.2c2.3-1.5 10.6-4.9 14.2-7.2-1.5-12.1-3.1-25.3-6.1-34.3-4.8-6.7-21.8-27.7-28.3-46.5-6.5-18.7-8.3-34.7-9-44.9-4.8-6.3-5.4-8.8-6.3-12.8s-3.4-10.3-3.6-14.3c-.3-4 .1-6.1 1.7-8.1-.9-7.2-.9-13.2-2.5-19.7-1.5-6.6-6.5-12.8-8.3-16.1-1.8-3.4-2.3-9.7-1.4-12.9.9-3.2 1.4-6.2.6-12.9-.8-6.7-.9-7.1-2.3-13.9-1.4-6.8-1-11.9-2.6-15.5s-.9-10.6.6-13.8-1.2-5.5-1.5-8c-.4-2.5 1.3-9.2 3.5-12 2.2-2.8 3-2.3 3-4.3 0-1.9-.5-9 3.7-12.1s4.9-1.3 7-3.5c2.1-2.2 5.4-7.7 7.6-8.4 2.2-.6 1.4.9 4.6-1s9.5-11.6 13.3-14.3c3.7-2.7 9.5-4.8 10.7-7.7 1.2-3 4.9-4.5 7.1-6.6s1.5-3.1 2.1-5.4c.5-2.3 2.1-3.7 8.3-4.1 6.2-.4 1.5 2.3 8.8 2.1s9.2-3.4 15.9-3.4c6.7 0 5.2.8 7.4-.9-1.8-2.6-1.4-3.7-.6-4.8s1 2.2 4.6 1.3c3.6-.9 8.1-1.5 16.4 1.7 8.3 3.2 7 3.9 10.7 2.5 3.7-1.4 4.1-1.5 8-.6 3.9.9 11.4.4 17.2.9 5.8.5 14.7.8 25.4 9.2s9.2 9.8 11.4 9.8c2.2 0 2.6-.3 3.6-1.5 3 1.9 1.4 3.6 5.4 8 0 0 3.7 1.7 9.7 7.4s2.1 6.2 6.6 8.8c4.5 2.6 9.9 6.1 12.6 8.9 2.7 2.8 5.9 4.1 6.3 7.1.4 3 .8 5-1.4 5.3-.6 2.3-.3 7.1.3 13.2.5 6.1 4.1 3.7 5.3 2.2.6 2.8.5 12-.8 14.6-1.3 2.6-3.2 6.1-.4 10.8 2.8 4.8 1 9.7 1.3 19.5.1 3.7-2.2 15.3-1.7 45.5 0 0 6.1 3.6 5.9 17.8-.2 14.1-4.4 16.7-10.1 31.7-3.4 8.9-4.4 17.7-9.4 20.8-5 3.1-6.1 1.7-8.5 1.7-.9 9-1.9 21.7-3.9 29.5.4 6.8 2.3 32 3.1 40.3s3.9 21.8 4.1 27.5c2.8.6 3.4-.6 9.5 2.7 6.2 3.4 16 9.4 19.9 10.6 3.9 1.2 5.3 4.3 9.2 7 3.9 2.7 12.6 9.4 20.5 11.7 7.9 2.3 6.2 1.4 17.4 7.5s22.6 9.9 36.3 15.6c13.7 5.7 30.8 15.9 40.1 20.6 9.3 4.8 12.3 4.8 16.6 6.8s5.7 5.4 8.6 7.5 5.2 3.7 6.7 9.3c1.5 5.5 10.6 17.3 15.9 29.4 5.3 12.1 6.8 17.4 7.6 39.1.8 21.7 2.2 63.1 1.4 71.6 1.8 4.1 5.5 10.3 5.3 13.4s6.8 6.8 8.5 9.9c1.7 3.1 3.9 7.2 3.2 10.1-.6 2.8-7 6.1-8.3 10.6s-2.3 8.6-5.2 11.7c-2.8 3.1-3 5.2-3 6.7-3.4 1.2-8.8 3.2-13.5 5.5-3.1 23.7-15.9 62-21.2 73.7H640V0H0v800h18.4z" style="fill:none"/>
              </clipPath>
            </svg>
          </div>
        </div>
      </div>
      <div id="contactMe" class="my-5">
        <p class="mb-1">Want to know more about me or my work? Get in touch:</p>
        <p><a href="mailto:marcelorubensraulino@gmail.com" target="_blank" class="animation font-huge">Send an e-mail</a></p>
      </div>
    </div>
  </section>
</template>

<script>
import profilePicture from '~/public/img/profile-picture-2.png'
import profileBg from '~/public/img/icon.svg'
import IconLinks from '~/components/IconLinks.vue'

export default {
  components: {
    IconLinks
  },
  data () {
    return {
      profilePicture,
      profileBg,
      experience: Number
    }
  },
  mounted () {
    this.$refs.profileEffect.classList.add('play')
    this.calculateExperience()
  },
  methods: {
    calculateExperience () {
      const currentDate = new Date()
      const startDate = new Date('2013/07/01')
      const difference = currentDate - startDate
      const experience = Math.floor(difference / 31557600000)
      this.experience = experience
    }
  }
}
</script>
