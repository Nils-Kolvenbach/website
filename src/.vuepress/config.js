// import moment from 'moment';

// See: https://vuepress.vuejs.org/config/#basic-config
module.exports = {
  head: [
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'mask-icon', color: '#3c455c', href: '/safari-pinned-tab.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#eef3f2' }],
    ['meta', { name: 'theme-color', content: '#eef3f2' }]
  ],
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    '/': {
      lang: 'en', // this will be set as the lang attribute on <html>
      title: 'Nils Kolvenbach',
      description: ''
    }
  },
  scss: {
    // prependData: '@import "@/../scss/variables.scss";'
  },
  markdown: {
    lineNumbers: true
  },
  plugins: [
    'vuepress-plugin-table-of-contents',
    'vuepress-plugin-smooth-scroll',
    'vuepress-plugin-reading-time',
    [
      '@vuepress/pwa', 
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
      },
    ],
    [
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
      }
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.content__default img'
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'note',
        before: note => `<div class="note-container"><p class="title">${note}</p>`,
        after: '</div>',
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        before: warning => `<div class="warning-container"><p class="title">${warning}</p>`,
        after: '</div>',
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'danger',
        before: danger => `<div class="danger-container"><p class="title">${danger}</p>`,
        after: '</div>',
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'asset',
        defaultTitle: '',
        before: asset => `<div class="asset-container">${asset}`,
        after: '</div>',
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'code',
        defaultTitle: '',
        before: code => `<div class="code-container">${code}`,
        after: '</div>',
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'table',
        defaultTitle: '',
        before: table => `<div class="table-container">${table}`,
        after: '</div>',
      }
    ],
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp, lang) => {
          // Don't forget to install moment yourself
          const moment = require('moment');
          moment.locale(lang);
          return moment(timestamp).fromNow();
        }
      }
    ]
  ]
}