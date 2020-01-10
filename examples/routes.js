import layout from './components/layout';

export const menus = [{
  name: 'devGuide',
  label: '开发指南',
  list: [{
    path: 'installation',
    name: 'installation',
    component: () => import('./docs/installation.md'),
    label: '安装'
  }, {
    path: 'quickstart',
    name: 'quickstart',
    component: () => import('./docs/quickstart.md'),
    label: '快速开始'
  }]
}, {
  name: 'components',
  label: '组件',
  list: [{
    path: 'enterPassword',
    name: 'enterPassword',
    component: () => import('./docs/enterPassword.md'),
    label: '密码输入'
  }]
}, {
  name: 'styles',
  label: '样式',
  list: [{
    path: 'reference',
    name: 'reference',
    component: ()=> import('./docs/styles/reference.md'),
    label: '样式引入'
  }, {
    path: 'text',
    name: 'text',
    component: () => import('./docs/styles/text.md'),
    label: '文本'
  },{
    path: 'margin',
    name: 'margin',
    component: ()=> import('./docs/styles/margin.md'),
    label: 'margin边距'
  }, 
  {
    path: 'padding',
    name: 'padding',
    component: ()=> import('./docs/styles/padding.md'),
    label: 'padding边距'
  },{
    path: 'flex',
    name: 'flex',
    component: ()=> import('./docs/styles/flex.md'),
    label: 'flex布局'
  }]
}];

function getRoute() {
  let routes = [];
  menus.forEach(item => {
    if (item.list) {
      routes = routes.concat(item.list);
    } else {
      routes.push(item);
    }
  });
  return routes;
}

export default [{
  path: '/',
  redirect: '/component/installation'
},
{
  path: '/component',
  name: 'component',
  component: layout,
  children: getRoute()
}];
