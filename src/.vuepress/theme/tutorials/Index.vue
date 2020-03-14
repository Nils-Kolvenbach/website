<template>
  <div id="tutorials">
    <header>
      <div class="container">
        <h1>{{ $page.title }}</h1>
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <label for="filter-search">Search</label>
          <input type="text" id="filter-search" v-model="filter.search">
        </div>
        <div class="col-xs-12 col-md-4">
          <label for="filter-category">Category</label>
          <select id="filter-category" v-model="filter.category">
            <option value="">All</option>
            <option v-for="(category) in categories">{{ category }}</option>
          </select>
        </div>
        <div class="col-xs-12 col-md-4">
          <label for="filter-tags">Tags</label>
          <nk-chip v-for="(tag) in tags" @click="onTagClick(tag)" :link="true" :class="{ active: isTagActive(tag) }">{{ tag }}</nk-chip>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-md-6" v-for="(tutorial) in filteredTutorials">
          <nk-teaser :value="tutorial"></nk-teaser>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';
header {
  background-color: $color-primary;
  color: $color-foreground;
  text-align: center;
  padding: $spacer * 2 0;
  margin-bottom: $spacer * 2;

  h1 {
    border: none;
    margin: 0;
  }
}
</style>

<script>
export default {
  props: ['value'],

  data() {
    return {
      filter: {
        search: '',
        category: '',
        tagsSelected: []
      }
    }
  },

  methods: {
    onTagClick(tag) {
      if (this.filter.tagsSelected.includes(tag)) {
        this.filter.tagsSelected.splice(this.filter.tagsSelected.indexOf(tag), 1);
      } else {
        this.filter.tagsSelected.push(tag);
      }
    },
    isTagActive(tag) {
      return this.filter.tagsSelected.includes(tag);
    }
  },

  computed: {
    filteredTutorials() {
      return this.value.filter((tutorial) => {
        let show = true;
        // Filter out any tutorial not matching the full text search
        if (this.filter.search !== '' && (tutorial.frontmatter.title.includes(this.filter.search) === false && tutorial.frontmatter.description.includes(this.filter.search) === false)) {
          show = false;
        }
        // Filter out any tutorial not matching the selected category
        if (this.filter.category !== '' && tutorial.frontmatter.category !== this.filter.category) {
          show = false;
        }
        // Filter out any tutorial not matching the selected tags
        this.filter.tagsSelected.forEach((tag) => {
          if (tutorial.frontmatter.tags.includes(tag) === false) {
            show = false;
          }
        });
        return show;
      });
    },
    categories() {
      let categories = [];
      this.value.forEach((tutorial) => {
        if (categories.includes(tutorial.frontmatter.category) === false) {
          categories.push(tutorial.frontmatter.category);
        }
      });
      return categories;
    },
    tags() {
      let tags = [];
      this.value.forEach((tutorial) => {
        if (tutorial.frontmatter.tags) {
          tutorial.frontmatter.tags.forEach((tag) => {
            if (tags.includes(tag) === false) {
              tags.push(tag);
            }
          });
        }
      });
      return tags;
    }
  }
}
</script>