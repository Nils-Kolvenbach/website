<template>
  <div id="nk-article" class="container">
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {
      currentAbsoluteUrl: ''
    }
  },

  computed: {
    minutesToRead() {
      if (this.$page.readingTime) {
        return Math.ceil(this.$page.readingTime.minutes.toFixed(2));
      }
      return 0;
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
  },

  mounted() {
    this.currentAbsoluteUrl = window.location.href;
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

#nk-article {
  margin-top: $spacer * 2;

  article {
    overflow: hidden;

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