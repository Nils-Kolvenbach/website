<template>
  <nav class="breadcrumb" aria-label="breadcrumb">
    <ol>
      <li v-for="(breadcrumb) in breadcrumbs"><a :href="breadcrumb.path">{{ breadcrumb.title }}</a></li>
      <li class="active" aria-current="page">{{ $page.title }}</li>
    </ol>
  </nav>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      return this.$page.path.split('/').filter((path) => {
        // Remove all empty values
        return path !== '';
      }).filter((path, index, array) => {
        // Remove the last value which is the current page
        return index + 1 !== array.length;
      }).map((path) => {
        // Find each pages information by path ending
        return this.$site.pages.find((page) => {
          return page.path.endsWith(path) || page.path.endsWith(path + '/');
        });
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';
.breadcrumb {
  font-size: $font-size-small;

  ol {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;

    li {
      &:not(:first-child):before {
        display: inline-block;
        padding: 0 $spacer / 2;
        color: $color-light;
        content: "/";
      }

      &.active {
        color: $color-light;
      }
    }
  }
}
</style>