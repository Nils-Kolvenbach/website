<template>
  <div id="nk-lesson">
    <header id="header">
      <div class="top">
        <div class="container">
          <h1>{{ $page.title }}</h1>
        </div>
      </div>
      <div class="bottom">
        <!-- <div class="container">
          <div class="row">
            <div class="col-xs-12 col-md-4">
              1
            </div>
            <div class="col-xs-12 col-md-4">
              1
            </div>
            <div class="col-xs-12 col-md-4">
              1
            </div>
          </div>
        </div> -->
      </div>
    </header>
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-lg-1 col-xl-2 show-lg">
          <nk-share orientation="vertical"></nk-share>
        </div>
        <div class="col-xs-12 col-lg-10 col-xl-8">
          <nk-card element="article">
            <header>
              <nk-asset :title="$page.title" :src="assetSrc" :type="assetType"></nk-asset>
              <div class="row metadata">
                <div class="col-xs-4 metadata-item">
                  <p>
                    <span>Time to read</span>
                    {{ minutesToRead }} minutes
                  </p>
                </div>
                <div class="col-xs-4 metadata-item">
                  <p>
                    <span>Used in this post</span>
                    <template v-for="(technology) in $page.frontmatter.technologies">
                      {{ technology }}<br>
                    </template>
                  </p>
                </div>
                <div class="col-xs-4 metadata-item">
                  <p>
                    <span>This post</span>
                    Published: {{ $page.frontmatter.published }}<br>
                    Updated: {{ $page.lastUpdated }}
                  </p>
                </div>
              </div>
            </header>
            <Content/>
          </nk-card>
          <div class="row">
            <div class="col-xs-12">
              This tutorial is part of the series "<a :href="parentTutorial.path">{{ parentTutorial.title }}</a>"
            </div>
            <div class="col-xs-12 col-md-6">
              <a v-if="previousLesson" :href="previousLesson.path">
                <strong>{{ previousLesson.frontmatter.title }}</strong><br>
                {{ previousLesson.frontmatter.description }}
              </a>
            </div>
            <div class="col-xs-12 col-md-6">
              <a v-if="nextLesson" :href="nextLesson.path">
                <strong>{{ nextLesson.frontmatter.title }}</strong><br>
                {{ nextLesson.frontmatter.description }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],

  data() {
    return {
      currentAbsoluteUrl: ''
    }
  },

  computed: {
    /**
     * Returns an array of lessons sorted by the order value from smallest to highest
     */
    lessons() {
      return this.value.filter((lesson) => {
        return lesson.path.includes(this.parentTutorial.path);
      }).sort((a, b) => {
        return a.frontmatter.order - b.frontmatter.order;
      });
    },
    previousLesson() {
      return this.lessons.find((lesson) => {
        return lesson.frontmatter.order === this.$page.frontmatter.order - 1;
      });
    },
    nextLesson() {
      return this.lessons.find((lesson) => {
        return lesson.frontmatter.order === this.$page.frontmatter.order + 1;
      });
    },
    minutesToRead() {
      if (this.$page.readingTime) {
        return Math.ceil(this.$page.readingTime.minutes.toFixed(2));
      }
      return 0;
    },
    assetType() {
      if (this.$page.frontmatter.video) {
        return 'youtube';
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
  },

  mounted() {
    this.currentAbsoluteUrl = window.location.href;
  },
}
</script>

<style lang="scss" scoped>
@import '../../scss/_variables.scss';

#nk-lesson {

  #header {
    .top {
      background-color: $color-primary;
      color: $color-foreground;
      text-align: center;
      padding-bottom: $spacer * 2;

      h1 {
        border: none;
        margin: 0;
      }
    }

    .bottom {
      padding: $spacer * 2 0;
      padding-bottom: $spacer * 14;
      margin-bottom: $spacer * 2;
      background-color: $color-foreground;
    }
  }

  article {
    overflow: hidden;
    margin-top: -$spacer * 14;

    /deep/ .content {
      padding-top: 0;
    }

    header {
      #category {
        color: $color-light;
        margin: 0;
      }

      h1 {
        margin: 0;
        margin-bottom: $spacer * 2;
        border: none;
      }

      .asset-container {
        margin-top: 0;
        margin-left: -$spacer * 2;
        margin-right: -$spacer * 2;
      }

      .metadata {
        font-size: $font-size-small;
        // text-transform: uppercase;

        .metadata-item {

          p, ul {
            margin: 0;
          }

          span {
            display: block;
            border-bottom: 1px solid $color-divider;
          }
        }
      }
    }
  }
}
</style>