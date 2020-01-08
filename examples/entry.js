import Vue from 'vue';
import App from './app';
import VueRouter from 'vue-router';
import hljs from 'highlight.js';
import routes from './routes';
import FingoCom from 'main/index';
import demoBlock from './components/demo-block';
import Element from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css'
import './assets/styles/common.css';
import './assets/styles/fonts/style.css';
import 'packages/styles/src/index.scss';
// import icon from './icon.json';

Vue.use(Element);
Vue.use(FingoCom);
Vue.use(VueRouter);
Vue.component('demo-block', demoBlock)

const globalEle = new Vue({
  data: { 
    $isEle: false, 
  },
})

Vue.mixin({
  computed: {
    $isEle: {
      get: () => (globalEle.$data.$isEle),
      set: (data) => {globalEle.$data.$isEle = data;}
    }
  }
});

// Vue.prototype.$icon = icon; // Icon 列表页用

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  // https://github.com/highlightjs/highlight.js/issues/909#issuecomment-131686186
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)');
    Array.prototype.forEach.call(blocks, hljs.highlightBlock);
  });

  document.title = 'Fingo';
});

new Vue({ // eslint-disable-line
  comments: {App},
  render: h => h(App),
  router
}).$mount('#app');
