<template>
  <div id="mainProjects">
    <project-component />
    <project-component />
    <project-component />
  </div>
</template>

<script>
import ProjectComponent from '~/components/ProjectComponent.vue'

export default {
  components: {
    ProjectComponent
  }
}
</script>
