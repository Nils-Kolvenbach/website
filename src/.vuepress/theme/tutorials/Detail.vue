<template>
  <div id="tutorial-detail">
    <div id="header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <p class="category">{{ $page.frontmatter.category }}</p>
            <h1>{{ $page.title }}</h1>
            <div class="row">
              <p class="col-xs-12">
                {{ totalMinutesToRead }} minutes to read
              </p>
            </div>
            <p>{{ $page.frontmatter.description }}</p>
            <nk-chip v-for="(tag) in $page.frontmatter.tags">{{ tag }}</nk-chip>
          </div>
          <div class="col-xs-12 col-md-6">
            <nk-asset :title="$page.title" :src="assetSrc" :type="assetType"></nk-asset>
          </div>
        </div>
      </div>
    </div>
    <section id="content-container">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-6">
            <Content/>
          </div>
          <div class="col-xs-12 col-md-6">
            <nk-card title="Lessons">
              <ol>
                <li v-for="(lesson) in lessons">
                  <p>
                    <a :href="lesson.path">
                      {{ lesson.title }}
                    </a><br>
                    {{ lesson.frontmatter.description }}
                  </p>
                </li>
              </ol>
            </nk-card>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#header {
  padding: $spacer * 2 0;
  background-color: $color-primary;
  color: $color-foreground;

  > .container > .row {
    align-items: center;
  }

  .category {
    margin: 0;
    color: $color-light;
  }

  h1 {
    margin: 0;
  }

  .card {
    color: $color-text;
  }
}

#content-container {
  padding: $spacer * 2 0;
  background-color: $color-foreground;

  .card {
    position: sticky;
    top: $spacer * 2;
  }
}

#lessons {
  padding-top: $spacer * 2;
}
</style>

<script>
export default {
  props: ['value'],

  computed: {
    lessons() {
      return this.value.sort((a, b) => {
        return a.frontmatter.order - b.frontmatter.order;
      });
    },
    totalMinutesToRead() {
      let totalMinutesToRead = 0;
      this.lessons.forEach((lesson) => {
        if (lesson.readingTime) {
          totalMinutesToRead = totalMinutesToRead + Math.ceil(lesson.readingTime.minutes.toFixed(2));
        }
      });
      return totalMinutesToRead;
    },
    assetType() {
      if (this.$page.frontmatter.video) {
        return 'youtube'
      } else if (this.$page.frontmatter.image) {
        return 'image';
      }
    },
    assetSrc() {
      if (this.$page.frontmatter.video) {
        return this.$page.frontmatter.video;
      } else if (this.$page.frontmatter.image) {
        return this.$page.frontmatter.image;
      }
    }
  }
}
</script>