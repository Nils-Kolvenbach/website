export default {

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
      return this.urlDepth(page.path) === 2;
    },
    isLesson(page) {
      if (page.path.startsWith('/tutorials/') === false || this.isTutorialDetail(page) === true) {
        return false;
      }
      return this.urlDepth(page.path) === 3;
    },
    isCv(page) {
      if (page.path === '/curriculum-vitae/') {
        return true;
      }
      return false;
    },
    urlDepth(url) {
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

  computed: {
    $title () {
      const brand = 'Nils Kolvenbach';
      if (this.isHomePage(this.$page)) {
        return this.$page.frontmatter.title;
      } else if (this.isTutorialDetail(this.$page)) {
        return `Tutorial: ${this.$page.frontmatter.title} | ${brand}`;
      } else if (this.isLesson(this.$page)) {
        return `${this.$page.frontmatter.title} (${this.parentTutorial.title}) | ${brand}`;
      }
      return `${this.$page.frontmatter.title} | ${brand}`;
    },
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
    },
    parentTutorial() {
      return this.$site.pages.find((page) => {
        let currentPath = this.$page.path;
        // Remove beginning slash if existing
        if (currentPath.charAt(0) === '/') {
          currentPath = currentPath.slice(1);
        }
        // Remove ending slash if existing
        if (currentPath.charAt(currentPath.length - 1) === '/') {
          currentPath = currentPath.slice(0, -1);
        }
        let currentPathArray = currentPath.split('/');
        currentPathArray.pop();
        return page.path === `/${currentPathArray.join('/')}/`;
      });
    },
  }

};