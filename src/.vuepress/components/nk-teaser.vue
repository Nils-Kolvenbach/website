<template>
  <nk-card element="article">
    <header>
      <nk-asset :title="value.title" :src="value.frontmatter.image" type="image" :href="value.path"></nk-asset>
      <p v-if="showCategory" class="category">{{ value.frontmatter.category }}</p>
      <h2><a :href="value.path">{{ value.title }}</a></h2>
      <!-- <nk-chip v-if="showTags" v-for="(tag) in value.frontmatter.tags">{{ tag }}</nk-chip> -->
    </header>
    <p v-if="showDescription" class="description">{{ value.frontmatter.description }}</p>
  </nk-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    showCategory: {
      type: Boolean,
      default: true
    },
    showImage: {
      type: Boolean,
      default: true
    },
    showTags: {
      type: Boolean,
      default: true
    },
    showDescription: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
article {
  overflow: hidden;

  header {
    .category {
      color: $color-light;
      margin: 0;
    }
  
    h2 {
      margin: 0;
      border: none;
    }
  
    .asset-container {
      margin-top: -$spacer;
      margin-left: -$spacer * 2;
      margin-right: -$spacer * 2;
    }
  }
}
</style>