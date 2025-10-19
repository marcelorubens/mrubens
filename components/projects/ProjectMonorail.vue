<template>
  <section>
    <div class="container">
      <p class="font-gray"><i>Disclaimer: this is private content, please do not share anywhere public.</i></p>
      <h2 class="font-huge">
        <span class="font-featured font-featured--secondary">03.</span> Monorail
      </h2>
      <project-tags ux_ui dev />
      <div class="row-60">
        <div>
          <p>Fintech app redesign and new features for both mobile and desktop.</p>
        </div>
      </div>
      <device-hero project-key="mr1" image-format="png" />
      <div class="row-50 my-5 vh-80">
        <div class="d-flex flex-column justify-center">
          <h2>The problem</h2>
          <p>
            Changing a brand's identity and its direction can be complex... <br>
            Monorail used to be known as Vimvest, which was a great product already, but it was missing some key elements for it to thrive.
          </p>
          <p>Things like:</p>
          <ul>
            <li>Overall organization</li>
            <li>Focus on the most important features</li>
            <li>Clear communication</li>
            <li>Responsiveness for every screen size</li>
          </ul>
        </div>
        <div class="d-flex flex-column justify-center">
          <img src="@/public/img/mr-old.png" class="shadow border-radius">
        </div>
      </div>
      <div class="row-60">
        <div>
          <h2>New direction</h2>
          <p>The main focus now is to help people organize their finances and save money to fulfill their life goals through a new set of features:</p>
          <ul class="mb-3">
            <li><b>Wishlist</b> - add items from your favourite stores and buy when you have the funds</li>
            <li><b>Money</b> - create a checking account, get a debit card with cashback and create goals for saving money</li>
            <li><b>Invest</b> - invest your money on the stock market or create milestone goals with different portfolio profiles</li>
          </ul>
          <p>
            With these 3 main categories in mind, it was possible to minimize the complexity of the interface and focus on what really matters.
          </p>
        </div>
      </div>
    </div>
    <div class="border-radius gray-banner my-5">
      <div class="container">
        <div class="row-60 align-center">
          <img src="@/public/img/mr-navbar.png">
          <div class="p-sm-2">
            <p class="m-0">
              Starting with mobile, the main categories became a floating nav bar.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="border-radius gray-banner desktop-nav-banner my-5">
      <div class="container">
        <div class="row-60 align-center">
          <div class="py-2 p-sm-2">
            <p class="m-0">
              Which was then adapted to the desktop experience, having the sub categories as tabs underneath.
            </p>
          </div>
        </div>
      </div>
      <img src="@/public/img/mr-navbar-desktop-2.png">
    </div>
    <div class="container">
      <div class="row-60">
        <div>
          <h2>Wishlist</h2>
          <p>A view of your favourite items and the option to add more when providing a URL.</p>
        </div>
      </div>
      <device-hero project-key="mr2" image-format="png" mobile-overlay />
      <div class="row-60">
        <div>
          <h2>Money</h2>
          <p>Access to your checking account, debit card management, cashback rewards and you saving goals.</p>
        </div>
      </div>
      <device-hero project-key="mr3" image-format="png" scroll mobile-overlay />
      <div class="row-60">
        <div>
          <h2>Invest</h2>
          <p>Stocks management and marketplace, milestone goals for long term investments.</p>
        </div>
      </div>
      <device-hero project-key="mr4" image-format="png" scroll mobile-overlay />
      <div class="row-60">
        <div>
          <h2>Development & implementation</h2>
          <p>
            The whole design process involved rounds of validation and iteration, migrating from Sketch to Figma so we could use the shared tools and prototyping.<br>
            All of that as part of an Agile/Lean UX methodology.
          </p>
          <p>
            After the drawing board, the implementation was done using Angular as framework, with Sass and CSS native variables to achieve the most organized and efficient project with the extensive use of components.
          </p>
          <p>
            Recently released, now it's the step where data is collected from the users through tracking and analytics tools, allowing the project to be constantly improved.
          </p>
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
