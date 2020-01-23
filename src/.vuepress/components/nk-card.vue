<template>
  <component v-show="visible === true" :is="element" class="card">
    <div v-if="title || closable === true" class="header">
      <span class="title">{{ title }}</span>
      <button v-if="closable === true" @click="$emit('close')" class="close" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    element: {
      type: String,
      default: 'div'
    },
    visible: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.card {
  margin-bottom: $spacer * 2;
  background-color: $color-foreground;
  border-radius: $border-radius;
  box-shadow: $box-shadow;

  .header {
    display: flex;
    justify-content: space-between;
    padding: $spacer $spacer * 2;
    font-size: $font-size-big;
    border-bottom: 1px solid $color-light;

    .title {}

    button.close {
      border: none;
      padding: 0 $spacer / 2;
      font-size: $font-size-big;
    }
  }

  .content {
    padding: $spacer $spacer * 2;
  }
}
</style>