<template>
  <div id="app-container">
    <header id="app-header">
      <nav class="container">
        <a href="/">
          <img src="/logo.svg" alt="Logo - Nils Kolvenbach">
          <span class="show-md">Nils Kolvenbach</span>
        </a>
        <ul>
          <li><a href="/" :class="{ active: isHomePage($page) }">Home</a></li>
          <li><a href="/curriculum-vitae/" :class="{ active: isCv($page) }">Curriculum Vitae</a></li>
          <!-- <li><a href="/tutorials/" :class="{ active: isTutorialIndex($page) || isTutorialDetail($page) || isLesson($page) }">Tutorials</a></li>
          <li><a href="/blog/" :class="{ active: isBlogIndex($page) || isBlogDetail($page) }">Blog</a></li> -->
        </ul>
        <!-- <button id="menu-toggle" class="hide-md">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        </button> -->
      </nav>
      <div class="container">
        <nk-breadcrumb v-if="getUrlDepth($page.path) > 1"></nk-breadcrumb>
      </div>
    </header>
    <main>
      <Home v-if="isHomePage($page)"></Home>
      <CurriculumVitae v-else-if="isCv($page)"></CurriculumVitae>
      <BlogIndex v-else-if="isBlogIndex($page)" :value="posts"></BlogIndex>
      <nk-article v-else-if="isBlogDetail($page)"></nk-article>
      <TutorialIndex v-else-if="isTutorialIndex($page)" :value="tutorials"></TutorialIndex>
      <TutorialDetail v-else-if="isTutorialDetail($page)" :value="lessonsOfTutorial"></TutorialDetail>
      <nk-article v-else-if="isLesson($page)"></nk-article>
      <Page v-else></Page>
    </main>
    <footer id="app-footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <h6>Legal</h6>
            <ul>
              <li><a href="/legal-notice/">Legal notice (Impressum)</a></li>
              <li><a href="/privacy-policy/">Privacy policy (Datenschutzerklärung)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Home from '@theme/Home.vue';
import CurriculumVitae from '@theme/CurriculumVitae.vue';
import Page from '@theme/Page.vue';
import BlogIndex from '@theme/blog/Index.vue';
import TutorialIndex from '@theme/tutorials/Index.vue';
import TutorialDetail from '@theme/tutorials/Detail.vue';

export default {
  components: { Home, CurriculumVitae, Page, BlogIndex, TutorialIndex, TutorialDetail },

  data() {
    return {}
  },

  computed: {
    posts() {
      return this.$site.pages.filter((page) => {
        return this.isBlogDetail(page);
      });
    },
    tutorials() {
      return this.$site.pages.filter((page) => {
        return this.isTutorialDetail(page);
      });
    },
    lessons() {
      return this.$site.pages.filter((page) => {
        return this.isLesson(page);
      });
    },
    lessonsOfTutorial() {
      return this.lessons.filter((lesson) => {
        return lesson.path.includes(this.$page.path);
      });
    }
  },

  methods: {
    isHomePage(page) {
      return page.path === '/';
    },
    isBlogIndex(page) {
      return page.path === '/blog/';
    },
    isBlogDetail(page) {
      return page.path.startsWith('/blog/') && this.isBlogIndex(page) === false;
    },
    isTutorialIndex(page) {
      return page.path === '/tutorials/';
    },
    isTutorialDetail(page) {
      if (page.path.startsWith('/tutorials/') === false || this.isTutorialIndex(page) === true) {
        return false;
      }
      return this.getUrlDepth(page.path) === 2;
    },
    isLesson(page) {
      if (page.path.startsWith('/tutorials/') === false || this.isTutorialDetail(page) === true) {
        return false;
      }
      return this.getUrlDepth(page.path) === 3;
    },
    isCv(page) {
      if (page.path === '/curriculum-vitae/') {
        return true;
      }
      return false;
    },
    getUrlDepth(url) {
      // Remove beginning slash if existing
      if (url.charAt(0) === '/') {
        url = url.slice(1);
      }
      // Remove ending slash if existing
      if (url.charAt(url.length - 1) === '/') {
        url = url.slice(0, -1);
      }
      if (!url) {
        return 0;
      }
      return url.split('/').length;
    }
  },

  mounted() {}
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';
@import '../scss/global';

#app-header {
  background-color: $color-primary;
  padding: $spacer 0;

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > a {
      display: flex;
      align-items: center;
      color: $color-foreground;
      padding: $spacer / 2 0;
      margin-right: $spacer * 4;

      &:hover {
        text-decoration: none;
      }

      img {
        height: $spacer * 2;
        margin-right: $spacer / 2;
        border-radius: 3px;
      }

      span {
        font-size: $font-size-big * 1.2;
        font-weight: $font-weight-heading;
        line-height: 1.4;
        height: 30px;
      }
    }

    ul {
      display: flex;
      margin: 0;
      padding: 0;

      li {
        list-style-type: none;

        &:not(:last-of-type) {
          margin-right: $spacer;
        }

        a {
          display: block;
          padding: $spacer / 2 $spacer;
          color: $color-foreground;
          text-decoration: none;
          border-bottom: 2px solid transparent;

          &.active, &:hover {
            color: $color-foreground;
            background-color: transparent;
            border-color: $color-foreground;
          }
        }
      }
    }

    #menu-toggle {
      margin-left: auto;

      svg {
        width: $spacer * 1.5;
        height: $spacer * 1.5;
      }
    }
  }
}

#app-footer {
  background-color: $color-primary;
  color: $color-foreground;
  padding: $spacer * 2 0;

  ul {
    padding: 0;
    list-style: none;

    li {
      a {
        color: $color-light;
      }
    }
  }
}
</style>