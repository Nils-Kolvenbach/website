<template>
  <component :is="element" :class="{'asset-container': true, 'avatar': type === 'avatar'}" :href="link">
    <img v-if="type === 'image' || type === 'avatar'" :alt="title" :src="src" loading="lazy">
    <iframe v-else-if="type === 'youtube'" :title="title" :src="`https://www.youtube-nocookie.com/embed/${src}`" loading="lazy" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div v-if="hasOverlay" :class="`overlay overlay-${overlay}`">
      <slot></slot>
    </div>
  </component>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    src: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      required: true
    },
    href: {
      type: String,
      default: ''
    },
    overlay: {
      type: String,
      default: 'full'
    }
  },

  computed: {
    element() {
      if (this.href !== '') {
        return 'a';
      }
      return 'div'
    },
    link() {
      if (this.href !== '') {
        return this.href;
      }
      return false;
    },
    hasOverlay() {
      return !!this.$slots.default;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
@import '../scss/_mixins.scss';
.asset-container {
  position: relative;

  &:before {
    display: block;
    content: "";
    // Enforces a 21:9 aspect ratio on all assets
    padding-top: percentage(9 / 21);
  }

  &.avatar {
    background-color: transparent;
    margin: 0;

    &:before {
      padding-top: 100%;
    }

    > img {
      border-radius: 50%;
      background-color: $color-light;
      box-shadow: $box-shadow;
    }
  }

  > p {
    @include fill-container;
  }

  > iframe,
  > embed,
  > object,
  > video,
  > img {
    @include fill-container;
    border: 0;
  }

  & > .overlay {
    @include fill-container;
    background-color: rgba($color-primary, .8);
    padding: $spacer * 2;

    &.overlay-bottom {
      top: initial;
      bottom: 0;
      height: initial;
    }
    &.overlay-top {
      top: 0;
      height: initial;
    }
    &.overlay-left {
      left: 0;
      width: initial;
    }
    &.overlay-right {
      left: initial;
      right: 0;
      width: initial;
    }
  }
}
</style>