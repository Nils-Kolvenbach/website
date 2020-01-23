<template>
  <div id="blog" class="container">
    <div class="row">
      <div class="col-xs-12 col-lg-3">
        <h1>Blog</h1>
        <p id="intro">
          Welcome to my mind. The following is my subjective opinion at the time of writing. Feel free to start a discussion.
        </p>
        <hr>
        <label for="filter-search">Search</label>
        <input type="text" id="filter-search" v-model="filter.search">
        <label for="filter-category">Category</label>
        <select id="filter-category" v-model="filter.category">
          <option value="">All</option>
          <option v-for="(category) in categories">{{ category }}</option>
        </select>
        <label for="filter-tags">Tags</label>
        <nk-chip v-for="(tag) in tags" :link="true" @click="onTagClick(tag)" :class="{ active: isTagActive(tag) }">{{ tag }}</nk-chip>
      </div>
      <div class="col-xs-12 col-lg-9">
        <div class="row">
          <template v-if="filteredPosts.length === 0">
            <div class="col-xs-12">
              <div id="no-match">
                No post matched your search
              </div>
            </div>
          </template>
          <template v-else>
            <div class="col-xs-12 col-md-6" v-for="(post) in filteredPosts">
              <nk-teaser :value="post"></nk-teaser>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#blog {
  padding-top: $spacer * 2;

  h1 {
    border: none;
    margin: 0;
  }

  #intro {
    margin: 0;
  }

  #no-match {
    border-top: 1px solid $color-light;
    border-bottom: 1px solid $color-light;
    padding: $spacer;
    text-align: center;
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
    filteredPosts() {
      return this.value.filter((post) => {
        let show = true;
        // Filter out any post not matching the full text search
        if (this.filter.search !== '' && (post.frontmatter.title.includes(this.filter.search) === false && post.frontmatter.description.includes(this.filter.search) === false)) {
          show = false;
        }
        // Filter out any post not matching the selected category
        if (this.filter.category !== '' && post.frontmatter.category !== this.filter.category) {
          show = false;
        }
        // Filter out any post not matching the selected tags
        this.filter.tagsSelected.forEach((tag) => {
          if (post.frontmatter.tags.includes(tag) === false) {
            show = false;
          }
        });
        return show;
      });
    },
    categories() {
      let categories = [];
      this.value.forEach((post) => {
        if (categories.includes(post.frontmatter.category) === false) {
          categories.push(post.frontmatter.category);
        }
      });
      return categories;
    },
    tags() {
      let tags = [];
      this.value.forEach((post) => {
        if (post.frontmatter.tags) {
          post.frontmatter.tags.forEach((tag) => {
            if (tags.includes(tag) === false) {
              tags.push(tag);
            }
          });
        }
      });
      return tags;
    }
  },
}
</script>