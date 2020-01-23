<template>
  <div id="tutorial-detail">
    <div id="header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-8">
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
          <div class="col-xs-12 col-md-4">
            <nk-card>
              <h2>Lessons</h2>
              <ul>
                <li v-for="(lesson) in lessons">
                  <a :href="lesson.path">
                    {{ lesson.title }}
                  </a>
                </li>
              </ul>
            </nk-card>
          </div>
        </div>
      </div>
    </div>
    <nk-article></nk-article>
  </div>
</template>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#header {
  padding: $spacer * 2 0;
  background-color: $color-primary;
  color: $color-foreground;

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
    }
  }
}
</script>