<template>
  <div id="tutorial-detail">
    <header id="header">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-5">
            <p class="category">{{ $page.frontmatter.category }}</p>
            <h1>{{ $page.title }}</h1>
            <div class="row">
              <p class="col-xs-12">
                {{ totalMinutesToRead }} minutes to read this tutorial including all lessons
              </p>
            </div>
            <p>{{ $page.frontmatter.description }}</p>
            <nk-chip v-for="(tag) in $page.frontmatter.tags">{{ tag }}</nk-chip>
          </div>
          <div class="col-xs-12 col-md-7">
            <nk-asset :title="$page.title" :src="assetSrc" :type="assetType"></nk-asset>
          </div>
        </div>
      </div>
    </header>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-5">
            <nk-card id="lessons" title="Lessons">
              <ol>
                <li v-for="(lesson, index) in lessons">
                  <a :href="lesson.path">
                    <span class="index">{{ index + 1 }}.</span>
                    <div>
                      <span class="title">{{ lesson.title }}</span>
                      <span class="description">{{ lesson.frontmatter.description }}</span>
                    </div>
                  </a>
                </li>
              </ol>
            </nk-card>
          </div>
          <div class="col-xs-12 col-md-7">
            <article id="intro">
              <nk-share></nk-share>
              <Content/>
            </article>
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
  padding-bottom: $spacer * 6;

  .row {
    align-items: center;
  }

  .category {
    margin: 0;
    color: $color-light;
  }

  h1 {
    margin: 0;
  }

  .asset-container {
    border-radius: $border-radius;
    overflow: hidden;
  }
}

section {
  background-color: $color-foreground;
}

#lessons {
  position: sticky;
  top: $spacer * 2;
  margin-top: -66px;

  /deep/ .content {
    padding: 0;

    ol {
      list-style-type: none;
      padding: 0;
      margin: 0;

      li {
        border-bottom: 1px solid $color-light;

        &:last-of-type {
          border-bottom: none;
        }

        a {
          display: flex;
          align-items: center;
          padding: $spacer $spacer * 2;
          color: $color-text;

          &:hover {
            text-decoration: none;
            background-color: $color-background;
          }

          .index {
            margin-right: $spacer * 2;
          }

          >div {
            width: 100%;
          }

          .title,
          .description {
            display: block;
            padding-right: $spacer * 2;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }

          .description {
            color: $color-light;
          }
        }
      }
    }
  }
}

#intro {
  @media only screen and (min-width: map-get($breakpoints, 'md')) {
    margin-top: -$spacer * 3.5;
  }
}
</style>

<script>
export default {
  props: ['value'],

  computed: {
    /**
     * Returns an array of lessons sorted by the order value from smallest to highest
     */
    lessons() {
      return this.value.sort((a, b) => {
        return a.frontmatter.order - b.frontmatter.order;
      });
    },
    /**
     * Returns the time to read all lessons in minutes rounded up to the next largest whole number
     */
    totalMinutesToRead() {
      let totalMinutesToRead = 0;
      // Add the time to read from this intro page
      totalMinutesToRead += this.$page.readingTime.minutes;
      // Add the time to read of all lessons of this tutorial
      this.lessons.forEach((lesson) => {
        if (lesson.readingTime) {
          totalMinutesToRead += lesson.readingTime.minutes;
        }
      });
      return Math.ceil(totalMinutesToRead);
    },
    /**
     * Returns the type of asset available
     */
    assetType() {
      if (this.$page.frontmatter.video) {
        return 'youtube'
      } else if (this.$page.frontmatter.image) {
        return 'image';
      }
    },
    /**
     * Returns the URL or path to the available asset
     */
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