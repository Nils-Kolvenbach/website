<template>
  <div id="app-container">
    <header id="app-header">
      <nav class="container" aria-label="The desktop main menu">
        <a href="/">
          <img src="/logo.svg" alt="Logo - Nils Kolvenbach">
          <span class="show-md">Nils Kolvenbach</span>
        </a>
        <ul class="show-md">
          <li><a href="/" :class="{ active: isHomePage($page) }">Home</a></li>
          <li><a href="/curriculum-vitae/" :class="{ active: isCv($page) }">Curriculum Vitae</a></li>
          <!-- <li><a href="/tutorials/" :class="{ active: isTutorialIndex($page) || isTutorialDetail($page) || isLesson($page) }">Tutorials</a></li> -->
          <!-- <li><a href="/blog/" :class="{ active: isBlogIndex($page) || isBlogDetail($page) }">Blog</a></li> -->
        </ul>
        <button id="button-open-mobile-drawer" class="hide-md" @click="showDrawer = true" aria-label="Toggle for the mobile main menu drawer" aria-controls="mobile-drawer" :aria-expanded="showDrawer === true">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
        </button>
      </nav>
      <div class="container">
        <nk-breadcrumb v-if="urlDepth($page.path) > 1"></nk-breadcrumb>
      </div>
    </header>
    <transition name="fade">
      <div id="mobile-drawer-backdrop" v-show="showDrawer" @click="showDrawer = false"></div>
    </transition>
    <transition name="slide-right">
      <nav id="mobile-drawer" v-show="showDrawer" aria-label="The mobile main menu drawer">
        <label>Menu</label>
        <ul>
          <li><a href="/" :class="{ active: isHomePage($page) }">Home</a></li>
          <li><a href="/curriculum-vitae/" :class="{ active: isCv($page) }">Curriculum Vitae</a></li>
          <!-- <li><a href="/tutorials/" :class="{ active: isTutorialIndex($page) || isTutorialDetail($page) || isLesson($page) }">Tutorials</a></li> -->
          <!-- <li><a href="/blog/" :class="{ active: isBlogIndex($page) || isBlogDetail($page) }">Blog</a></li> -->
        </ul>
      </nav>
    </transition>
    <main>
      <Home v-if="isHomePage($page)"></Home>
      <CurriculumVitae v-else-if="isCv($page)"></CurriculumVitae>
      <BlogIndex v-else-if="isBlogIndex($page)" :value="posts"></BlogIndex>
      <nk-article v-else-if="isBlogDetail($page)"></nk-article>
      <TutorialIndex v-else-if="isTutorialIndex($page)" :value="tutorials"></TutorialIndex>
      <TutorialDetail v-else-if="isTutorialDetail($page)" :value="lessonsOfTutorial"></TutorialDetail>
      <TutorialLesson v-else-if="isLesson($page)" :value="lessons"></TutorialLesson>
      <Page v-else></Page>
    </main>
    <footer id="app-footer">
      <div class="container">
        <div class="row">
          <div class="col-xs-12 col-md-4">
            <h6>Find me on</h6>
            <div class="also-on">
              <a href="https://github.com/Nils-Kolvenbach" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'github']" />
              </a>
              <a href="https://www.xing.com/profile/Nils_Kolvenbach" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'xing']" />
              </a>
              <a href="https://www.linkedin.com/in/nils-kolvenbach/" target="_blank" rel="noopener noreferrer">
                <font-awesome-icon :icon="['fab', 'linkedin']" />
              </a>
            </div>
          </div>
          <div class="col-xs-12 col-md-4">
            <h6>Special thanks</h6>
            <p>To Katerina Limpitsouni from unDraw for the awesome open-source illustrations and Font Awesome for their Free iconset.</p>
          </div>
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
import TutorialLesson from '@theme/tutorials/Lesson.vue';

export default {
  components: { Home, CurriculumVitae, Page, BlogIndex, TutorialIndex, TutorialDetail, TutorialLesson },

  data() {
    return {
      showDrawer: false
    }
  }
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
        white-space: nowrap;
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

    #button-open-mobile-drawer {
      margin-left: auto;

      svg {
        width: $spacer * 1.5;
        height: $spacer * 1.5;
      }
    }
  }
}

#mobile-drawer-backdrop {
  position: absolute;
  z-index: 9;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba($color-primary, .8);
}

#mobile-drawer {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  bottom: 0;
  width: $spacer * 15;
  box-shadow: $box-shadow;
  background-color: $color-foreground;

  label {
    padding: $spacer / 2 $spacer;
    border-bottom: 1px solid $color-divider;
  }

  ul {
    list-style-type: none;
    padding: 0;

    li {
      a {
        display: block;
        padding: $spacer / 2 $spacer;
        color: $color-text;
        border-left: 2px solid transparent;

        &.active, &:hover {
          color: $color-text;
          background-color: $color-secondary;
          border-color: $color-primary;
          text-decoration: none;
        }
      }
    }
  }
}

#app-footer {
  background-color: $color-primary;
  color: $color-light;
  padding: $spacer * 2 0;

  h6 {
    color: $color-foreground;
  }

  .also-on {

    a {
      font-size: $spacer * 2;
      color: $color-light;
      margin-right: $spacer;

      &:hover {
        text-decoration: none;
        color: $color-foreground;
      }
    }
  }

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