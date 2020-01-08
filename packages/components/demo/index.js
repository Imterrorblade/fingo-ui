import Demo from './src/main';

Demo.install = function(Vue) {
  Vue.Component(Demo.name, Demo);
};
export default Demo;
