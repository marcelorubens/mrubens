<template>
  <div id="mainProjects">
    <project-rw />
    <project-hrg />
    <project-monorail />
    <personal-site />
  </div>
</template>

<script>
import ProjectRw from '~/components/projects/ProjectRw.vue'
import ProjectHrg from '~/components/projects/ProjectHrg.vue'
import PersonalSite from '~/components/projects/PersonalSite.vue'
import ProjectMonorail from '~/components/projects/ProjectMonorail.vue'

export default {
  components: {
    ProjectRw,
    ProjectHrg,
    PersonalSite,
    ProjectMonorail
  }
}
</script>
