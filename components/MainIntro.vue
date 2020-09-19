<template>
  <section id="mainIntro" class="d-flex flex-column justify-center">
    <div class="container">
      <p class="font-huge font-bold mb-3">
        Hi, I'm Marcelo, <br>
        a <span class="font-featured">designer</span> <br>
        & <span class="font-featured">web developer</span>.
      </p>
      <p>
        Here you can <a class="animation" @click="$parent.scrollTo('#mainProjects')">check my work</a>,
        <a class="animation" @click="$parent.scrollTo('#aboutMe')">know about me</a> or
        <a class="animation" @click="$parent.scrollTo('#contactMe')">get in touch</a>.
      </p>
    </div>
  </section>
</template>
