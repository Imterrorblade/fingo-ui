import EnterPassword from '../packages/components/enterPassword/index.js';

const components = [
  EnterPassword
];

const version = `${process.env.version}`

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
  version,
  install,
  components
};
