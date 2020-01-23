<template>
  <pre class="code">
    <code :class="classes"><slot></slot></code>
  </pre>
</template>

<script>
import prism from 'prismjs';
export default {
  props: {
    language: {
      type: String,
      required: true
    }
  },

  computed: {
    classes() {
      return `language-${this.language}`;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
</style>