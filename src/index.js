import EnterPassword from '../packages/components/enterPassword/index.js';
import componetnJson from '../components.json';
const components = [
  EnterPassword
];

const version = `${process.env.version}`

const install = function(Vue, opts = {}) {

  components.forEach(component => {
    component.install(Vue);
  });
};

/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

// this is test 

export default {
  version,
  install,
  components
};
