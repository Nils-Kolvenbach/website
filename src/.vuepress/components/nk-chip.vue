<template>
  <component :is="element" class="chip">
    <slot></slot>
  </component>
</template>

<script>
export default {
  props: {
    link: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    element() {
      if (this.link === true) {
        return 'button';
      }
      return 'span'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.chip {
  align-items: center;
  display: inline-flex;
  background-color: $color-foreground;
  color: $color-text;
  font-size: $font-size;
  height: $spacer * 2;
  padding: 0 $spacer;
  margin: $spacer / 2 0;
  margin-right: $spacer / 2;
  border-radius: ($font-size * $line-height) / 2;
  border: 1px solid $color-divider;
  vertical-align: middle;
  white-space: nowrap;

  &:last-of-type {
    margin-right: 0;
  }
}

a.chip, button.chip {
  color: $color-links;
  border-color: $color-links;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    background-color: $color-links;
    color: $color-foreground;
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }
}
</style>