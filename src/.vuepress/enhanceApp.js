import MixinGlobal from './mixins/global';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGraduationCap, faHandshake, faMugHot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faXing, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // Add new Font Awesome icons here
  library.add(faGithub, faXing, faLinkedin, faGraduationCap, faHandshake, faMugHot, faClock);
  Vue.component('font-awesome-icon', FontAwesomeIcon);

  // Add our custom global mixin for shared logic
  Vue.mixin(MixinGlobal);
}