<template>
  <div id="mainProjects">
    <project-rw />
    <project-hrg />
  </div>
</template>

<script>
import ProjectRw from '~/components/projects/ProjectRw.vue'
import ProjectHrg from '~/components/projects/ProjectHrg.vue'

export default {
  components: {
    ProjectRw,
    ProjectHrg
  }
}
</script>
