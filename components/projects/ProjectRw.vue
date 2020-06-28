<template>
  <section>
    <div class="container">
      <h2 class="font-huge">
        <span class="font-featured">01.</span> Timeshare Site Redesign
      </h2>
      <div class="row-60">
        <div>
          <p>A very large and well known Timeshares company inquired about a redesign for their main Timeshare Rentals page.</p>
        </div>
      </div>
      <device-hero project-key="rw" />
      <div class="row-50 my-5 vh-80">
        <div class="d-flex flex-column justify-center">
          <h2>Old design</h2>
          <p>While the old layout wasn't delivering the general idea of trust, reliability and guiding the user through the advantages of renting a timeshare using their services, the new layout, on the other hand, tried to better introduce the service and provide several ways to lead the user to the next step on the flow.</p>
        </div>
        <div class="d-flex flex-column justify-center">
          <img src="@/assets/img/rw-old.jpg" class="shadow border-radius">
        </div>
      </div>
    </div>
    <div class="isometric-banner full-width my-5">
      <img src="@/assets/img/rw-isometric.png">
      <div class="container d-flex justify-end">
        <div>
          <h2>Ideas & development</h2>
          <p>At first, a rough sketch was made using Balsamiq Mockups to present the general idea of things we could improve to have a better engagement with the target user.</p>
          <p>After approving the main idea with the client, a high fidelity mockup was made through Sketch App importing some of the components of the original visual identity of the site to maintain consistency, but with a much cleaner and modern look. That allowed us to create clear guidelines to follow when making new pages or redesigning old ones.</p>
          <p>A bunch of interactive prototypes were then presented to the client showing mobile and desktop versions of the page.</p>
          <p>Working along with the client on their Git repository, the code implementation was made for the new page, cleaning old components and allowing the new ones to be used across the board whenever needed.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DeviceHero from '~/components/DeviceHero.vue'

export default {
  components: {
    DeviceHero
  }
}
</script>
