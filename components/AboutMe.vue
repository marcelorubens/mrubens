<template>
  <section id="aboutMe" class="d-flex flex-column justify-center">
    <div class="container">
      <h2 class="font-huge">About</h2>
      <div class="row-60">
        <div>
          <p>With a degree in Graphic Design from UFSC, one of the best Federal Universities in Brazil, and having studied Graphic Communication and Photography in England, I've been working with digital and web design and web development for the past 6 years.</p>
          <p>From early concepts and research, going through wireframing, hi-def and interactive prototypes and front end code implementation, all the way up to user testing and refinement, I am able to create or redesign and analyse pleasant user focused experiences.</p>
          <p>I'm a great team player, very curious, enthusiastic and chilled person always open for new exchanges.</p>
          <icon-links />
        </div>
        <div class="profile-picture">
          <div class="profile-picture__img" :style="{ backgroundImage: `url(${profilePicture})` }" />
          <div class="profile-picture__bg">
            <div ref="profileEffect" class="profile-picture__bg-effect" :style="{ backgroundImage: `url(${profileBg})` }" />
            <svg width="0" height="0">
              <clipPath id="profile-clip" clipPathUnits="objectBoundingBox" transform="scale(0.0015625, 0.00125)">
                <path xmlns="http://www.w3.org/2000/svg" d="M639.8,684.18c-14.18-55.94-26.15-80.43-44.57-102.8-11.57-14-14.06-19.57-15.16-22s-4.68-6.06-20.67-6.61c-2.2-4.41-4.13-7.72-25.35-14.88-9.65-7.17-10.2-6.62-14.06-7.72s-6.39-7.25-15-8.22c-6-.68-5.46-5.18-9.06-7.33,0,0-3.77-2.94-11.67-3.41-5.93-.36-7.55-5-10.24-6.47s-4-.9-5.75-1.44-3.78-1.26-7.91-5.39-6.64-7.19-10.6-8.44-4.31-1.26-9-2.88-7.9-6.29-12.58-4.67c-4.31-3.95-7.54-7-12-9,0-3.95-2.16-36.83-1.08-40.42a49.48,49.48,0,0,0,2.16-10.78c.53-5,1.43-13.84,1.25-18.15,2.12-1.34,6.19-.19,10.14-4.73,0,0,2.27-1.75,4.55-11.53s5.88-18.22,8.45-26.57,2.65-14.62,1-21.17-5.79-10.82-8.83-11.11c.1-2.28-.95-7.12.19-10.16s-.85-8.73-.19-13,.57-5.89-.19-8.54-.09-7.5-.09-9.12-1.33-2.94-1.62-6.07-1-6.08-.85-7.41,2.66,1.33,3.51-.56,1.14-6.17-1.14-10.45-2.56-9.1-4-11.37-3.7-4.27-3.7-7.68-1.42-2.84-2.55-6.25-6.39-10.51-8.45-13.92-1.78-6.54-4.63-9.67-9.66-5.68-10.23-7.95-4.26-9.1-8.52-13.07-12.51-8.81-21-8.81c0-3.41-1.14-1.71-4.83-4.84s-8.24-1.42-10.23-4-2.85-2.85-10.52-4.55-14.49-6.25-17.9-7.67-8.81-1.71-11.65-2-11.37-.86-15.35,1.7-7.67,5.69-11.65,5.69-19.89-.57-26.43-3.13a23.77,23.77,0,0,0-14.49-.85c-2.85.57-2.56,1.13-4.55,4.83s-3.7,4.83-5.12,6.53-.75,3.4-1,4.73-4.68,4.3-7.45,4.78-6.31,4.88-9.37,8-5.73,4.68-7.64,7.93-2.39,5.54-4.59,8.31-4.2,10.8-6.78,14.34-2.77,7.07-3.35,9.36-.76,5.54-3.92,6.79-3.34,2.29-4.1,2,.86,2.68,3.44,2.3c1.33,2.77.86,6.4.95,10.51s1,17.68.57,21,1.44,2.2,1.53,5.83S195,287,195,289.34s.48,2.2,1.05,4.87,3.34,5.55,3.25,10.23,2.48,12.52,2.1,14.91-.86,3.91,1,6.49,1.91,2,1.91,5.45a16.26,16.26,0,0,0,2.77,8.79c1.53,2.39,2.49,3.92,2.49,5.83s1.91,4.87,1.91,6.78.38,4.3.38,6.22-.29,1.33-.48,1.91-4.2,1.62-3.53,8.79,6.4,21.4,9,26.85,10.8,24.27,12.8,27,3.16,4.3,5.36,4.87a20.79,20.79,0,0,1,2.32,5.62c.52,2,0,3.76,1.35,6a21.9,21.9,0,0,1,2.51,5.74,32.86,32.86,0,0,0,1.87,4.9c.94,2.08,2,3.54,2.51,5.32s4.48,5.73,5.11,7.61.1,2.4-1.67,2.61-18.67,2.4-24.31,3.34S208,471.87,201,475.21s-7.51,4.48-13.15,7.2-11.37,3.75-20.23,8.65-20.13,5.53-28.06,7.41-14.2,3.73-18.46,6.47c-1.46.94-5.22,1.35-7,1s-5.91,2.65-7.93,4.9c-.94,1.05-1.57.42-3.44,2.51s-3.44,4.06-5.53,6.15-9.18,4.8-13.14,8.14a333.7,333.7,0,0,0-29.63,30c-11.16,13-22.22,27.95-26.28,34.32s-4.38,5.31-6.26,6.25-4.73,0-10.38,12.7a12.73,12.73,0,0,1-6.83,6.29c-1.78.83-4.72,6.05-4.72,6.05V0H640V800Z" style="fill:none"/>
              </clipPath>
            </svg>
          </div>
        </div>
      </div>
      <div id="contactMe" class="my-5">
        <p class="mb-1">Want to know more about me or my work? Get in touch:</p>
        <p class="font-huge"><a href="mailto:marcelorubensraulino@gmail.com" target="_blank" class="animation">Send an e-mail</a></p>
      </div>
    </div>
  </section>
</template>

<script>
import profilePicture from '~/assets/img/profile-picture.png'
import profileBg from '~/assets/img/icon.svg'
import IconLinks from '~/components/IconLinks.vue'

export default {
  components: {
    IconLinks
  },
  data () {
    return {
      profilePicture,
      profileBg
    }
  },
  mounted () {
    this.$refs.profileEffect.classList.add('play')
  }
}
</script>
