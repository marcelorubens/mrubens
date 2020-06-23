<template>
  <div class="main-nav">
    <div class="burger-menu">
      <input id="burgerMenu" type="checkbox">
      <nav class="burger-menu--content">
        <a class="button" @click="$parent.$parent.scrollTo('#mainIntro')">home</a>
        <a class="button" @click="$parent.$parent.scrollTo('#mainProjects')">work</a>
        <a class="button" @click="$parent.$parent.scrollTo('#aboutMe')">about</a>
        <a class="button" @click="$parent.$parent.scrollTo('#contactMe')">contact</a>
      </nav>
      <label for="burgerMenu">
        <div class="burger-menu--icon">
          <span />
          <span />
          <span />
        </div>
      </label>
    </div>
  </div>
</template>
