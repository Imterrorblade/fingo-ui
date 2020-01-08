/* Automatically generated by './build/bin/build-entry.js' */

import EnterPassword from '../packages/components/enterPassword/index.js';
// import locale from 'element-ui/src/locale';
// import CollapseTransition from 'element-ui/src/transitions/collapse-transition';

const components = [
  EnterPassword
];

const install = function(Vue, opts = {}) {

  components.forEach(component => {
    Vue.component(component.name, component);
  });

};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version: '1.0.1',
  install,
  EnterPassword
};
