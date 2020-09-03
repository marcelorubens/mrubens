<template>
  <div class="project-tags">
    <span v-if="ux_ui">UX/UI Design</span>
    <span v-if="dev">Development</span>
  </div>
</template>

<script>
export default {
  props: {
    ux_ui: {
      type: Boolean,
      default: false
    },
    dev: {
      type: Boolean,
      default: false
    }
  }
}
</script>
